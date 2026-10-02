/**
 * NIGRUM STARE — LUXURY STREETWEAR
 * Quiet. Dark. Clean. Expensive. Minimal.
 */

(function () {
  'use strict';

  // ============================================================
  // HERO ANIMATION
  // ============================================================

  const TOTAL_FRAMES = 83;
  const FRAME_PREFIX = 'frames/ezgif-frame-';
  const FRAME_EXT = '.jpg';

  // One complete animation cycle = 15 seconds
  const AUTO_PLAY_DURATION = 15000;

  const STAGES = [
    { name: '01 / THREAD', range: [0, 13] },
    { name: '02 / FABRIC', range: [14, 29] },
    { name: '03 / CUT', range: [30, 41] },
    { name: '04 / SEW', range: [42, 55] },
    { name: '05 / FINISH', range: [56, 65] },
    { name: '06 / FORM', range: [66, 74] },
    { name: '07 / NIGRUM STARE', range: [75, 82] }
  ];

  // ============================================================
  // PRODUCTS
  // MEN'S COLLECTION ONLY
  // ALL PRODUCTS: S / M / L / XL
  // ============================================================

  const STANDARD_SIZES = ['S', 'M', 'L', 'XL'];

  const PRODUCTS = [

    // ----------------------------------------------------------
    // T-SHIRTS
    // ----------------------------------------------------------

    {
      id: 'ns-01',
      name: 'Signature T-Shirt',
      category: 'T-SHIRTS',
      price: '$140',
      priceNum: 140,
      image: 'assets/products/t 2.jpg',
      desc: 'Heavyweight cotton jersey with a clean Nigrum Stare silhouette and structured streetwear finish.',
      sizes: STANDARD_SIZES
    },

    {
      id: 'ns-02',
      name: 'Oversized Essential T-Shirt',
      category: 'T-SHIRTS',
      price: '$150',
      priceNum: 150,
      image: 'assets/products/t 2.jpg',
      desc: 'Relaxed oversized silhouette cut from premium heavyweight cotton for an effortless streetwear fit.',
      sizes: STANDARD_SIZES
    },

    {
      id: 'ns-03',
      name: 'Essential Long Sleeve',
      category: 'T-SHIRTS',
      price: '$165',
      priceNum: 165,
      image: 'assets/products/t 2.jpg',
      desc: 'Clean long-sleeve construction with a refined fit and minimal Nigrum Stare identity.',
      sizes: STANDARD_SIZES
    },

    // ----------------------------------------------------------
    // HOODIES
    // ----------------------------------------------------------

    {
      id: 'ns-04',
      name: 'Classic Hoodie',
      category: 'HOODIES',
      price: '$220',
      priceNum: 220,
      image: 'assets/products/hoodie.jpg',
      desc: 'Heavyweight French terry hoodie with a structured hood and relaxed luxury streetwear silhouette.',
      sizes: STANDARD_SIZES
    },

    {
      id: 'ns-05',
      name: 'Pro Heavyweight Hoodie',
      category: 'HOODIES',
      price: '$235',
      priceNum: 235,
      image: 'assets/products/HOODIE3.jpg',
      desc: 'Dense heavyweight construction designed for a strong architectural silhouette.',
      sizes: STANDARD_SIZES
    },

    {
      id: 'ns-06',
      name: 'Zip Hoodie',
      category: 'HOODIES',
      price: '$225',
      priceNum: 225,
      image: 'assets/products/hoodie.jpg',
      desc: 'Minimal full-zip hoodie with a clean premium finish and relaxed masculine profile.',
      sizes: STANDARD_SIZES
    },

    // ----------------------------------------------------------
    // SHIRTS
    // ----------------------------------------------------------

    {
      id: 'ns-07',
      name: 'Essential Shirt',
      category: 'SHIRTS',
      price: '$180',
      priceNum: 180,
      image: 'assets/products/t 2.jpg',
      desc: 'Minimal everyday shirt designed with a clean cut and understated Nigrum Stare attitude.',
      sizes: STANDARD_SIZES
    },

    {
      id: 'ns-08',
      name: 'Structured Overshirt',
      category: 'SHIRTS',
      price: '$195',
      priceNum: 195,
      image: 'assets/products/t 2.jpg',
      desc: 'Structured overshirt with a relaxed fit, designed to layer effortlessly over the collection.',
      sizes: STANDARD_SIZES
    },

    {
      id: 'ns-09',
      name: 'Premium Long Sleeve Shirt',
      category: 'SHIRTS',
      price: '$185',
      priceNum: 185,
      image: 'assets/products/t 2.jpg',
      desc: 'Refined long sleeve shirt with a clean contemporary cut.',
      sizes: STANDARD_SIZES
    },

    // ----------------------------------------------------------
    // KAFTANS
    // ----------------------------------------------------------

    {
      id: 'ns-10',
      name: 'Nigrum Kaftan',
      category: 'KAFTANS',
      price: '$210',
      priceNum: 210,
      image: 'assets/products/t 2.jpg',
      desc: 'Relaxed premium kaftan with an elegant flowing silhouette and understated luxury finish.',
      sizes: STANDARD_SIZES
    },

    {
      id: 'ns-11',
      name: 'Structured Kaftan',
      category: 'KAFTANS',
      price: '$225',
      priceNum: 225,
      image: 'assets/products/t 2.jpg',
      desc: 'Modern structured kaftan combining traditional ease with contemporary streetwear proportions.',
      sizes: STANDARD_SIZES
    },

    {
      id: 'ns-12',
      name: 'Signature Kaftan Set',
      category: 'KAFTANS',
      price: '$250',
      priceNum: 250,
      image: 'assets/products/t 2.jpg',
      desc: 'Complete kaftan set designed for a refined statement from day to evening.',
      sizes: STANDARD_SIZES
    },

    // ----------------------------------------------------------
    // ITALIAN PANTS
    // ----------------------------------------------------------

    {
      id: 'ns-13',
      name: 'Italian Pants',
      category: 'ITALIAN PANTS',
      price: '$190',
      priceNum: 190,
      image: 'assets/products/italian-pants.jpg',
      desc: 'Tailored Italian-inspired trousers with a relaxed luxury silhouette and clean drape.',
      sizes: STANDARD_SIZES
    },

    {
      id: 'ns-14',
      name: 'Relaxed Italian Pants',
      category: 'ITALIAN PANTS',
      price: '$195',
      priceNum: 195,
      image: 'assets/products/italian-pants.jpg',
      desc: 'Relaxed wide-leg trousers balancing tailored construction with contemporary streetwear ease.',
      sizes: STANDARD_SIZES
    },

    {
      id: 'ns-15',
      name: 'Pleated Italian Trousers',
      category: 'ITALIAN PANTS',
      price: '$210',
      priceNum: 210,
      image: 'assets/products/italian-pants.jpg',
      desc: 'Elegant pleated trousers with a structured waist and sophisticated fall.',
      sizes: STANDARD_SIZES
    },

    // ----------------------------------------------------------
    // TROUSERS
    // ----------------------------------------------------------

    {
      id: 'ns-16',
      name: 'Tailored Trousers',
      category: 'TROUSERS',
      price: '$185',
      priceNum: 185,
      image: 'assets/products/italian-pants.jpg',
      desc: 'Clean tailored trousers built around a sharp masculine silhouette.',
      sizes: STANDARD_SIZES
    },

    {
      id: 'ns-17',
      name: 'Wide Leg Trousers',
      category: 'TROUSERS',
      price: '$195',
      priceNum: 195,
      image: 'assets/products/italian-pants.jpg',
      desc: 'Wide-leg trousers with a fluid shape and modern editorial profile.',
      sizes: STANDARD_SIZES
    },

    {
      id: 'ns-18',
      name: 'Straight Cut Trousers',
      category: 'TROUSERS',
      price: '$175',
      priceNum: 175,
      image: 'assets/products/italian-pants.jpg',
      desc: 'Straight-cut trousers with minimal detailing and a timeless silhouette.',
      sizes: STANDARD_SIZES
    },

    // ----------------------------------------------------------
    // CARGO
    // ----------------------------------------------------------

    {
      id: 'ns-19',
      name: 'Utility Cargo Pants',
      category: 'CARGO',
      price: '$185',
      priceNum: 185,
      image: 'assets/products/italian-pants.jpg',
      desc: 'Utility-inspired cargo trousers with functional pocket detailing and a refined finish.',
      sizes: STANDARD_SIZES
    },

    {
      id: 'ns-20',
      name: 'Relaxed Cargo Pants',
      category: 'CARGO',
      price: '$190',
      priceNum: 190,
      image: 'assets/products/italian-pants.jpg',
      desc: 'Relaxed cargo silhouette designed for everyday movement and streetwear layering.',
      sizes: STANDARD_SIZES
    },

    // ----------------------------------------------------------
    // SHORTS
    // ----------------------------------------------------------

    {
      id: 'ns-21',
      name: 'Relaxed Shorts',
      category: 'SHORTS',
      price: '$120',
      priceNum: 120,
      image: 'assets/products/t3.jpg',
      desc: 'Relaxed heavyweight shorts with a clean, minimal streetwear silhouette.',
      sizes: STANDARD_SIZES
    },

    {
      id: 'ns-22',
      name: 'Signature Shorts',
      category: 'SHORTS',
      price: '$125',
      priceNum: 125,
      image: 'assets/products/t3.jpg',
      desc: 'Premium everyday shorts designed to pair with the Nigrum Stare essentials.',
      sizes: STANDARD_SIZES
    },

    // ----------------------------------------------------------
    // SETS
    // ----------------------------------------------------------

    {
      id: 'ns-23',
      name: 'Sweatshirt & Shorts Set',
      category: 'SETS',
      price: '$195',
      priceNum: 195,
      image: 'assets/products/t3.jpg',
      desc: 'Matching heavyweight sweatshirt and relaxed shorts set.',
      sizes: STANDARD_SIZES
    },

    {
      id: 'ns-24',
      name: 'T-Shirt & Italian Pants Set',
      category: 'SETS',
      price: '$285',
      priceNum: 285,
      image: 'assets/products/t 2.jpg',
      desc: 'Complete Nigrum Stare look pairing a signature tee with refined Italian trousers.',
      sizes: STANDARD_SIZES
    },

    {
      id: 'ns-25',
      name: 'Shirt & Italian Pants Set',
      category: 'SETS',
      price: '$310',
      priceNum: 310,
      image: 'assets/products/t 2.jpg',
      desc: 'Premium coordinated shirt and trouser set with a clean luxury silhouette.',
      sizes: STANDARD_SIZES
    },

    {
      id: 'ns-26',
      name: 'Kaftan Set',
      category: 'SETS',
      price: '$250',
      priceNum: 250,
      image: 'assets/products/t 2.jpg',
      desc: 'Complete relaxed kaftan set designed for effortless statement dressing.',
      sizes: STANDARD_SIZES
    },

    // ----------------------------------------------------------
    // ACCESSORIES
    // ----------------------------------------------------------

    {
      id: 'ns-27',
      name: 'Structured Tactical Cap',
      category: 'ACCESSORIES',
      price: '$75',
      priceNum: 75,
      image: 'assets/products/cap.jpg',
      desc: 'Structured six-panel cap with a clean tactical profile and understated branding.',
      sizes: STANDARD_SIZES
    },

    {
      id: 'ns-28',
      name: 'Wool Fisherman Beanie',
      category: 'ACCESSORIES',
      price: '$65',
      priceNum: 65,
      image: 'assets/products/ROYBENS 2 Pack Wool Fisherman Beanies for Men, Knit Short Watch Cap Winter Warm Hats.jpg',
      desc: 'Dense knitted fisherman beanie with a clean minimalist silhouette.',
      sizes: STANDARD_SIZES
    },

    {
      id: 'ns-29',
      name: 'Solid Trucker Hat',
      category: 'ACCESSORIES',
      price: '$70',
      priceNum: 70,
      image: 'assets/products/Men Solid Trucker Hat.jpg',
      desc: 'Structured trucker hat with a clean masculine profile.',
      sizes: STANDARD_SIZES
    },

    {
      id: 'ns-30',
      name: 'Tactical Bandana',
      category: 'ACCESSORIES',
      price: '$45',
      priceNum: 45,
      image: 'assets/products/1pc Quick Dry Sports Bandana.jpg',
      desc: 'Technical bandana designed for versatile everyday styling.',
      sizes: STANDARD_SIZES
    },

    {
      id: 'ns-31',
      name: 'Turban Headwrap',
      category: 'ACCESSORIES',
      price: '$50',
      priceNum: 50,
      image: 'assets/products/Turban.jpg',
      desc: 'Clean structured headwrap designed as a bold finishing piece.',
      sizes: STANDARD_SIZES
    }

  ];

  // ============================================================
  // STATE
  // ============================================================

  const frameImages = new Array(TOTAL_FRAMES);
  let framesLoaded = 0;

  let canvas;
  let ctx;

  let currentFrame = 0;

  let cart = [];

  let animationStarted = false;
  let animationStartTime = 0;

  // ============================================================
  // DOM
  // ============================================================

  const heroCanvas = document.getElementById('heroCanvas');
  const heroContainer = document.getElementById('hero');

  const heroTitleBlock = document.getElementById('heroTitleBlock');
  const heroScrollHint = document.getElementById('heroScrollHint');
  const stageIndicator = document.getElementById('stageIndicator');

  const productGrid = document.getElementById('productGrid');

  const productModal = document.getElementById('productModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalPrice = document.getElementById('modalPrice');
  const modalSizes = document.getElementById('modalSizes');
  const modalAddBtn = document.getElementById('modalAddBtn');

  const cartBtn = document.getElementById('cartBtn');
  const cartBackdrop = document.getElementById('cartBackdrop');
  const cartCloseBtn = document.getElementById('cartCloseBtn');
  const cartItemsContainer = document.getElementById('cartItemsContainer');
  const cartSubtotal = document.getElementById('cartSubtotal');
  const cartCheckoutBtn = document.getElementById('cartCheckoutBtn');

  const statementSection = document.getElementById('statementSection');
  const minimalToast = document.getElementById('minimalToast');

  let activeProduct = null;
  let selectedSize = null;

  // ============================================================
  // INITIALIZATION
  // ============================================================

  function init() {

    canvas = heroCanvas;

    if (!canvas) return;

    ctx = canvas.getContext('2d');

    // Keep hero at one viewport.
    if (heroContainer) {
      heroContainer.style.height = '100vh';
      heroContainer.style.minHeight = '100vh';
    }

    loadCart();

    resizeCanvas();

    window.addEventListener('resize', resizeCanvas);

    preloadFrames();

    setupScrollListener();

    renderProducts();

    setupProductModal();

    setupCartDrawer();

    setupIntersectionObservers();

    setupSmoothScrollLinks();

    requestAnimationFrame(renderLoop);
  }

  // ============================================================
  // CANVAS
  // ============================================================

  function resizeCanvas() {

    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const rect = canvas.getBoundingClientRect();

    canvas.width = (rect.width || window.innerWidth) * dpr;
    canvas.height = (rect.height || window.innerHeight) * dpr;

    if (ctx) {
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
    }

    // Redraw current frame after resizing.
    const frame = frameImages[Math.floor(currentFrame)];

    if (frame) {
      drawFrame(frame);
    }
  }

  // ============================================================
  // LOAD ALL 83 FRAMES
  // ============================================================

  function preloadFrames() {

    for (let i = 1; i <= TOTAL_FRAMES; i++) {

      const img = new Image();

      const padded = String(i).padStart(3, '0');

      img.src = `${FRAME_PREFIX}${padded}${FRAME_EXT}`;

      img.onload = () => {

        frameImages[i - 1] = img;

        framesLoaded++;

        if (i === 1 && currentFrame === 0) {
          drawFrame(img);
        }

        // Start only after all frames are available.
        if (
          framesLoaded === TOTAL_FRAMES &&
          !animationStarted
        ) {
          startAutoPlay();
        }
      };

      img.onerror = () => {

        // Count failed frame so one missing image
        // does not permanently prevent playback.
        framesLoaded++;

        if (
          framesLoaded === TOTAL_FRAMES &&
          !animationStarted
        ) {
          startAutoPlay();
        }
      };
    }
  }

  // ============================================================
  // CONTINUOUS 15 SECOND LOOP
  // ============================================================

  function startAutoPlay() {

    if (animationStarted) return;

    animationStarted = true;

    animationStartTime = performance.now();

    keepHeroTextVisible();

    requestAnimationFrame(animate);
  }

  function animate(now) {

    const elapsed =
      (now - animationStartTime) % AUTO_PLAY_DURATION;

    const progress =
      elapsed / AUTO_PLAY_DURATION;

    const targetFrame =
      progress * (TOTAL_FRAMES - 1);

    // IMPORTANT:
    // Direct frame positioning is used here.
    // This prevents the 083 -> 001 transition
    // from travelling backwards.
    currentFrame = targetFrame;

    const frameIndex =
      Math.floor(currentFrame);

    const frame =
      frameImages[frameIndex];

    if (frame) {
      drawFrame(frame);
    }

    keepHeroTextVisible();

    updateStageIndicator(progress);

    requestAnimationFrame(animate);
  }

  // ============================================================
  // HERO TEXT ALWAYS VISIBLE
  // ============================================================

  function keepHeroTextVisible() {

    if (heroTitleBlock) {

      heroTitleBlock.style.opacity = '1';

      heroTitleBlock.style.visibility = 'visible';

      heroTitleBlock.style.display = 'block';

      heroTitleBlock.style.transform =
        'translate(-50%, -50%)';
    }

    if (heroScrollHint) {

      heroScrollHint.style.opacity = '1';

      heroScrollHint.style.visibility = 'visible';
    }
  }

  // ============================================================
  // STAGE INDICATOR
  // ============================================================

  function updateStageIndicator(progress) {

    if (!stageIndicator) return;

    const frameIndex =
      Math.round(progress * (TOTAL_FRAMES - 1));

    let matchedStage = STAGES[0].name;

    for (let i = 0; i < STAGES.length; i++) {

      if (
        frameIndex >= STAGES[i].range[0] &&
        frameIndex <= STAGES[i].range[1]
      ) {

        matchedStage = STAGES[i].name;

        break;
      }
    }

    stageIndicator.textContent = matchedStage;
  }

  // ============================================================
  // SCROLL
  // Animation DOES NOT stop when scrolling.
  // ============================================================

  function setupScrollListener() {

    window.addEventListener(
      'scroll',
      () => {
        keepHeroTextVisible();
      },
      { passive: true }
    );
  }

  // ============================================================
  // FRAME RENDER
  // ============================================================

  function renderLoop() {

    // Keep rendering current frame.
    const frameIndex =
      Math.floor(currentFrame);

    const frame =
      frameImages[frameIndex];

    if (frame) {
      drawFrame(frame);
    }

    requestAnimationFrame(renderLoop);
  }

  function drawFrame(img) {

    if (!ctx || !canvas || !img) return;

    ctx.clearRect(
      0,
      0,
      canvas.width,
      canvas.height
    );

    const srcW =
      img.naturalWidth ||
      img.width ||
      1280;

    const srcH =
      img.naturalHeight ||
      img.height ||
      720;

    const canvasW = canvas.width;
    const canvasH = canvas.height;

    const scale =
      Math.max(
        canvasW / srcW,
        canvasH / srcH
      );

    const drawW =
      srcW * scale;

    const drawH =
      srcH * scale;

    const drawX =
      (canvasW - drawW) / 2;

    const drawY =
      (canvasH - drawH) / 2;

    ctx.drawImage(
      img,
      0,
      0,
      srcW,
      srcH,
      drawX,
      drawY,
      drawW,
      drawH
    );
  }

  // ============================================================
  // PRODUCTS
  // ============================================================

  function renderProducts() {

    if (!productGrid) return;

    productGrid.innerHTML = '';

    PRODUCTS.forEach(product => {

      const item =
        document.createElement('div');

      item.className = 'product-item';

      item.dataset.id = product.id;

      item.innerHTML = `

        <div class="product-image-wrap">

          <img
            src="${product.image}"
            alt="${product.name}"
            loading="lazy"
            onerror="this.src='assets/products/t 2.jpg'"
          />

          <div class="product-hover-view">
            <span class="view-label">VIEW</span>
          </div>

        </div>

        <div class="product-meta">

          <span class="product-name">
            ${product.name}
          </span>

          <span class="product-price">
            ${product.price}
          </span>

        </div>

      `;

      item.addEventListener(
        'click',
        () => openProductModal(product)
      );

      productGrid.appendChild(item);
    });
  }

  // ============================================================
  // PRODUCT MODAL
  // ============================================================

  function setupProductModal() {

    if (modalCloseBtn) {

      modalCloseBtn.addEventListener(
        'click',
        closeProductModal
      );
    }

    if (productModal) {

      productModal.addEventListener(
        'click',
        e => {

          if (e.target === productModal) {
            closeProductModal();
          }

        }
      );
    }

    if (modalAddBtn) {

      modalAddBtn.addEventListener(
        'click',
        () => {

          if (!activeProduct) return;

          if (!selectedSize) {

            showToast('SELECT SIZE');

            return;
          }

          addToCart(
            activeProduct,
            selectedSize
          );

          closeProductModal();
        }
      );
    }
  }

  function openProductModal(product) {

    activeProduct = product;

    selectedSize = product.sizes[0];

    if (modalImage) {

      modalImage.src = product.image;

      modalImage.alt = product.name;

      modalImage.onerror = () => {
        modalImage.src =
          'assets/products/t 2.jpg';
      };
    }

    if (modalTitle) {
      modalTitle.textContent =
        product.name;
    }

    if (modalDesc) {
      modalDesc.textContent =
        product.desc;
    }

    if (modalPrice) {
      modalPrice.textContent =
        product.price;
    }

    if (modalSizes) {

      modalSizes.innerHTML = '';

      product.sizes.forEach(
        (size, index) => {

          const button =
            document.createElement('button');

          button.className =
            `size-btn ${
              index === 0
                ? 'active'
                : ''
            }`;

          button.textContent = size;

          button.addEventListener(
            'click',
            () => {

              modalSizes
                .querySelectorAll('.size-btn')
                .forEach(btn => {
                  btn.classList.remove('active');
                });

              button.classList.add('active');

              selectedSize = size;
            }
          );

          modalSizes.appendChild(button);
        }
      );
    }

    if (productModal) {
      productModal.classList.add('open');
      document.body.classList.add('modal-open');
    }
  }

  function closeProductModal() {

    if (productModal) {
      productModal.classList.remove('open');
    }

    document.body.classList.remove('modal-open');
  }

  // ============================================================
  // CART
  // ============================================================

  function setupCartDrawer() {

    if (cartBtn) {

      cartBtn.addEventListener(
        'click',
        openCart
      );
    }

    if (cartCloseBtn) {

      cartCloseBtn.addEventListener(
        'click',
        closeCart
      );
    }

    if (cartBackdrop) {

      cartBackdrop.addEventListener(
        'click',
        e => {

          if (e.target === cartBackdrop) {
            closeCart();
          }

        }
      );
    }

    if (cartCheckoutBtn) {

      cartCheckoutBtn.addEventListener(
        'click',
        () => {

          if (cart.length === 0) {

            showToast('BAG EMPTY');

            return;
          }

          window.open(
            'https://paystack.shop/pay/yw9q-sw7y7',
            '_blank'
          );
        }
      );
    }
  }

  function openCart() {

    renderCart();

    if (cartBackdrop) {
      cartBackdrop.classList.add('open');
    }
  }

  function closeCart() {

    if (cartBackdrop) {
      cartBackdrop.classList.remove('open');
    }
  }

  function addToCart(product, size) {

    const existing =
      cart.find(
        item =>
          item.id === product.id &&
          item.size === size
      );

    if (existing) {

      existing.qty++;

    } else {

      cart.push({

        id: product.id,

        name: product.name,

        price: product.price,

        priceNum: product.priceNum,

        image: product.image,

        size: size,

        qty: 1

      });
    }

    saveCart();

    updateCartButton();

    renderCart();

    openCart();

    showToast(
      `ADDED ${product.name}`
    );
  }

  function updateCartButton() {

    const totalCount =
      cart.reduce(
        (total, item) =>
          total + item.qty,
        0
      );

    if (cartBtn) {

      cartBtn.textContent =
        `CART (${totalCount})`;
    }
  }

  function renderCart() {

    if (!cartItemsContainer) return;

    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {

      cartItemsContainer.innerHTML =
        `<p class="cart-empty-text">
          BAG IS EMPTY
        </p>`;

      if (cartSubtotal) {
        cartSubtotal.textContent =
          '$0';
      }

      return;
    }

    let total = 0;

    cart.forEach(
      (item, index) => {

        total +=
          item.priceNum *
          item.qty;

        const row =
          document.createElement('div');

        row.className =
          'cart-item-row';

        row.innerHTML = `

          <img
            src="${item.image}"
            alt="${item.name}"
            class="cart-item-img"
            onerror="this.src='assets/products/t 2.jpg'"
          />

          <div class="cart-item-info">

            <div class="cart-item-name">
              ${item.name}
            </div>

            <div class="cart-item-size">
              SIZE: ${item.size} × ${item.qty}
            </div>

            <div class="cart-item-price">
              $${item.priceNum * item.qty}
            </div>

          </div>

          <button
            class="cart-item-remove"
            data-index="${index}"
          >
            REMOVE
          </button>
        `;

        row
          .querySelector(
            '.cart-item-remove'
          )
          .addEventListener(
            'click',
            () => {

              cart.splice(index, 1);

              saveCart();

              updateCartButton();

              renderCart();
            }
          );

        cartItemsContainer.appendChild(row);
      }
    );

    if (cartSubtotal) {

      cartSubtotal.textContent =
        `$${total}`;
    }
  }

  // ============================================================
  // LOCAL STORAGE
  // ============================================================

  function loadCart() {

    try {

      const saved =
        localStorage.getItem(
          'nigrum_minimal_cart'
        );

      if (saved) {
        cart = JSON.parse(saved);
      }

    } catch (error) {

      cart = [];
    }

    updateCartButton();
  }

  function saveCart() {

    try {

      localStorage.setItem(
        'nigrum_minimal_cart',
        JSON.stringify(cart)
      );

    } catch (error) {

      // Ignore storage errors.
    }
  }

  // ============================================================
  // STATEMENT ANIMATION
  // ============================================================

  function setupIntersectionObservers() {

    if (!statementSection) return;

    const observer =
      new IntersectionObserver(
        entries => {

          entries.forEach(entry => {

            if (entry.isIntersecting) {

              statementSection
                .classList
                .add('in-view');
            }

          });

        },
        {
          threshold: 0.35
        }
      );

    observer.observe(statementSection);
  }

  // ============================================================
  // SMOOTH NAVIGATION
  // ============================================================

  function setupSmoothScrollLinks() {

    document
      .querySelectorAll(
        'a[href^="#"]'
      )
      .forEach(link => {

        link.addEventListener(
          'click',
          e => {

            const targetId =
              link.getAttribute('href');

            if (
              targetId === '#' ||
              !targetId
            ) {
              return;
            }

            const targetEl =
              document.querySelector(
                targetId
              );

            if (targetEl) {

              e.preventDefault();

              targetEl.scrollIntoView({
                behavior: 'smooth'
              });
            }

          }
        );
      });
  }

  // ============================================================
  // TOAST
  // ============================================================

  let toastTimer = null;

  function showToast(message) {

    if (!minimalToast) return;

    minimalToast.textContent =
      message;

    minimalToast.classList.add(
      'visible'
    );

    if (toastTimer) {
      clearTimeout(toastTimer);
    }

    toastTimer =
      setTimeout(
        () => {

          minimalToast.classList.remove(
            'visible'
          );

        },
        2500
      );
  }

  // ============================================================
  // START
  // ============================================================

  if (
    document.readyState ===
    'loading'
  ) {

    document.addEventListener(
      'DOMContentLoaded',
      init
    );

  } else {

    init();
  }

})();
