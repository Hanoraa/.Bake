/* =====================================================
   HANORA — MAIN + PRODUCTS + CART
   تمام منطق سایت در یک فایل نگهداری می‌شود.
   اطلاعات محصول در products.js است.
   ===================================================== */

/* AOS */
if (typeof AOS !== 'undefined') {
  AOS.init({ duration: 800, once: true, offset: 60 });
}

/* Navbar Scroll */
const navbar = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  if (!navbar) return;
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

/* Hero Slider */
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.slider-dot');
  const nextBtn = document.querySelector('.slider-arrow.next');
  const prevBtn = document.querySelector('.slider-arrow.prev');
  if (!slides.length) return;

  let currentSlide = 0;
  let autoSlide;
  const slideDuration = 4500;

  function showSlide(index) {
    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;
    currentSlide = index;
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    slides[currentSlide].classList.add('active');
    if (dots[currentSlide]) dots[currentSlide].classList.add('active');
  }
  function nextSlide(){ showSlide(currentSlide + 1); }
  function previousSlide(){ showSlide(currentSlide - 1); }
  function startAutoSlide(){ clearInterval(autoSlide); autoSlide=setInterval(nextSlide,slideDuration); }

  nextBtn?.addEventListener('click',()=>{nextSlide();startAutoSlide();});
  prevBtn?.addEventListener('click',()=>{previousSlide();startAutoSlide();});
  dots.forEach((dot,index)=>dot.addEventListener('click',()=>{showSlide(index);startAutoSlide();}));
  showSlide(0); startAutoSlide();

  const slider=document.querySelector('.hero-slider');
  if(slider){
    slider.addEventListener('mouseenter',()=>clearInterval(autoSlide));
    slider.addEventListener('mouseleave',startAutoSlide);
    let touchStartX=0;
    slider.addEventListener('touchstart',e=>{touchStartX=e.changedTouches[0].screenX},{passive:true});
    slider.addEventListener('touchend',e=>{
      const distance=e.changedTouches[0].screenX-touchStartX;
      if(distance<-50){nextSlide();startAutoSlide();}
      if(distance>50){previousSlide();startAutoSlide();}
    },{passive:true});
  }
});

/* Contact Form */
document.getElementById('contactForm')?.addEventListener('submit', async function(e){
  e.preventDefault();
  const form=this, msg=document.getElementById('formMessage'), btn=document.getElementById('contactSubmitBtn');
  const original=btn?.innerHTML||'';
  if(btn){btn.disabled=true;btn.innerHTML='در حال ارسال... <i class="bi bi-hourglass-split"></i>';}
  if(msg){msg.textContent='';msg.style.color='';}
  try{
    const response=await fetch(form.action,{method:'POST',body:new FormData(form),headers:{Accept:'application/json'}});
    if(!response.ok) throw new Error('send failed');
    if(msg){msg.textContent='✅ پیام شما با موفقیت ارسال شد. با تشکر از شما.';msg.style.color='#e91e63';}
    form.reset();
  }catch(err){
    if(msg){msg.textContent='❌ ارسال ناموفق بود. لطفاً دوباره تلاش کنید یا از دایرکت اینستاگرام پیام دهید.';msg.style.color='#c62828';}
  }finally{
    if(btn){btn.disabled=false;btn.innerHTML=original;}
    setTimeout(()=>{if(msg)msg.textContent='';},6000);
  }
});

/* Login */
window.addEventListener('DOMContentLoaded',()=>{
  const user=JSON.parse(localStorage.getItem('loggedInUser')||'null');
  const navActions=document.getElementById('navActions');
  if(user?.name && navActions){
    navActions.innerHTML=`<span class="fw-semibold ms-2">سلام، ${escapeHtml(user.name)}</span><button onclick="logout()" class="btn-nav outline">خروج</button>`;
  }
});
function logout(){localStorage.removeItem('loggedInUser');location.reload();}

/* =====================================================
   PRODUCTS + CART + FORMSPREE
   ===================================================== */

const CART_KEY = 'hanoraCart';
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xvkzdvzv';

const getProducts = () =>
  Array.isArray(window.HANORA_PRODUCTS) ? window.HANORA_PRODUCTS : [];

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY) || '[]');
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

const formatPrice = n => new Intl.NumberFormat('fa-IR').format(Number(n) || 0);

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>'"]/g, c => ({
    '&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'
  }[c]));
}

function productById(id) {
  return getProducts().find(p => p.id === id);
}

function productCard(product, options = {}) {
  const showOverlay = !!options.overlay;
  const delay = options.delay || 0;
  const optionId = `option-${product.id}`;
  const hasVariants = Array.isArray(product.variants) && product.variants.length;
  const hasFlavors = Array.isArray(product.flavors) && product.flavors.length;

  const badge = product.badge
    ? `<div class="product-badge ${product.badge === 'پیشنهادی' ? 'discount' : ''}">
         <i class="bi bi-${product.badgeIcon || 'stars'}"></i>
         ${escapeHtml(product.badge)}
       </div>`
    : '';

  let selector = '';
  if (hasVariants) {
    selector = `
      <div class="flavor-box product-option-box">
        <label class="flavor-label" for="${optionId}">🍰 انتخاب نوع سفارش</label>
        <select class="flavor-select product-variant-select" id="${optionId}">
          <option value="">انتخاب کنید</option>
          ${product.variants.map(v =>
            `<option value="${escapeHtml(v.value)}">${escapeHtml(v.label)}</option>`
          ).join('')}
        </select>
      </div>`;
  } else if (hasFlavors) {
    selector = `
      <div class="flavor-box">
        <label class="flavor-label" for="${optionId}">🍓 انتخاب طعم</label>
        <select class="flavor-select product-flavor-select" id="${optionId}">
          <option value="">انتخاب کنید</option>
          ${product.flavors.map(f =>
            `<option value="${escapeHtml(f.value)}">${escapeHtml(f.label)}</option>`
          ).join('')}
        </select>
      </div>`;
  }

  const priceText = hasVariants
    ? `<span class="price-prefix">از</span> ${formatPrice(product.price)}`
    : formatPrice(product.price);

  return `
    <div class="col-12 col-sm-6 col-lg-${options.birthday ? '4' : '3'} product-grid-item"
         data-product-category="${escapeHtml(product.category)}"
         data-aos="fade-up" data-aos-delay="${delay}">
      <div class="product-card modern-product-card">
        ${badge}
        <div class="product-img ${options.birthday ? 'birthday-cake-images' : ''} ${showOverlay ? 'has-overlay' : ''}">
          <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" loading="lazy">
          ${showOverlay ? '<div class="product-overlay"><span>مشاهده محصول</span></div>' : ''}
        </div>
        <div class="product-body">
          <div class="product-category">${escapeHtml(product.categoryTitle)}</div>
          <h6>${escapeHtml(product.name)}</h6>
          <div class="product-meta">
            <i class="bi bi-box-seam"></i>
            ${escapeHtml(product.weight)}
          </div>
          ${selector}
          <div class="product-footer">
            <div class="product-price">${priceText} <span>تومان</span></div>
            ${showOverlay ? '<a href="courses.html" class="product-arrow" aria-label="مشاهده محصول"><i class="bi bi-arrow-left"></i></a>' : ''}
          </div>
          ${!showOverlay ? `
            <button type="button" class="btn-add" onclick="addProduct('${product.id}')">
              <i class="bi bi-cart-plus"></i> افزودن به سبد
            </button>` : ''}
        </div>
      </div>
    </div>`;
}

function renderProducts(filter = 'all') {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  const list = getProducts().filter(p =>
    p.category !== 'birthday' &&
    p.category !== 'slices' &&
    (filter === 'all' || p.category === filter)
  );

  grid.innerHTML = list.length
    ? list.map((p, i) => productCard(p, { delay: (i % 4) * 50 })).join('')
    : `<div class="col-12"><div class="empty-products">محصولی در این دسته پیدا نشد.</div></div>`;

  if (typeof AOS !== 'undefined') AOS.refreshHard();
}

function renderBirthdayProducts() {
  const grid = document.getElementById('birthdayProductsGrid');
  if (!grid) return;
  const list = getProducts().filter(p => p.category === 'birthday');
  grid.innerHTML = list.map((p, i) =>
    productCard(p, { birthday: true, delay: i * 70 })
  ).join('');
  if (typeof AOS !== 'undefined') AOS.refreshHard();
}

function renderSliceProducts() {
  const grid = document.getElementById('sliceProductsGrid');
  if (!grid) return;
  const list = getProducts().filter(p => p.category === 'slices');
  grid.innerHTML = list.map((p, i) =>
    productCard(p, { birthday: true, delay: i * 70 })
  ).join('');
  if (typeof AOS !== 'undefined') AOS.refreshHard();
}

function renderPopularProducts() {
  const grid = document.getElementById('popularProductsGrid');
  if (!grid) return;

  const preferred = ['fruit-pie', 'honey-cake', 'tart', 'shah-tot'];
  const list = preferred.map(productById).filter(Boolean);
  grid.innerHTML = list.map((p, i) =>
    productCard(p, { overlay: true, delay: i * 50 })
  ).join('');

  if (typeof AOS !== 'undefined') AOS.refreshHard();
}

function setupFilters() {
  document.querySelectorAll('.product-filter').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.product-filter')
        .forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProducts(btn.dataset.filter || 'all');
    });
  });
}

function addProduct(id) {
  const product = productById(id);
  if (!product) return;

  if (product.variants?.length) {
    const select = document.getElementById(`option-${id}`);
    if (!select?.value) {
      showToast('لطفاً نوع سفارش را انتخاب کنید.');
      select?.focus();
      return;
    }
    addToCart(id, '', select.value);
    return;
  }

  if (product.flavors?.length) {
    const select = document.getElementById(`option-${id}`);
    if (!select?.value) {
      showToast('لطفاً طعم محصول را انتخاب کنید.');
      select?.focus();
      return;
    }
    addToCart(id, select.value);
    return;
  }

  addToCart(id);
}

function addToCart(id, flavor = '', variant = '') {
  const product = productById(id);
  if (!product) return;

  const selectedVariant = product.variants?.find(v => v.value === variant);
  const unitPrice = selectedVariant?.price ?? product.price;
  const optionLabel = selectedVariant?.cartLabel || '';

  const cart = getCart();
  const key = `${id}__${flavor}__${variant}`;
  const existing = cart.find(item => item.key === key);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      key,
      id,
      flavor,
      variant,
      optionLabel,
      unitPrice,
      qty: 1
    });
  }

  saveCart(cart);
  renderCart();
  updateCartCount();

  const detail = optionLabel || flavor;
  showToast(`${product.name}${detail ? ` — ${detail}` : ''} به سبد اضافه شد.`);
}

function removeFromCart(key) {
  saveCart(getCart().filter(i => i.key !== key));
  renderCart();
  updateCartCount();
}

function changeCartQty(key, delta) {
  const cart = getCart();
  const item = cart.find(i => i.key === key);
  if (!item) return;

  item.qty += delta;
  saveCart(item.qty <= 0 ? cart.filter(i => i.key !== key) : cart);
  renderCart();
  updateCartCount();
}

function getItemUnitPrice(item) {
  const product = productById(item.id);
  if (!product) return 0;
  const variant = product.variants?.find(v => v.value === item.variant);
  return variant?.price ?? item.unitPrice ?? product.price;
}

function renderCart() {
  const list = document.getElementById('cartItems');
  const empty = document.getElementById('emptyCartMsg');
  if (!list) return;

  const cart = getCart();
  if (empty) empty.hidden = cart.length > 0;

  list.innerHTML = cart.map(item => {
    const p = productById(item.id);
    if (!p) return '';

    const option = item.optionLabel || item.flavor;
    const unitPrice = getItemUnitPrice(item);

    return `
      <li class="list-group-item cart-item-modern">
        <div class="cart-item-info">
          <img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.name)}">
          <div>
            <strong>${escapeHtml(p.name)}</strong>
            ${option ? `<small>${escapeHtml(option)}</small>` : ''}
            <span>${formatPrice(unitPrice)} تومان</span>
          </div>
        </div>
        <div class="cart-controls">
          <button type="button" onclick="changeCartQty('${escapeHtml(item.key)}',-1)">−</button>
          <b>${formatPrice(item.qty)}</b>
          <button type="button" onclick="changeCartQty('${escapeHtml(item.key)}',1)">+</button>
          <button class="cart-remove" type="button"
                  onclick="removeFromCart('${escapeHtml(item.key)}')" aria-label="حذف">
            <i class="bi bi-trash3"></i>
          </button>
        </div>
      </li>`;
  }).join('');

  const total = cart.reduce((sum, item) =>
    sum + getItemUnitPrice(item) * item.qty, 0);

  let totalBox = document.getElementById('cartTotal');
  if (!totalBox) {
    totalBox = document.createElement('div');
    totalBox.id = 'cartTotal';
    list.parentElement.appendChild(totalBox);
  }

  totalBox.innerHTML = `
    <span>جمع کل سفارش</span>
    <strong>${formatPrice(total)} تومان</strong>`;
}

function updateCartCount() {
  const count = getCart().reduce((sum, i) => sum + (Number(i.qty) || 0), 0);
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = formatPrice(count);
    el.hidden = count === 0;
  });
}

function orderSummary() {
  return getCart().map((item, index) => {
    const p = productById(item.id);
    if (!p) return '';
    const unit = getItemUnitPrice(item);
    const option = item.optionLabel || item.flavor;
    return `${index + 1}. ${p.name}${option ? ` | ${option}` : ''} | تعداد: ${item.qty} | مبلغ: ${formatPrice(unit * item.qty)} تومان`;
  }).filter(Boolean).join('\n');
}

/* =====================================================
   FORMSPREE — SUBMIT ORDER
   ===================================================== */

async function sendOrderEmail(event) {
  event?.preventDefault();

  const cart = getCart();
  const msg = document.getElementById('thankMessage');
  const btn = document.getElementById('submitOrderBtn');

  if (!cart.length) {
    if (msg) {
      msg.textContent = '⚠️ ابتدا حداقل یک محصول به سبد خرید اضافه کنید.';
      msg.style.color = '#c62828';
    }
    return false;
  }

  const name = document.getElementById('userName')?.value.trim() || '';
  const phone = document.getElementById('userPhone')?.value.trim() || '';

  if (!name || !phone) {
    if (msg) {
      msg.textContent = '⚠️ لطفاً نام و شماره تماس را کامل کنید.';
      msg.style.color = '#c62828';
    }
    return false;
  }

  const total = cart.reduce((sum, item) =>
    sum + getItemUnitPrice(item) * item.qty, 0);

  const now = new Date();
  const orderDate = now.toLocaleDateString('fa-IR');
  const orderTime = now.toLocaleTimeString('fa-IR', {
    hour: '2-digit', minute: '2-digit'
  });
  const orderNumber = 'HN-' + Date.now().toString().slice(-8);
  const productsText = orderSummary();
  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);

  const formData = new FormData();
  formData.append('name', name);
  formData.append('phone', phone);
  formData.append('_subject', `سفارش جدید حانورا — ${orderNumber}`);
  formData.append('شماره سفارش', orderNumber);
  formData.append('نام مشتری', name);
  formData.append('شماره تماس', phone);
  formData.append('تاریخ', orderDate);
  formData.append('ساعت', orderTime);
  formData.append('تعداد اقلام', totalItems);
  formData.append('محصولات', productsText);
  formData.append('جمع کل', `${formatPrice(total)} تومان`);

  const original = btn?.innerHTML || 'ثبت سفارش';
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span> در حال ارسال...';
  }
  if (msg) {
    msg.textContent = '';
    msg.style.color = '';
  }

  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      throw new Error(errData?.errors?.[0]?.message || 'ارسال ناموفق بود');
    }

    if (msg) {
      msg.innerHTML = `✅ سفارش شما با موفقیت ثبت شد.<br>
        <small>شماره سفارش: <strong>${escapeHtml(orderNumber)}</strong></small><br>
        <small>به‌زودی با شما تماس می‌گیریم.</small>`;
      msg.style.color = 'var(--pink)';
    }

    document.getElementById('emailForm')?.reset();
    saveCart([]);
    renderCart();
    updateCartCount();

  } catch (error) {
    console.error('Formspree ERROR:', error);
    if (msg) {
      msg.innerHTML = '❌ ارسال سفارش انجام نشد.<br><small>لطفاً دوباره تلاش کنید یا از دایرکت اینستاگرام سفارش دهید.</small>';
      msg.style.color = '#c62828';
    }
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = original;
    }
  }

  return false;
}

function showToast(message) {
  let toast = document.getElementById('hanoraToast');

  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'hanoraToast';
    toast.className = 'hanora-toast';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(window.__hanoraToastTimer);
  window.__hanoraToastTimer = setTimeout(() =>
    toast.classList.remove('show'), 2600);
}

/* Render everything */
window.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  renderBirthdayProducts();
  renderSliceProducts();
  renderPopularProducts();
  setupFilters();
  renderCart();
  updateCartCount();

  // اتصال فرم سفارش به Formspree
  const orderForm = document.getElementById('emailForm');
  if (orderForm) {
    orderForm.addEventListener('submit', sendOrderEmail);
  }
});

/* Compatibility with old inline calls */
function addProductWithFlavor(name, selectId) {
  const p = getProducts().find(x => x.name.trim() === String(name).trim());
  const select = document.getElementById(selectId);

  if (!p) return;
  if (!select?.value) {
    showToast('لطفاً طعم محصول را انتخاب کنید.');
    select?.focus();
    return;
  }

  addToCart(p.id, select.value);
}