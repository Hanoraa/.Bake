/* =====================================================
   HANORA — CENTRAL PRODUCT DATA
   فقط اطلاعات محصولات را اینجا تغییر بده.
   ===================================================== */

window.HANORA_PRODUCTS = [
  {
    id: 'fruit-pie', name: 'پای سیب', category: 'sweets', categoryTitle: 'APPLE PIE',
    weight: '۱ کیلوگرم', price: 800000, image: 'images/pieholo.png', badge: 'پرفروش', badgeIcon: 'fire',
    flavors: [{value:'هلو',label:'🍑 هلو'},{value:'آلبالو',label:'🍒 آلبالو'},{value:'سیب',label:'🍎 سیب'},{value:'توت‌فرنگی',label:'🍓 توت‌فرنگی'}]
  },
  {
    id: 'diet-cookie', name: 'کوکی رژیمی', category: 'cookies', categoryTitle: 'DIET COOKIE',
    weight: 'نیم کیلوگرم', price: 600000, image: 'images/ck.png',
    flavors: [{value:'شکلاتی',label:'🍫 شکلاتی'},{value:'وانیلی',label:'🍦 وانیلی'},{value:'نسکافه ای',label:'☕ نسکافه ای'},{value:'گردویی',label:'🌰 گردویی'}]
  },
  {
    id: 'tart-let', name: 'تارت لت', category: 'tarts', categoryTitle: 'TART LET',
    weight: 'بسته ۳۰۰ گرمی', price: 300000, image: 'images/tartt.png',
    flavors: [{value:'شکلاتی',label:'🍫 شکلاتی'},{value:'میوه‌ای',label:'🍓 میوه‌ای'},{value:'کاراملی',label:'🍯 کاراملی'},{value:'نسکافه ای',label:'☕ نسکافه ای'}]
  },
  {
    id: 'donut-box', name: 'باکس دونات حانورا', category: 'donuts', categoryTitle: 'DONUT BOX',
    weight: 'باکس ۷ عددی', price: 450000, image: 'images/donut.png', badge: 'ویژه', badgeIcon: 'gift',
    flavors: [{value:'مخلوط',label:'🍪 مخلوط'},{value:'شکلاتی',label:'🍫 شکلاتی'}]
  },
  {
    id: 'brownie', name: 'براونی', category: 'sweets', categoryTitle: 'BROWNIE',
    weight: '۶۵۰ گرم', price: 500000, image: 'images/bruny.png', badge: 'پیشنهادی'
  },
  {
    id: 'heart-cookie', name: 'کوکی قلبی', category: 'cookies', categoryTitle: 'COOKIE HEART',
    weight: 'یک کیلوگرم', price: 600000, image: 'images/CH.png'
  },
  {
    id: 'coconut-sweets', name: 'شیرینی نارگیلی', category: 'sweets', categoryTitle: 'COCONUT SWEETS',
    weight: 'یک کیلوگرم', price: 600000, image: 'images/Coconutsweets.png'
  },
  {
    id: 'tart', name: 'تارت', category: 'tarts', categoryTitle: 'TART',
    weight: 'بسته ۳۰۰ گرمی', price: 350000, image: 'images/tartlet.png',
    flavors: [{value:'شکلاتی',label:'🍫 شکلاتی'},{value:'نسکافه ای',label:'☕ نسکافه ای'},{value:'توت فرنگی',label:'🍓 توت فرنگی'},{value:'هلو',label:'🍑 هلو'},{value:'آلبالو',label:'🍒 آلبالو'},{value:'خامه ای',label:'🍰 خامه ای میوه فصل'}]
  },
  {
    id: 'cookie-box', name: 'کوکی باکس', category: 'cookies', categoryTitle: 'COOKIE BOX',
    weight: 'باکس ۳۰۰ گرمی', price: 350000, image: 'images/boxcookie.png'
  },
  {
    id: 'cake-roll', name: 'رولت کیک', category: 'cakes', categoryTitle: 'CAKE ROLL',
    weight: '۵۰۰ گرم', price: 400000, image: 'images/cakeroll.png',
    flavors: [{value:'شکلاتی',label:'🍫 شکلاتی'},{value:'نسکافه ای',label:'☕ نسکافه ای'},{value:'توت فرنگی',label:'🍓 توت فرنگی'},{value:'میوه فصل',label:'🍰 خامه ای میوه فصل'}]
  },
  {
    id: 'honey-cake', name: 'کیک عسلی', category: 'cakes', categoryTitle: 'HONEY CAKE',
    weight: 'یک کیلوگرم', price: 600000, image: 'images/honycake.png'
  },
  {
    id: 'bento-cake', name: 'مینی کیک بنتو', category: 'cakes', categoryTitle: 'BENTO MINI CAKE',
    weight: '۳۰۰ گرم', price: 350000, image: 'images/beneto.png'
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
    weight: '۱ کیلوگرم', price: 850000, image: 'images/cake.png',
    badge: 'اقتصادی', badgeIcon: 'tag'
  },
  {
    id: 'birthday-800', name: 'کیک تولد ۸۰۰ گرمی', category: 'birthday', categoryTitle: 'BIRTHDAY CAKE',
    weight: '۸۰۰ گرم', price: 750000, image: 'images/cake.png'
  },
  {
    id: 'birthday-1500', name: 'کیک تولد ۱.۵ کیلویی', category: 'birthday', categoryTitle: 'BIRTHDAY CAKE',
    weight: '۱.۵ کیلوگرم', price: 1700000, image: 'images/cake.png'
  },

  /* =========================
     CAKE SLICES
     ========================= */
  {
    id: 'mocha-slice', name: 'کیک موکا اسلایسی', category: 'slices', categoryTitle: 'MOCHA CAKE SLICE',
    weight: '۱۵۰ گرم / ۸ اسلایس کامل', price: 200000, image: 'images/cakeroll.png',
    variants: [
      {value:'single', label:'یک اسلایس — ۱۵۰ گرم — ۲۰۰٬۰۰۰ تومان', price:200000, cartLabel:'یک اسلایس، ۱۵۰ گرم'},
      {value:'box8', label:'باکس کامل — ۸ اسلایس — ۱٬۰۰۰٬۰۰۰ تومان', price:1000000, cartLabel:'باکس کامل، ۸ اسلایس'}
    ]
  }
];
