/* =====================================================
   HANORA — CENTRAL PRODUCT DATA
   فقط اطلاعات محصولات را اینجا تغییر بده.
   ===================================================== */

window.HANORA_PRODUCTS = [
  {
    id: 'fruit-pie', name: 'پای میوه سیب و هلو', category: 'sweets', categoryTitle: 'FRUIT PIE',
    weight: '۱ کیلوگرم', price: 800000, image: 'images/pieholo.png', badge: 'پرفروش', badgeIcon: 'fire',
    flavors: [{value:'هلو',label:'🍑 هلو'},{value:'آلبالو',label:'🍒 آلبالو'},{value:'سیب',label:'🍎 سیب'},{value:'توت‌فرنگی',label:'🍓 توت‌فرنگی'}]
  },
  {
    id: 'diet-cookie', name: 'کوکی رژیمی', category: 'cookies', categoryTitle: 'DIET COOKIE',
    weight: '۵۰۰ گرم', price: 750000, image: 'images/ck.png',
    flavors: [{value:'شکلاتی',label:'🍫 شکلاتی'},{value:'وانیلی',label:'🍦 وانیلی'},{value:'نسکافه ای',label:'☕ نسکافه ای'},{value:'گردویی',label:'🌰 گردویی'}]
  },
  {
    id: 'tart-let', name: 'تارت لت', category: 'tarts', categoryTitle: 'TART LET',
    weight: 'بسته ۳۰۰ گرمی', price: 300000, image: 'images/tartt.png',
    flavors: [{value:'شکلاتی',label:'🍫 شکلاتی'},{value:'میوه‌ای',label:'🍓 میوه‌ای'},{value:'کاراملی',label:'🍯 کاراملی'},{value:'نسکافه ای',label:'☕ نسکافه ای'}]
  },
  {
    id: 'donut', name: 'دونات', category: 'donuts', categoryTitle: 'DONUT',
    weight: '۱ عدد — ۲۰۰ گرم', price: 120000, image: 'images/donut.png', badge: 'ویژه', badgeIcon: 'gift',
    flavors: [{value:'مخلوط',label:'🍪 مخلوط'},{value:'شکلاتی',label:'🍫 شکلاتی'}],
    variants: [
      {value:'single', label:'۱ عدد — ۲۰۰ گرم — ۱۲۰٬۰۰۰ تومان', price:120000, cartLabel:'۱ عدد، ۲۰۰ گرم'},
      {value:'box15', label:'۱.۵ کیلوگرم — ۸۰۰٬۰۰۰ تومان', price:800000, cartLabel:'۱.۵ کیلوگرم'}
    ]
  },
  {
    id: 'brownie', name: 'براونی', category: 'slices', categoryTitle: 'BROWNIE',
    weight: 'اسلایس ۱۰۰ گرم', price: 190000, image: 'images/bruny.png', badge: 'پیشنهادی',
    variants: [
      {value:'single', label:'اسلایس ۱۰۰ گرم — ۱۹۰٬۰۰۰ تومان', price:190000, cartLabel:'یک اسلایس، ۱۰۰ گرم'},
      {value:'box8', label:'باکس کامل — ۸ اسلایس، ۸۰۰ گرم — ۱٬۰۰۰٬۰۰۰ تومان', price:1000000, cartLabel:'باکس کامل، ۸ اسلایس'}
    ]
  },
  {
    id: 'heart-cookie', name: 'کوکی کره‌ای', category: 'cookies', categoryTitle: 'BUTTER COOKIE',
    weight: '۵۰۰ گرم', price: 600000, image: 'images/CH.png'
  },
  {
    id: 'coconut-sweets', name: 'شیرینی نارگیلی', category: 'sweets', categoryTitle: 'COCONUT SWEETS',
    weight: '۱ کیلوگرم', price: 800000, image: 'images/Coconutsweets.png'
  },
  {
    id: 'tart', name: 'تارت', category: 'tarts', categoryTitle: 'TART',
    weight: '۵۰۰ گرم', price: 500000, image: 'images/tartlet.png',
    flavors: [{value:'شکلاتی',label:'🍫 شکلاتی'},{value:'نسکافه ای',label:'☕ نسکافه ای'},{value:'توت فرنگی',label:'🍓 توت فرنگی'},{value:'هلو',label:'🍑 هلو'},{value:'آلبالو',label:'🍒 آلبالو'},{value:'خامه ای',label:'🍰 خامه ای میوه فصل'}]
  },
  {
    id: 'cookie-box', name: 'کوکی باکس', category: 'cookies', categoryTitle: 'COOKIE BOX',
    weight: '۴۰۰ گرم', price: 500000, image: 'images/boxcookie.png'
  },
  {
    id: 'cake-roll', name: 'رولت', category: 'cakes', categoryTitle: 'CAKE ROLL',
    weight: '۵۰۰ گرم', price: 600000, image: 'images/cakeroll.png',
    flavors: [{value:'شکلاتی',label:'🍫 شکلاتی'},{value:'نسکافه ای',label:'☕ نسکافه ای'},{value:'توت فرنگی',label:'🍓 توت فرنگی'},{value:'میوه فصل',label:'🍰 خامه ای میوه فصل'}]
  },
  {
    id: 'honey-cake', name: 'کیک عسلی', category: 'cakes', categoryTitle: 'HONEY CAKE',
    weight: '۱ کیلوگرم', price: 850000, image: 'images/honycake.png'
  },
  {
    id: 'bento-cake', name: 'مینی‌کیک هل و زعفران', category: 'cakes', categoryTitle: 'MINI CAKE',
    weight: '۵۰۰ گرم', price: 650000, image: 'images/beneto.png'
  },
  {
    id: 'chickpea-sweets', name: 'شیرینی نخودچی', category: 'sweets', categoryTitle: 'CHICKPEA SWEETS',
    weight: '۵۰۰ گرم', price: 600000, image: 'images/nokhodcisweets.png'
  },
  {
    id: 'double-chocolate-cookie', name: 'کوکی دابل‌چاکلت، چانکی و پسته‌ای', category: 'cookies', categoryTitle: 'DOUBLE CHOCOLATE COOKIE',
    weight: '۵۰۰ گرم', price: 600000, image: 'images/ck.png'
  },

  /* =========================
     BIRTHDAY CAKES
     ========================= */
  {
    id: 'shah-tot', name: 'کیک تولد شاه توت', category: 'birthday', categoryTitle: 'BIRTHDAY CAKE',
    weight: '۲ کیلوگرم', price: 2000000, image: 'images/shahtot.jpeg', badge: 'ویژه جشن', badgeIcon: 'stars', popular: true
  },
  {
    id: 'lemon-mint-cake', name: 'کیک تولد لیمو نعناع', category: 'birthday', categoryTitle: 'BIRTHDAY CAKE',
    weight: '۲.۵ کیلوگرم', price: 2500000, image: 'images/limo.jpeg'
  },
  {
    id: 'simple-birthday-cake', name: 'کیک تولد ساده', category: 'birthday', categoryTitle: 'BIRTHDAY CAKE',
    weight: '۱ کیلوگرم', price: 1000000, image: 'images/cake.png',
    badge: 'اقتصادی', badgeIcon: 'tag'
  },
  {
    id: 'birthday-800', name: 'کیک تولد ۸۰۰ گرمی', category: 'birthday', categoryTitle: 'BIRTHDAY CAKE',
    weight: '۸۰۰ گرم', price: 750000, image: 'images/greencake.png'
  },
  {
    id: 'birthday-1500', name: 'کیک تولد با گل های طبیعی', category: 'birthday', categoryTitle: 'BIRTHDAY CAKE',
    weight: '۱.۵ کیلوگرم', price: 1700000, image: 'images/fcake.png'
  },
  {
    id: 'birthday-2500', name: 'کیک تولد ۲.۵ کیلویی', category: 'birthday', categoryTitle: 'BIRTHDAY CAKE',
    weight: '۲.۵ کیلوگرم', price: 2300000, image: 'images/bluecake.png'
  },

  /* =========================
     CAKE SLICES
     ========================= */
  {
    id: 'mocha-slice', name: 'کیک موکا اسلایسی', category: 'slices', categoryTitle: 'MOCHA CAKE SLICE',
    weight: 'اسلایس ۲۰۰ گرم', price: 200000, image: 'images/mocha.jpg',
    variants: [
      {value:'single', label:'یک اسلایس — ۲۰۰ گرم — ۲۰۰٬۰۰۰ تومان', price:200000, cartLabel:'یک اسلایس، ۲۰۰ گرم'},
      {value:'box8', label:'باکس کامل — ۸ اسلایس، ۱.۵ کیلو — ۱٬۴۰۰٬۰۰۰ تومان', price:1400000, cartLabel:'باکس کامل، ۸ اسلایس'}
    ]
  },
  {
    id: 'san-sebastian', name: 'سن‌سباستین', category: 'slices', categoryTitle: 'SAN SEBASTIAN',
    weight: 'اسلایس ۱۰۰ گرم', price: 180000, image: 'images/mocha.jpg',
    variants: [
      {value:'single', label:'اسلایس ۱۰۰ گرم — ۱۸۰٬۰۰۰ تومان', price:180000, cartLabel:'یک اسلایس، ۱۰۰ گرم'},
      {value:'box8', label:'باکس کامل — ۸ اسلایس، ۶۰۰ گرم — ۱٬۳۰۰٬۰۰۰ تومان', price:1300000, cartLabel:'باکس کامل، ۸ اسلایس'}
    ]
  }
];
