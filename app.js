/* ============================================
   FEASTRUSH — app.js
   Shared JavaScript: auth, cart, toast, nav
============================================ */

'use strict';

/* ============================================
   DATA
============================================ */
const MENU_DATA = [
  {id:1,  name:'Margherita Pizza',    type:'veg',   cuisine:'italian', price:299, orig:399, rating:4.5, desc:'Classic tomato base with fresh mozzarella and fragrant basil leaves.',             img:'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&q=80&auto=format&fit=crop'},
  {id:2,  name:'Pepperoni Pizza',     type:'nonveg',cuisine:'italian', price:399, orig:499, rating:4.7, desc:'Loaded with spicy pepperoni slices and gooey extra cheese.',                      img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80&auto=format&fit=crop'},
  {id:3,  name:'Veggie Burger',       type:'veg',   cuisine:'indian',  price:179, orig:219, rating:4.2, desc:'Crispy house-made veggie patty with fresh lettuce, tomato & smoky mayo.',         img:'https://images.unsplash.com/photo-1512152272829-e3139592d56f?w=500&q=80&auto=format&fit=crop'},
  {id:4,  name:'Classic Smash Burger',type:'nonveg',cuisine:'indian',  price:249, orig:299, rating:4.8, desc:'Double smash patty with American cheese, pickles, and signature sauce.',          img:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80&auto=format&fit=crop'},
  {id:5,  name:'Chicken Biryani',     type:'nonveg',cuisine:'indian',  price:329, orig:399, rating:4.9, desc:'Slow-cooked aromatic basmati with tender spiced chicken. A classic done right.',  img:'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&q=80&auto=format&fit=crop'},
  {id:6,  name:'Veg Dum Biryani',     type:'veg',   cuisine:'indian',  price:259, orig:310, rating:4.4, desc:'Fragrant saffron rice with seasonal vegetables and whole spices.',                img:'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=500&q=80&auto=format&fit=crop'},
  {id:7,  name:'Salmon Sushi Roll',   type:'nonveg',cuisine:'japanese',price:449, orig:549, rating:4.6, desc:'Fresh Atlantic salmon, avocado, cucumber in seasoned Japanese rice.',             img:'https://plus.unsplash.com/premium_photo-1668998196127-eaf8cfb362bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2FsbW9uJTIwc3VzaGklMjByb2xsfGVufDB8fDB8fHww'},
  {id:8,  name:'Avocado Maki',        type:'veg',   cuisine:'japanese',price:349, orig:399, rating:4.3, desc:'Creamy California avocado wrapped in perfectly seasoned sushi rice.',             img:'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500&q=80&auto=format&fit=crop'},
  {id:9,  name:'Kung Pao Noodles',    type:'veg',   cuisine:'chinese', price:219, orig:259, rating:4.1, desc:'Wok-tossed noodles with peanuts, dried chillies and Sichuan-spiced sauce.',      img:'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=500&q=80&auto=format&fit=crop'},
  {id:10, name:'Chicken Manchurian',  type:'nonveg',cuisine:'chinese', price:279, orig:329, rating:4.5, desc:'Golden fried chicken balls tossed in a tangy Indo-Chinese manchurian sauce.',    img:'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=500&q=80&auto=format&fit=crop'},
  {id:11, name:'Caesar Salad',        type:'veg',   cuisine:'italian', price:199, orig:229, rating:4.0, desc:'Crisp romaine, parmesan shavings, croutons with house caesar dressing.',          img:'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&q=80&auto=format&fit=crop'},
  {id:12, name:'Chocolate Lava Cake', type:'veg',   cuisine:'italian', price:149, orig:180, rating:4.8, desc:'Warm dark chocolate cake with a molten center. Served with vanilla ice cream.',   img:'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500&q=80&auto=format&fit=crop'},
  {id:13, name:'Mango Lassi',         type:'veg',   cuisine:'indian',  price:99,  orig:120, rating:4.6, desc:'Chilled blended Alphonso mango with creamy yogurt and a hint of cardamom.',       img:'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=500&q=80&auto=format&fit=crop'},
  {id:14, name:'BBQ Chicken Wings',   type:'nonveg',cuisine:'indian',  price:299, orig:360, rating:4.4, desc:'Smoky barbecue wings glazed to perfection with a tangy ranch dipping sauce.',     img:'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=500&q=80&auto=format&fit=crop'},
  {id:15, name:'Paneer Tikka',        type:'veg',   cuisine:'indian',  price:249, orig:299, rating:4.5, desc:'Marinated cottage cheese charred in a tandoor with bell peppers and onions.',     img:'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500&q=80&auto=format&fit=crop'},
  {id:16, name:'Pad Thai Noodles',    type:'nonveg',cuisine:'chinese', price:289, orig:340, rating:4.4, desc:'Classic Thai stir-fried noodles with shrimp, tofu, peanuts and tamarind sauce.',  img:'https://images.unsplash.com/photo-1559847844-5315695dadae?w=500&q=80&auto=format&fit=crop'},
];

const CATEGORIES_DATA = [
  {id:'all',    name:'All',      img:'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=120&q=80&auto=format&fit=crop'},
  {id:'pizza',  name:'Pizza',    img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=120&q=80&auto=format&fit=crop'},
  {id:'burger', name:'Burgers',  img:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=120&q=80&auto=format&fit=crop'},
  {id:'sushi',  name:'Sushi',    img:'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=120&q=80&auto=format&fit=crop'},
  {id:'biryani',name:'Biryani',  img:'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=120&q=80&auto=format&fit=crop'},
  {id:'salad',  name:'Salads',   img:'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=120&q=80&auto=format&fit=crop'},
  {id:'dessert',name:'Desserts', img:'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=120&q=80&auto=format&fit=crop'},
  {id:'drinks', name:'Drinks',   img:'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=120&q=80&auto=format&fit=crop'},
];

const RESTAURANTS_DATA = [
  {name:'The Pizza Lab',   cuisine:'Italian · Pizza',   rating:4.8, time:'25–30 min', tag:'Best Seller', offer:'20% OFF',       img:'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',  tags:['Pizza','Pasta','Garlic Bread']},
  {name:'Biryani House',   cuisine:'Indian · Biryani',  rating:4.9, time:'30–40 min', tag:'Top Rated',   offer:'₹100 OFF',      img:'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=80&auto=format&fit=crop', tags:['Biryani','Kebab','Raita']},
  {name:'Sushi World',     cuisine:'Japanese · Sushi',  rating:4.6, time:'40–50 min', tag:'Premium',     offer:'Free Miso Soup', img:'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', tags:['Sushi','Ramen','Tempura']},
  {name:'Burger Shack',    cuisine:'American · Burgers',rating:4.5, time:'20–25 min', tag:'Fast',        offer:'Buy 1 Get 1',   img:'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=600&q=80&auto=format&fit=crop',  tags:['Burgers','Fries','Shakes']},
  {name:'Dragon Palace',   cuisine:'Chinese · Noodles', rating:4.3, time:'35–45 min', tag:'Popular',     offer:'Free Spring Roll',img:'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=600&q=80&auto=format&fit=crop',tags:['Noodles','Dim Sum','Fried Rice']},
  {name:'Green Bowl',      cuisine:'Healthy · Salads',  rating:4.4, time:'15–20 min', tag:'Veg Only',    offer:'10% OFF',       img:'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&q=80&auto=format&fit=crop', tags:['Salads','Wraps','Smoothies']},
];

/* ============================================
   AUTH UTILITIES
============================================ */
const Auth = {
  getUser() {
    try { return JSON.parse(sessionStorage.getItem('fr_user')); } catch { return null; }
  },
  setUser(user) {
    sessionStorage.setItem('fr_user', JSON.stringify(user));
  },
  clearUser() {
    sessionStorage.removeItem('fr_user');
  },
  isLoggedIn() {
    return !!this.getUser();
  },
  requireAuth(redirectTo = 'login.html') {
    if (!this.isLoggedIn()) {
      window.location.href = redirectTo;
      return false;
    }
    return true;
  }
};

/* ============================================
   VALIDATION
============================================ */
const Validate = {
  email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
  phone: v => /^[+\d\s\-]{8,15}$/.test(v.replace(/\s/g,'')),
  minLen: (v, n) => v.trim().length >= n,
  notEmpty: v => v.trim().length > 0,
};

function setErr(id, msg) {
  const el = document.getElementById(id);
  if (el) el.textContent = msg;
}
function clrErr(...ids) {
  ids.forEach(id => setErr(id, ''));
}
function setInputError(input, errId, msg) {
  if (input) {
    input.classList.add('error');
    input.classList.remove('valid');
  }
  const err = document.getElementById(errId);
  if (err) {
    err.classList.remove('ok');
    err.textContent = msg;
  }
}
function clrInputError(input, errId) {
  if (input) input.classList.remove('error');
  const err = document.getElementById(errId);
  if (err) {
    err.classList.remove('ok');
    err.textContent = '';
  }
}
function setInputValid(input, errId, msg = 'Looks good') {
  if (input) {
    input.classList.remove('error');
    input.classList.add('valid');
  }
  const err = document.getElementById(errId);
  if (err) {
    err.classList.add('ok');
    err.textContent = msg;
  }
}

/* ============================================
   TOAST
============================================ */
let toastTimer;
function showToast(msg, type = '') {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.className = `toast ${type} show`;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 3200);
}

/* ============================================
   HAMBURGER MENU
============================================ */
function initHamburger() {
  const btn = document.getElementById('hamburger');
  const menu = document.getElementById('mobileMenu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    menu.classList.toggle('open');
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (!btn.contains(e.target) && !menu.contains(e.target)) {
      btn.classList.remove('open');
      menu.classList.remove('open');
    }
  });
}

/* ============================================
   CART STATE & LOGIC
============================================ */
const Cart = {
  items: [],

  add(itemId) {
    const item = MENU_DATA.find(m => m.id === itemId);
    if (!item) return;
    const ex = this.items.find(c => c.id === itemId);
    if (ex) {
      ex.qty++;
    } else {
      this.items.push({ id: item.id, name: item.name, img: item.img, price: item.price, qty: 1 });
    }
    this.sync();
    showToast(`Added ${item.name}! 🛒`, 'ok');
  },

  updateQty(itemId, delta) {
    const item = this.items.find(c => c.id === itemId);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) this.items = this.items.filter(c => c.id !== itemId);
    this.sync();
  },

  total() {
    return this.items.reduce((s, i) => s + i.price * i.qty, 0);
  },

  count() {
    return this.items.reduce((s, i) => s + i.qty, 0);
  },

  clear() {
    this.items = [];
    this.sync();
  },

  sync() {
    // Update badge
    const badge = document.getElementById('cartCount');
    if (badge) badge.textContent = this.count();
    this.renderItems();
  },

  renderItems() {
    const container = document.getElementById('cartItems');
    const empty = document.getElementById('cartEmpty');
    const foot = document.getElementById('cartFoot');
    if (!container) return;

    if (!this.items.length) {
      container.innerHTML = '';
      if (empty) empty.style.display = 'flex';
      if (foot) foot.style.display = 'none';
      return;
    }

    if (empty) empty.style.display = 'none';
    if (foot) foot.style.display = 'block';

    container.innerHTML = this.items.map(item => `
      <div class="cart-item">
        <div class="ci-img"><img src="${item.img}" alt="${item.name}" loading="lazy"/></div>
        <div class="ci-info">
          <h4>${item.name}</h4>
          <p>₹${item.price * item.qty}</p>
        </div>
        <div class="ci-ctrl">
          <button class="qty-btn" onclick="Cart.updateQty(${item.id},-1)">−</button>
          <span class="qty-n">${item.qty}</span>
          <button class="qty-btn" onclick="Cart.updateQty(${item.id},1)">+</button>
        </div>
      </div>`).join('');

    const total = document.getElementById('cartTotal');
    if (total) total.textContent = `₹${this.total()}`;
  }
};

/* ============================================
   CART SIDEBAR TOGGLE
============================================ */
function initCartSidebar() {
  const toggleBtn = document.getElementById('cartToggle');
  const closeBtn  = document.getElementById('closeCart');
  const overlay   = document.getElementById('cartOverlay');
  const sidebar   = document.getElementById('cartSidebar');

  if (!sidebar) return;

  function openCart()  { sidebar.classList.add('open'); if (overlay) overlay.classList.add('open'); }
  function closeCart() { sidebar.classList.remove('open'); if (overlay) overlay.classList.remove('open'); }

  if (toggleBtn) toggleBtn.addEventListener('click', openCart);
  if (closeBtn)  closeBtn.addEventListener('click', closeCart);
  if (overlay)   overlay.addEventListener('click', closeCart);

  Cart.sync();
}

/* ============================================
   PLACE ORDER
============================================ */
function placeOrder() {
  if (!Cart.items.length) return;

  const sidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('cartOverlay');
  const modal   = document.getElementById('orderModal');
  const oidEl   = document.getElementById('orderId');

  if (sidebar) sidebar.classList.remove('open');
  if (overlay) overlay.classList.remove('open');

  const oid = 'FR' + Date.now().toString().slice(-8).toUpperCase();
  if (oidEl) oidEl.textContent = `Order ID: #${oid}`;
  if (modal) modal.style.display = 'flex';

  Cart.clear();
}

function closeModal() {
  const modal = document.getElementById('orderModal');
  if (modal) modal.style.display = 'none';
  showToast('Track your order in real-time! 📦', 'ok');
}

/* ============================================
   RENDER MENU CARDS
============================================ */
function renderMenuCard(item, idx) {
  const discount = item.orig > item.price
    ? `<span class="mc-disc">${Math.round((1 - item.price / item.orig) * 100)}% OFF</span>`
    : '';

  return `
    <div class="mc fade-in" style="animation-delay:${idx * 0.05}s">
      <div class="mc-img">
        <img src="${item.img}" alt="${item.name}" loading="lazy"/>
        <span class="veg-dot ${item.type === 'veg' ? 'veg' : 'nv'}"></span>
        ${discount}
      </div>
      <div class="mc-body">
        <h3>${item.name}</h3>
        <p class="desc">${item.desc}</p>
        <div class="mc-foot">
          <div class="price-col">
            <div class="price">₹${item.price}</div>
            ${item.orig > item.price ? `<div class="orig">₹${item.orig}</div>` : ''}
            <div class="stars">⭐ ${item.rating}</div>
          </div>
          <button class="add-btn" onclick="Cart.add(${item.id})">+ Add</button>
        </div>
      </div>
    </div>`;
}

/* ============================================
   NAVBAR USER INIT
============================================ */
function initNavUser() {
  const user = Auth.getUser();
  const avatar = document.getElementById('navAvatar');
  if (avatar && user) {
    avatar.textContent = (user.name || 'U')[0].toUpperCase();
  }
}

function initSmartGreeting() {
  const el = document.getElementById('smartGreeting');
  if (!el) return;

  const user = Auth.getUser();
  const name = (user?.name || 'there').split(' ')[0];
  const hour = new Date().getHours();
  let wish = 'Good Evening';
  if (hour < 12) wish = 'Good Morning';
  else if (hour < 17) wish = 'Good Afternoon';

  el.textContent = `${wish}, ${name}`;
}

/* ============================================
   LOGOUT
============================================ */
function logout() {
  Auth.clearUser();
  Cart.clear();
  showToast('Logged out successfully 👋');
  setTimeout(() => window.location.href = 'login.html', 800);
}

/* ============================================
   GOOGLE LOGIN (MOCK)
============================================ */
function googleLogin() {
  Auth.setUser({ name: 'Google User', email: 'user@gmail.com' });
  showToast('Signed in with Google! 🎉', 'ok');
  setTimeout(() => window.location.href = 'index.html', 800);
}

/* ============================================
   MOTION + DOM INTERACTIONS
============================================ */
const Motion = (() => {
  let revealObserver;
  let counterObserver;
  let typeObserver;
  let mutationObserver;

  const revealSelectors = [
    '.hero-left > *',
    '.section-head',
    '.promo-banner',
    '.rest-card',
    '.mc',
    '.contact-hero > *',
    '.contact-info-card',
    '.contact-left > *',
    '.contact-form-card',
    '.faq-item',
    '.field',
    '.perk-item',
    '.vstat',
    '[data-reveal]'
  ];

  function initObservers() {
    if ('IntersectionObserver' in window) {
      revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.16 });

      counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            startCounter(entry.target);
            counterObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });

      typeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            runTypewriter(entry.target);
            typeObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.7 });
    }
  }

  function applyReveal(root = document) {
    const nodes = root.querySelectorAll(revealSelectors.join(','));
    let delayStep = 0;

    nodes.forEach(node => {
      if (node.dataset.revealReady === '1') return;

      node.dataset.revealReady = '1';
      node.classList.add('reveal');

      if (!node.style.transitionDelay) {
        node.style.transitionDelay = `${Math.min(delayStep * 40, 260)}ms`;
        delayStep += 1;
      }

      if (revealObserver) revealObserver.observe(node);
      else node.classList.add('in-view');
    });
  }

  function parseCounterText(text) {
    const cleaned = (text || '').trim();
    const m = cleaned.match(/^(\d+(?:\.\d+)?)([MK])?(\+)?(?:\s*(.*))?$/i);
    if (!m) return null;
    return {
      end: parseFloat(m[1]),
      unit: m[2] ? m[2].toUpperCase() : '',
      plus: m[3] || '',
      trail: m[4] ? ` ${m[4]}` : ''
    };
  }

  function prepareCounters(root = document) {
    const targets = root.querySelectorAll('[data-count], .hero-stats .stat strong, .visual-stats .vstat strong');
    targets.forEach(el => {
      if (el.dataset.countReady === '1') return;

      if (!el.dataset.count) {
        const parsed = parseCounterText(el.textContent);
        if (!parsed) {
          el.dataset.countReady = 'skip';
          return;
        }
        el.dataset.count = String(parsed.end);
        el.dataset.unit = parsed.unit;
        el.dataset.plus = parsed.plus;
        el.dataset.trail = parsed.trail;
      }

      el.dataset.countReady = '1';
      if (counterObserver) counterObserver.observe(el);
      else startCounter(el);
    });
  }

  function startCounter(el) {
    if (!el || el.dataset.countDone === '1') return;

    const end = parseFloat(el.dataset.count || '0');
    if (!Number.isFinite(end)) return;

    const duration = 1200;
    const start = performance.now();
    const unit = el.dataset.unit || '';
    const plus = el.dataset.plus || '';
    const trail = el.dataset.trail || '';
    const decimals = end % 1 !== 0 ? 1 : 0;

    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = end * eased;
      const shown = Number(value.toFixed(decimals));
      el.textContent = `${shown}${unit}${plus}${trail}`;
      if (progress < 1) requestAnimationFrame(step);
      else el.dataset.countDone = '1';
    }

    requestAnimationFrame(step);
  }

  function prepareTypewriters(root = document) {
    const nodes = root.querySelectorAll('[data-typewriter], .hero-badge, .contact-hero-badge');
    nodes.forEach(el => {
      if (el.dataset.typeReady === '1') return;

      const text = (el.dataset.typewriter || el.textContent || '').trim();
      if (!text) return;

      el.dataset.typewriter = text;
      el.dataset.typeReady = '1';
      el.textContent = '';

      if (typeObserver) typeObserver.observe(el);
      else runTypewriter(el);
    });
  }

  function runTypewriter(el) {
    if (!el || el.dataset.typeDone === '1') return;

    const text = el.dataset.typewriter || '';
    let idx = 0;
    const speed = 22;

    const timer = setInterval(() => {
      idx += 1;
      el.textContent = text.slice(0, idx);
      if (idx >= text.length) {
        clearInterval(timer);
        el.dataset.typeDone = '1';
      }
    }, speed);
  }

  function initRipples() {
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.btn-primary, .btn-secondary, .add-btn, .cart-btn, .fbtn, .topic-pill, .pb-btn');
      if (!btn) return;

      btn.classList.add('has-ripple');
      const rect = btn.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      ripple.style.left = `${e.clientX - rect.left}px`;
      ripple.style.top = `${e.clientY - rect.top}px`;
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 700);
    });
  }

  function initParallax() {
    const heroRight = document.querySelector('.hero-right');
    if (!heroRight) return;

    const imgs = heroRight.querySelectorAll('.hi img');
    if (!imgs.length) return;

    heroRight.addEventListener('mousemove', (e) => {
      const rect = heroRight.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      imgs.forEach((img, idx) => {
        const depth = (idx + 1) * 3;
        img.style.transform = `translate(${x * depth}px, ${y * depth}px) scale(1.05)`;
      });
    });

    heroRight.addEventListener('mouseleave', () => {
      imgs.forEach(img => { img.style.transform = ''; });
    });
  }

  function initMutationScan() {
    if (!('MutationObserver' in window) || !document.body) return;

    mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach(m => {
        m.addedNodes.forEach(node => {
          if (!(node instanceof Element)) return;
          refresh(node);
        });
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });
  }

  function refresh(root = document) {
    applyReveal(root);
    prepareCounters(root);
    prepareTypewriters(root);
  }

  function init() {
    if (document.body?.dataset.motionInit === '1') return;
    if (document.body) document.body.dataset.motionInit = '1';

    initObservers();
    initRipples();
    initParallax();
    refresh(document);
    initMutationScan();
  }

  return { init, refresh };
})();

window.FeastMotion = Motion;

/* ============================================
   INIT ON DOM READY
============================================ */
document.addEventListener('DOMContentLoaded', () => {
  initHamburger();
  initNavUser();
  initSmartGreeting();
  initCartSidebar();
  Motion.init();
});

