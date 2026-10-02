/**
 * ============================================================
 * NIGRUM STARE — LUXURY STREETWEAR
 * ============================================================
 *
 * MEN'S COLLECTION ONLY
 *
 * THREAD → FABRIC → CUT → SEW → FINISH → FORM → NIGRUM STARE
 *
 * 83 FRAME HERO ANIMATION
 * CONTINUOUS LOOP
 * 15 SECOND FULL CYCLE
 * ============================================================
 */

(function () {
  'use strict';


  /* ============================================================
     HERO ANIMATION CONFIGURATION
     ============================================================ */

  const TOTAL_FRAMES = 83;

  const FRAME_PREFIX = 'frames/ezgif-frame-';

  const FRAME_EXT = '.jpg';

  /*
   * One complete animation cycle.
   * 15 seconds.
   */
  const AUTO_PLAY_DURATION = 15000;


  /* ============================================================
     HERO STAGES
     ============================================================ */

  const STAGES = [
    {
      name: '01 / THREAD',
      range: [0, 13]
    },

    {
      name: '02 / FABRIC',
      range: [14, 29]
    },

    {
      name: '03 / CUT',
      range: [30, 41]
    },

    {
      name: '04 / SEW',
      range: [42, 55]
    },

    {
      name: '05 / FINISH',
      range: [56, 65]
    },

    {
      name: '06 / FORM',
      range: [66, 74]
    },

    {
      name: '07 / NIGRUM STARE',
      range: [75, 82]
    }
  ];


  /* ============================================================
     STANDARD CLOTHING SIZES
     ============================================================ */

  const CLOTHING_SIZES = [
    'S',
    'M',
    'L',
    'XL'
  ];

  const ACCESSORY_SIZE = [
    'ONE SIZE'
  ];


  /* ============================================================
     MEN'S COLLECTION
     ============================================================ */

  const PRODUCTS = [

    /* ----------------------------------------------------------
       T-SHIRTS
       ---------------------------------------------------------- */

    {
      id: 'ns-01',
      name: 'Signature T-Shirt',
      category: 'T-SHIRTS',
      price: '$140',
      priceNum: 140,
      image: 'assets/products/signature-t-shirt.jpg',
      desc: 'A heavyweight signature tee with a clean structured silhouette and understated Nigrum Stare identity.',
      sizes: CLOTHING_SIZES
    },

    {
      id: 'ns-02',
      name: 'Oversized T-Shirt',
      category: 'T-SHIRTS',
      price: '$150',
      priceNum: 150,
      image: 'assets/products/oversized-t-shirt.jpg',
      desc: 'Relaxed oversized proportions with a premium heavyweight cotton construction.',
      sizes: CLOTHING_SIZES
    },

    {
      id: 'ns-03',
      name: 'Essential T-Shirt',
      category: 'T-SHIRTS',
      price: '$130',
      priceNum: 130,
      image: 'assets/products/essential-t-shirt.jpg',
      desc: 'A refined everyday tee designed around a clean masculine silhouette.',
      sizes: CLOTHING_SIZES
    },


    /* ----------------------------------------------------------
       SHIRTS
       ---------------------------------------------------------- */

    {
      id: 'ns-04',
      name: 'Essential Shirt',
      category: 'SHIRTS',
      price: '$175',
      priceNum: 175,
      image: 'assets/products/essential-shirt.jpg',
      desc: 'Minimal premium shirt with a clean cut and quiet luxury finish.',
      sizes: CLOTHING_SIZES
    },

    {
      id: 'ns-05',
      name: 'Structured Shirt',
      category: 'SHIRTS',
      price: '$190',
      priceNum: 190,
      image: 'assets/products/structured-shirt.jpg',
      desc: 'A structured contemporary shirt designed for a sharp modern profile.',
      sizes: CLOTHING_SIZES
    },

    {
      id: 'ns-06',
      name: 'Oversized Shirt',
      category: 'SHIRTS',
      price: '$185',
      priceNum: 185,
      image: 'assets/products/oversized-shirt.jpg',
      desc: 'Relaxed oversized shirt with clean lines and effortless streetwear proportions.',
      sizes: CLOTHING_SIZES
    },


    /* ----------------------------------------------------------
       LONG SLEEVE
       ---------------------------------------------------------- */

    {
      id: 'ns-07',
      name: 'Premium Long Sleeve',
      category: 'LONG SLEEVE',
      price: '$165',
      priceNum: 165,
      image: 'assets/products/premium-long-sleeve.jpg',
      desc: 'Premium long sleeve essential with a refined fit and minimal finish.',
      sizes: CLOTHING_SIZES
    },

    {
      id: 'ns-08',
      name: 'Heavy Long Sleeve',
      category: 'LONG SLEEVE',
      price: '$180',
      priceNum: 180,
      image: 'assets/products/heavy-long-sleeve.jpg',
      desc: 'Dense cotton long sleeve with a substantial feel and architectural silhouette.',
      sizes: CLOTHING_SIZES
    },


    /* ----------------------------------------------------------
       SWEATSHIRTS
       ---------------------------------------------------------- */

    {
      id: 'ns-09',
      name: 'Heavyweight Sweatshirt',
      category: 'SWEATSHIRTS',
      price: '$195',
      priceNum: 195,
      image: 'assets/products/heavyweight-sweatshirt.jpg',
      desc: 'Heavyweight crewneck sweatshirt with a clean oversized streetwear profile.',
      sizes: CLOTHING_SIZES
    },

    {
      id: 'ns-10',
      name: 'Essential Sweatshirt',
      category: 'SWEATSHIRTS',
      price: '$185',
      priceNum: 185,
      image: 'assets/products/essential-sweatshirt.jpg',
      desc: 'Minimal everyday sweatshirt designed for clean layering.',
      sizes: CLOTHING_SIZES
    },


    /* ----------------------------------------------------------
       HOODIES
       ---------------------------------------------------------- */

    {
      id: 'ns-11',
      name: 'Classic Hoodie',
      category: 'HOODIES',
      price: '$220',
      priceNum: 220,
      image: 'assets/products/hoodie.jpg',
      desc: 'Heavyweight hoodie with a structured hood and relaxed luxury streetwear silhouette.',
      sizes: CLOTHING_SIZES
    },

    {
      id: 'ns-12',
      name: 'Pro Heavyweight Hoodie',
      category: 'HOODIES',
      price: '$235',
      priceNum: 235,
      image: 'assets/products/HOODIE3.jpg',
      desc: 'Dense heavyweight construction designed around a strong architectural silhouette.',
      sizes: CLOTHING_SIZES
    },

    {
      id: 'ns-13',
      name: 'Zip Hoodie',
      category: 'HOODIES',
      price: '$225',
      priceNum: 225,
      image: 'assets/products/zip-hoodie.jpg',
      desc: 'Minimal full-zip hoodie with a clean premium finish.',
      sizes: CLOTHING_SIZES
    },


    /* ----------------------------------------------------------
       KAFTANS
       ---------------------------------------------------------- */

    {
      id: 'ns-14',
      name: 'Luxury Kaftan',
      category: 'KAFTANS',
      price: '$210',
      priceNum: 210,
      image: 'assets/products/luxury-kaftan.jpg',
      desc: 'Relaxed premium kaftan with an elegant flowing silhouette.',
      sizes: CLOTHING_SIZES
    },

    {
      id: 'ns-15',
      name: 'Signature Kaftan',
      category: 'KAFTANS',
      price: '$225',
      priceNum: 225,
      image: 'assets/products/signature-kaftan.jpg',
      desc: 'Modern kaftan combining traditional ease with contemporary streetwear proportions.',
      sizes: CLOTHING_SIZES
    },

    {
      id: 'ns-16',
      name: 'Structured Kaftan',
      category: 'KAFTANS',
      price: '$235',
      priceNum: 235,
      image: 'assets/products/structured-kaftan.jpg',
      desc: 'A sharper kaftan silhouette designed for a refined statement.',
      sizes: CLOTHING_SIZES
    },


    /* ----------------------------------------------------------
       ITALIAN PANTS
       ---------------------------------------------------------- */

    {
      id: 'ns-17',
      name: 'Italian Pants',
      category: 'ITALIAN PANTS',
      price: '$190',
      priceNum: 190,
      image: 'assets/products/italian-pants.jpg',
      desc: 'Italian-inspired trousers with relaxed tailoring and a clean luxury drape.',
      sizes: CLOTHING_SIZES
    },

    {
      id: 'ns-18',
      name: 'Relaxed Italian Pants',
      category: 'ITALIAN PANTS',
      price: '$200',
      priceNum: 200,
      image: 'assets/products/relaxed-italian-pants.jpg',
      desc: 'Relaxed wide-leg Italian trousers designed for contemporary streetwear.',
      sizes: CLOTHING_SIZES
    },

    {
      id: 'ns-19',
      name: 'Pleated Italian Pants',
      category: 'ITALIAN PANTS',
      price: '$215',
      priceNum: 215,
      image: 'assets/products/pleated-italian-pants.jpg',
      desc: 'Premium pleated trousers with a sophisticated tailored fall.',
      sizes: CLOTHING_SIZES
    },


    /* ----------------------------------------------------------
       TROUSERS
       ---------------------------------------------------------- */

    {
      id: 'ns-20',
      name: 'Wide-Leg Trousers',
      category: 'TROUSERS',
      price: '$195',
      priceNum: 195,
      image: 'assets/products/wide-leg-trousers.jpg',
      desc: 'Wide-leg trousers with a fluid shape and modern editorial profile.',
      sizes: CLOTHING_SIZES
    },

    {
      id: 'ns-21',
      name: 'Tailored Trousers',
      category: 'TROUSERS',
      price: '$185',
      priceNum: 185,
      image: 'assets/products/tailored-trousers.jpg',
      desc: 'Clean tailored trousers built around a sharp masculine silhouette.',
      sizes: CLOTHING_SIZES
    },

    {
      id: 'ns-22',
      name: 'Straight-Leg Pants',
      category: 'TROUSERS',
      price: '$175',
      priceNum: 175,
      image: 'assets/products/straight-leg-pants.jpg',
      desc: 'Straight-cut pants with minimal detailing and a timeless profile.',
      sizes: CLOTHING_SIZES
    },


    /* ----------------------------------------------------------
       CARGO
       ---------------------------------------------------------- */

    {
      id: 'ns-23',
      name: 'Cargo Pants',
      category: 'CARGO',
      price: '$185',
      priceNum: 185,
      image: 'assets/products/cargo-pants.jpg',
      desc: 'Utility-inspired cargo pants with functional detailing and a refined finish.',
      sizes: CLOTHING_SIZES
    },

    {
      id: 'ns-24',
      name: 'Relaxed Cargo Pants',
      category: 'CARGO',
      price: '$195',
      priceNum: 195,
      image: 'assets/products/relaxed-cargo-pants.jpg',
      desc: 'Relaxed cargo silhouette designed for everyday movement and layering.',
      sizes: CLOTHING_SIZES
    },


    /* ----------------------------------------------------------
       SHORTS
       ---------------------------------------------------------- */

    {
      id: 'ns-25',
      name: 'Premium Shorts',
      category: 'SHORTS',
      price: '$120',
      priceNum: 120,
      image: 'assets/products/premium-shorts.jpg',
      desc: 'Premium relaxed shorts with a clean minimal streetwear silhouette.',
      sizes: CLOTHING_SIZES
    },

    {
      id: 'ns-26',
      name: 'Signature Shorts',
      category: 'SHORTS',
      price: '$125',
      priceNum: 125,
      image: 'assets/products/signature-shorts.jpg',
      desc: 'Everyday heavyweight shorts designed to pair with Nigrum Stare essentials.',
      sizes: CLOTHING_SIZES
    },


    /* ----------------------------------------------------------
       SETS
       ---------------------------------------------------------- */

    {
      id: 'ns-27',
      name: 'T-Shirt & Italian Pants Set',
      category: 'SETS',
      price: '$285',
      priceNum: 285,
      image: 'assets/products/t-shirt-italian-pants-set.jpg',
      desc: 'Complete look pairing a signature tee with refined Italian trousers.',
      sizes: CLOTHING_SIZES
    },

    {
      id: 'ns-28',
      name: 'Shirt & Italian Pants Set',
      category: 'SETS',
      price: '$310',
      priceNum: 310,
      image: 'assets/products/shirt-italian-pants-set.jpg',
      desc: 'Premium coordinated shirt and Italian trouser set.',
      sizes: CLOTHING_SIZES
    },

    {
      id: 'ns-29',
      name: 'Kaftan Set',
      category: 'SETS',
      price: '$250',
      priceNum: 250,
      image: 'assets/products/kaftan-set.jpg',
      desc: 'Complete relaxed kaftan set designed for effortless statement dressing.',
      sizes: CLOTHING_SIZES
    },

    {
      id: 'ns-30',
      name: 'Sweatshirt & Pants Set',
      category: 'SETS',
      price: '$275',
      priceNum: 275,
      image: 'assets/products/sweatshirt-pants-set.jpg',
      desc: 'Matching heavyweight sweatshirt and relaxed trousers.',
      sizes: CLOTHING_SIZES
    },

    {
      id: 'ns-31',
      name: 'Hoodie & Pants Set',
      category: 'SETS',
      price: '$295',
      priceNum: 295,
      image: 'assets/products/hoodie-pants-set.jpg',
      desc: 'Complete heavyweight hoodie and trouser combination.',
      sizes: CLOTHING_SIZES
    },

    {
      id: 'ns-32',
      name: 'Sweatshirt & Shorts Set',
      category: 'SETS',
      price: '$195',
      priceNum: 195,
      image: 'assets/products/t3.jpg',
      desc: 'Matching heavyweight sweatshirt and relaxed shorts set.',
      sizes: CLOTHING_SIZES
    },


    /* ----------------------------------------------------------
       ACCESSORIES
       ---------------------------------------------------------- */

    {
      id: 'ns-33',
      name: 'Structured Tactical Cap',
      category: 'ACCESSORIES',
      price: '$75',
      priceNum: 75,
      image: 'assets/products/cap.jpg',
      desc: 'Structured six-panel cap with a clean tactical profile.',
      sizes: ACCESSORY_SIZE
    },

    {
      id: 'ns-34',
      name: 'Fisherman Beanie',
      category: 'ACCESSORIES',
      price: '$65',
      priceNum: 65,
      image: 'assets/products/ROYBENS 2 Pack Wool Fisherman Beanies for Men, Knit Short Watch Cap Winter Warm Hats.jpg',
      desc: 'Dense knitted fisherman beanie with a clean minimalist silhouette.',
      sizes: ACCESSORY_SIZE
    },

    {
      id: 'ns-35',
      name: 'Trucker Hat',
      category: 'ACCESSORIES',
      price: '$70',
      priceNum: 70,
      image: 'assets/products/Men Solid Trucker Hat.jpg',
      desc: 'Structured trucker hat with a clean masculine profile.',
      sizes: ACCESSORY_SIZE
    },

    {
      id: 'ns-36',
      name: 'Tactical Bandana',
      category: 'ACCESSORIES',
      price: '$45',
      priceNum: 45,
      image: 'assets/products/1pc Quick Dry Sports Bandana.jpg',
      desc: 'Technical bandana designed as a versatile finishing piece.',
      sizes: ACCESSORY_SIZE
    },

    {
      id: 'ns-37',
      name: 'Turban Headwrap',
      category: 'ACCESSORIES',
      price: '$50',
      priceNum: 50,
      image: 'assets/products/Turban.jpg',
      desc: 'Clean structured headwrap designed as a bold finishing piece.',
      sizes: ACCESSORY_SIZE
    }

  ];


  /* ============================================================
     STATE
     ============================================================ */

  const frameImages = new Array(TOTAL_FRAMES);

  let framesLoaded = 0;

  let canvas;
  let ctx;

  let currentFrame = 0;

  let cart = [];

  let animationStarted = false;

  let animationStartTime = 0;

  let activeProduct = null;

  let selectedSize = null;


  /* ============================================================
     DOM ELEMENTS
     ============================================================ */

  const heroCanvas =
    document.getElementById('heroCanvas');

  const heroContainer =
    document.getElementById('hero');

  const heroTitleBlock =
    document.getElementById('heroTitleBlock');

  const heroScrollHint =
    document.getElementById('heroScrollHint');

  const stageIndicator =
    document.getElementById('stageIndicator');

  const productGrid =
    document.getElementById('productGrid');

  const productModal =
    document.getElementById('productModal');

  const modalCloseBtn =
    document.getElementById('modalCloseBtn');

  const modalImage =
    document.getElementById('modalImage');

  const modalTitle =
    document.getElementById('modalTitle');

  const modalDesc =
    document.getElementById('modalDesc');

  const modalPrice =
    document.getElementById('modalPrice');

  const modalSizes =
    document.getElementById('modalSizes');

  const modalAddBtn =
    document.getElementById('modalAddBtn');

  const cartBtn =
    document.getElementById('cartBtn');

  const cartBackdrop =
    document.getElementById('cartBackdrop');

  const cartCloseBtn =
    document.getElementById('cartCloseBtn');

  const cartItemsContainer =
    document.getElementById('cartItemsContainer');

  const cartSubtotal =
    document.getElementById('cartSubtotal');

  const cartCheckoutBtn =
    document.getElementById('cartCheckoutBtn');

  const statementSection =
    document.getElementById('statementSection');

  const minimalToast =
    document.getElementById('minimalToast');


  /* ============================================================
     INITIALIZE
     ============================================================ */

  function init() {

    canvas = heroCanvas;

    if (!canvas) return;

    ctx = canvas.getContext('2d');

    if (heroContainer) {

      heroContainer.style.height = '100vh';

      heroContainer.style.minHeight = '100vh';
    }

    loadCart();

    resizeCanvas();

    window.addEventListener(
      'resize',
      resizeCanvas
    );

    preloadFrames();

    setupScrollListener();

    renderProducts();

    setupProductModal();

    setupCartDrawer();

    setupIntersectionObservers();

    setupSmoothScrollLinks();

    keepHeroTextVisible();

    requestAnimationFrame(
      renderLoop
    );
  }


  /* ============================================================
     CANVAS RESIZE
     ============================================================ */

  function resizeCanvas() {

    if (!canvas) return;

    const dpr =
      Math.min(
        window.devicePixelRatio || 1,
        2
      );

    const rect =
      canvas.getBoundingClientRect();

    canvas.width =
      (rect.width || window.innerWidth) *
      dpr;

    canvas.height =
      (rect.height || window.innerHeight) *
      dpr;

    if (ctx) {

      ctx.imageSmoothingEnabled = true;

      ctx.imageSmoothingQuality = 'high';
    }

    const frame =
      frameImages[
        Math.floor(currentFrame)
      ];

    if (frame) {

      drawFrame(frame);
    }
  }


  /* ============================================================
     PRELOAD HERO FRAMES
     ============================================================ */

  function preloadFrames() {

    for (
      let i = 1;
      i <= TOTAL_FRAMES;
      i++
    ) {

      const img =
        new Image();

      const padded =
        String(i).padStart(
          3,
          '0'
        );

      img.src =
        `${FRAME_PREFIX}${padded}${FRAME_EXT}`;


      img.onload = () => {

        frameImages[i - 1] =
          img;

        framesLoaded++;


        if (
          i === 1 &&
          currentFrame === 0
        ) {

          drawFrame(img);
        }


        /*
         * We wait for every frame before
         * starting the cinematic loop.
         */

        if (
          framesLoaded ===
          TOTAL_FRAMES &&
          !animationStarted
        ) {

          startAutoPlay();
        }
      };


      img.onerror = () => {

        framesLoaded++;


        if (
          framesLoaded ===
          TOTAL_FRAMES &&
          !animationStarted
        ) {

          startAutoPlay();
        }
      };
    }
  }


  /* ============================================================
     CONTINUOUS HERO LOOP
     ============================================================ */

  function startAutoPlay() {

    if (animationStarted) return;

    animationStarted = true;

    animationStartTime =
      performance.now();

    keepHeroTextVisible();

    requestAnimationFrame(
      animate
    );
  }


  function animate(now) {

    /*
     * MODULO LOOP
     *
     * 083 → 001 happens naturally.
     * There is NO reverse travel.
     */

    const elapsed =
      (
        now -
        animationStartTime
      ) %
      AUTO_PLAY_DURATION;


    const progress =
      elapsed /
      AUTO_PLAY_DURATION;


    const targetFrame =
      progress *
      (TOTAL_FRAMES - 1);


    currentFrame =
      targetFrame;


    const frameIndex =
      Math.floor(currentFrame);


    const frame =
      frameImages[frameIndex];


    if (frame) {

      drawFrame(frame);
    }


    keepHeroTextVisible();

    updateStageIndicator(
      progress
    );


    requestAnimationFrame(
      animate
    );
  }


  /* ============================================================
     HERO TEXT — ALWAYS VISIBLE
     ============================================================ */

  function keepHeroTextVisible() {

    if (heroTitleBlock) {

      heroTitleBlock.style.opacity =
        '1';

      heroTitleBlock.style.visibility =
        'visible';

      heroTitleBlock.style.display =
        'block';

      heroTitleBlock.style.transform =
        'translate(-50%, -50%)';
    }


    if (heroScrollHint) {

      heroScrollHint.style.opacity =
        '1';

      heroScrollHint.style.visibility =
        'visible';
    }
  }


  /* ============================================================
     STAGE INDICATOR
     ============================================================ */

  function updateStageIndicator(
    progress
  ) {

    if (!stageIndicator) return;

    const frameIndex =
      Math.round(
        progress *
        (TOTAL_FRAMES - 1)
      );


    let stage =
      STAGES[0].name;


    for (
      let i = 0;
      i < STAGES.length;
      i++
    ) {

      if (
        frameIndex >=
        STAGES[i].range[0] &&

        frameIndex <=
        STAGES[i].range[1]
      ) {

        stage =
          STAGES[i].name;

        break;
      }
    }


    stageIndicator.textContent =
      stage;
  }


  /* ============================================================
     SCROLL
     ============================================================ */

  function setupScrollListener() {

    window.addEventListener(
      'scroll',
      () => {

        /*
         * Scrolling does NOT control
         * the animation.
         */

        keepHeroTextVisible();

      },
      {
        passive: true
      }
    );
  }


  /* ============================================================
     RENDER LOOP
     ============================================================ */

  function renderLoop() {

    const frameIndex =
      Math.floor(
        currentFrame
      );


    const frame =
      frameImages[
        frameIndex
      ];


    if (frame) {

      drawFrame(frame);
    }


    requestAnimationFrame(
      renderLoop
    );
  }


  /* ============================================================
     DRAW HERO FRAME
     ============================================================ */

  function drawFrame(img) {

    if (
      !ctx ||
      !canvas ||
      !img
    ) return;


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


    const canvasW =
      canvas.width;


    const canvasH =
      canvas.height;


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


  /* ============================================================
     PRODUCT GRID
     ============================================================ */

  function renderProducts() {

    if (!productGrid) return;

    productGrid.innerHTML = '';


    PRODUCTS.forEach(
      product => {

        const item =
          document.createElement(
            'article'
          );


        item.className =
          'product-item';


        item.dataset.id =
          product.id;


        item.dataset.category =
          product.category;


        item.innerHTML = `

          <div class="product-image-wrap">

            <img
              src="${product.image}"
              alt="${product.name}"
              loading="lazy"
            >

            <div class="product-hover-view">

              <span class="view-label">
                VIEW
              </span>

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


        const image =
          item.querySelector(
            'img'
          );


        /*
         * If a new product image has not
         * been uploaded yet, keep the
         * product space clean instead of
         * breaking the entire page.
         */

        image.addEventListener(
          'error',
          () => {

            image.style.visibility =
              'hidden';

          }
        );


        item.addEventListener(
          'click',
          () => {

            openProductModal(
              product
            );

          }
        );


        productGrid.appendChild(
          item
        );
      }
    );
  }


  /* ============================================================
     PRODUCT MODAL
     ============================================================ */

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
        event => {

          if (
            event.target ===
            productModal
          ) {

            closeProductModal();
          }
        }
      );
    }


    if (modalAddBtn) {

      modalAddBtn.addEventListener(
        'click',
        () => {

          if (!activeProduct) {
            return;
          }


          if (!selectedSize) {

            showToast(
              'SELECT SIZE'
            );

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


  function openProductModal(
    product
  ) {

    activeProduct =
      product;


    selectedSize =
      product.sizes[0];


    if (modalImage) {

      modalImage.src =
        product.image;

      modalImage.alt =
        product.name;

      modalImage.style.visibility =
        'visible';

      modalImage.onerror =
        () => {

          modalImage.style.visibility =
            'hidden';
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

      modalSizes.innerHTML =
        '';


      product.sizes.forEach(
        (size, index) => {

          const button =
            document.createElement(
              'button'
            );


          button.type =
            'button';


          button.className =
            'size-btn';


          if (index === 0) {

            button.classList.add(
              'active'
            );
          }


          button.textContent =
            size;


          button.addEventListener(
            'click',
            () => {

              modalSizes
                .querySelectorAll(
                  '.size-btn'
                )
                .forEach(
                  btn => {

                    btn.classList.remove(
                      'active'
                    );

                  }
                );


              button.classList.add(
                'active'
              );


              selectedSize =
                size;
            }
          );


          modalSizes.appendChild(
            button
          );
        }
      );
    }


    if (productModal) {

      productModal.classList.add(
        'open'
      );

      document.body.classList.add(
        'modal-open'
      );
    }
  }


  function closeProductModal() {

    if (productModal) {

      productModal.classList.remove(
        'open'
      );
    }


    document.body.classList.remove(
      'modal-open'
    );
  }


  /* ============================================================
     CART
     ============================================================ */

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
        event => {

          if (
            event.target ===
            cartBackdrop
          ) {

            closeCart();
          }
        }
      );
    }


    if (cartCheckoutBtn) {

      cartCheckoutBtn.addEventListener(
        'click',
        () => {

          if (
            cart.length === 0
          ) {

            showToast(
              'BAG EMPTY'
            );

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

      cartBackdrop.classList.add(
        'open'
      );
    }
  }


  function closeCart() {

    if (cartBackdrop) {

      cartBackdrop.classList.remove(
        'open'
      );
    }
  }


  function addToCart(
    product,
    size
  ) {

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

    const count =
      cart.reduce(
        (
          total,
          item
        ) =>
          total +
          item.qty,
        0
      );


    if (cartBtn) {

      cartBtn.textContent =
        `CART (${count})`;
    }
  }


  function renderCart() {

    if (
      !cartItemsContainer
    ) return;


    cartItemsContainer.innerHTML =
      '';


    if (
      cart.length === 0
    ) {

      cartItemsContainer.innerHTML = `

        <p class="cart-empty-text">
          BAG IS EMPTY
        </p>

      `;


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
          document.createElement(
            'div'
          );


        row.className =
          'cart-item-row';


        row.innerHTML = `

          <img
            src="${item.image}"
            alt="${item.name}"
            class="cart-item-img"
          >


          <div class="cart-item-info">

            <div class="cart-item-name">
              ${item.name}
            </div>

            <div class="cart-item-size">
              SIZE: ${item.size}
              × ${item.qty}
            </div>

            <div class="cart-item-price">
              $${item.priceNum * item.qty}
            </div>

          </div>


          <button
            type="button"
            class="cart-item-remove"
          >
            REMOVE
          </button>

        `;


        const removeButton =
          row.querySelector(
            '.cart-item-remove'
          );


        removeButton.addEventListener(
          'click',
          () => {

            cart.splice(
              index,
              1
            );


            saveCart();

            updateCartButton();

            renderCart();
          }
        );


        cartItemsContainer.appendChild(
          row
        );
      }
    );


    if (cartSubtotal) {

      cartSubtotal.textContent =
        `$${total}`;
    }
  }


  /* ============================================================
     LOCAL STORAGE
     ============================================================ */

  function loadCart() {

    try {

      const saved =
        localStorage.getItem(
          'nigrum_minimal_cart'
        );


      if (saved) {

        cart =
          JSON.parse(saved);
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


  /* ============================================================
     STATEMENT SECTION
     ============================================================ */

  function setupIntersectionObservers() {

    if (!statementSection) {
      return;
    }


    const observer =
      new IntersectionObserver(
        entries => {

          entries.forEach(
            entry => {

              if (
                entry.isIntersecting
              ) {

                statementSection.classList.add(
                  'in-view'
                );
              }
            }
          );

        },
        {
          threshold: 0.35
        }
      );


    observer.observe(
      statementSection
    );
  }


  /* ============================================================
     SMOOTH LINKS
     ============================================================ */

  function setupSmoothScrollLinks() {

    document
      .querySelectorAll(
        'a[href^="#"]'
      )
      .forEach(
        link => {

          link.addEventListener(
            'click',
            event => {

              const targetId =
                link.getAttribute(
                  'href'
                );


              if (
                targetId === '#' ||
                !targetId
              ) {

                return;
              }


              const target =
                document.querySelector(
                  targetId
                );


              if (target) {

                event.preventDefault();


                target.scrollIntoView({
                  behavior:
                    'smooth'
                });
              }
            }
          );
        }
      );
  }


  /* ============================================================
     TOAST
     ============================================================ */

  let toastTimer =
    null;


  function showToast(
    message
  ) {

    if (!minimalToast) {
      return;
    }


    minimalToast.textContent =
      message;


    minimalToast.classList.add(
      'visible'
    );


    if (toastTimer) {

      clearTimeout(
        toastTimer
      );
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


  /* ============================================================
     START WEBSITE
     ============================================================ */

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
