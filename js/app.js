/* =========================================================
   NIGRUM STARE
   Main JavaScript
   ========================================================= */

'use strict';


/* =========================================================
   FRAME SETTINGS
   ========================================================= */

const TOTAL_FRAMES = 83;

const FRAME_PREFIX = 'frames/ezgif-frame-';

const FRAME_EXT = '.jpg';


/*
   FULL ANIMATION SPEED

   9000ms = 9 seconds for the complete animation.

   The animation will continuously repeat:

   FRAME 001
      ↓
   FRAME 083
      ↓
   FRAME 001
      ↓
   FRAME 083
      ↓
   ...

   There is NO pause between loops.
*/

const AUTO_PLAY_DURATION = 9000;


/* =========================================================
   STAGES
   ========================================================= */

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


/* =========================================================
   PRODUCTS
   ========================================================= */

const PRODUCTS = [

  {
    id: 'ns-01',

    name: 'Signature T-Shirt',

    price: 140,

    image: 'assets/products/t 2.jpg',

    sizes: [
      'S',
      'M',
      'L',
      'XL',
      'OVERSIZED'
    ]
  },


  {
    id: 'ns-02',

    name: 'Classic Hoodie',

    price: 220,

    image: 'assets/products/hoodie.jpg',

    sizes: [
      'S',
      'M',
      'L',
      'XL'
    ]
  },


  {
    id: 'ns-03',

    name: 'Sweat Shirt & Shorts Set',

    price: 195,

    image: 'assets/products/t3.jpg',

    sizes: [
      'S',
      'M',
      'L',
      'XL'
    ]
  },


  {
    id: 'ns-04',

    name: 'Pro Heavyweight Hoodie',

    price: 235,

    image: 'assets/products/HOODIE3.jpg',

    sizes: [
      'M',
      'L',
      'XL',
      'OVERSIZED'
    ]
  },


  {
    id: 'ns-05',

    name: 'Structured Tactical Cap',

    price: 75,

    image: 'assets/products/cap.jpg',

    sizes: [
      'ONE SIZE'
    ]
  },


  {
    id: 'ns-06',

    name: 'Wool Fisherman Beanie',

    price: 65,

    image: 'assets/products/ROYBENS 2 Pack Wool Fisherman Beanies for Men, Knit Short Watch Cap Winter Warm Hats.jpg',

    sizes: [
      'ONE SIZE'
    ]
  },


  {
    id: 'ns-07',

    name: 'Solid Trucker Hat',

    price: 70,

    image: 'assets/products/Men Solid Trucker Hat.jpg',

    sizes: [
      'ONE SIZE'
    ]
  },


  {
    id: 'ns-08',

    name: 'Tactical Bandana',

    price: 45,

    image: 'assets/products/1pc Quick Dry Sports Bandana.jpg',

    sizes: [
      'ONE SIZE'
    ]
  },


  {
    id: 'ns-09',

    name: 'Turban Headwrap',

    price: 50,

    image: 'assets/products/Turban.jpg',

    sizes: [
      'ONE SIZE'
    ]
  }

];


/* =========================================================
   GLOBAL STATE
   ========================================================= */

const frameImages = [];


let currentFrame = 0;

let targetFrame = 0;


let autoPlaying = false;

let autoPlayStarted = false;


let heroContainer = null;

let heroCanvas = null;

let heroCtx = null;


let heroTitleBlock = null;

let heroScrollHint = null;

let stageIndicator = null;


/* =========================================================
   CART
   ========================================================= */

const CART_STORAGE_KEY =
  'nigrum_minimal_cart';


let cart = [];


try {

  cart =
    JSON.parse(
      localStorage.getItem(
        CART_STORAGE_KEY
      )
    ) || [];

} catch (error) {

  cart = [];

}


/* =========================================================
   DOM READY
   ========================================================= */

document.addEventListener(
  'DOMContentLoaded',
  () => {


    /* -------------------------------------------------------
       FIND HERO
       ------------------------------------------------------- */

    heroContainer =
      document.querySelector(
        '.hero-scroll'
      );


    heroCanvas =
      document.querySelector(
        '#hero-canvas'
      );


    /*
       Backup in case the canvas
       does not have the ID.
    */

    if (!heroCanvas) {

      heroCanvas =
        document.querySelector(
          'canvas'
        );
    }


    if (heroCanvas) {

      heroCtx =
        heroCanvas.getContext(
          '2d'
        );
    }


    /* -------------------------------------------------------
       HERO TEXT
       ------------------------------------------------------- */

    heroTitleBlock =

      document.querySelector(
        '.hero-title'
      ) ||

      document.querySelector(
        '.hero-copy'
      ) ||

      document.querySelector(
        '.hero-content'
      );


    heroScrollHint =

      document.querySelector(
        '.hero-scroll-hint'
      ) ||

      document.querySelector(
        '.scroll-hint'
      );


    stageIndicator =

      document.querySelector(
        '.stage-indicator'
      ) ||

      document.querySelector(
        '[data-stage]'
      );


    /* -------------------------------------------------------
       HERO HEIGHT
       ------------------------------------------------------- */

    if (heroContainer) {

      heroContainer.style.height =
        '100vh';

      heroContainer.style.minHeight =
        '100vh';

    }


    /* -------------------------------------------------------
       INITIAL SETUP
       ------------------------------------------------------- */

    setupCanvas();

    setupScrollListener();

    preloadFrames();

    setupNavigation();

    setupCollection();

    setupProductModal();

    setupCart();

    setupIntersectionObserver();

    updateCartUI();


    /*
       Keep the hero writing visible
       from the beginning.
    */

    keepHeroTextVisible();

  }
);


/* =========================================================
   CANVAS SETUP
   ========================================================= */

function setupCanvas() {

  if (
    !heroCanvas ||
    !heroCtx
  ) {

    return;
  }


  const resizeCanvas = () => {


    const rect =
      heroCanvas.getBoundingClientRect();


    const dpr =
      window.devicePixelRatio || 1;


    heroCanvas.width =
      Math.floor(
        rect.width * dpr
      );


    heroCanvas.height =
      Math.floor(
        rect.height * dpr
      );


    heroCtx.setTransform(

      dpr,

      0,

      0,

      dpr,

      0,

      0

    );


    /*
       Redraw the current frame
       after resizing.
    */

    const currentImage =
      frameImages[
        Math.round(
          currentFrame
        )
      ];


    if (currentImage) {

      drawFrame(
        currentImage
      );

    }

  };


  window.addEventListener(
    'resize',
    resizeCanvas
  );


  resizeCanvas();

}


/* =========================================================
   FRAME PATH
   ========================================================= */

function getFramePath(index) {


  const frameNumber =
    String(
      index + 1
    ).padStart(
      3,
      '0'
    );


  return (

    FRAME_PREFIX +

    frameNumber +

    FRAME_EXT

  );

}


/* =========================================================
   PRELOAD ALL FRAMES
   ========================================================= */

function preloadFrames() {


  let loaded =
    0;


  for (
    let i = 0;
    i < TOTAL_FRAMES;
    i++
  ) {


    const img =
      new Image();


    /*
       Prevent browser from
       unnecessarily changing
       the image.
    */

    img.decoding =
      'async';


    img.src =
      getFramePath(i);


    img.onload = () => {


      loaded++;


      frameImages[i] =
        img;


      /*
         First frame appears
         immediately.
      */

      if (i === 0) {


        drawFrame(
          img
        );


        /*
           Start animation immediately
           after the first frame loads.
        */

        startAutoPlay();

      }

    };


    img.onerror = () => {


      console.warn(

        'Could not load frame:',

        getFramePath(i)

      );

    };

  }

}


/* =========================================================
   DRAW FRAME
   ========================================================= */

function drawFrame(img) {


  if (

    !img ||

    !heroCanvas ||

    !heroCtx

  ) {

    return;

  }


  const canvasWidth =
    heroCanvas.clientWidth;


  const canvasHeight =
    heroCanvas.clientHeight;


  if (

    !canvasWidth ||

    !canvasHeight

  ) {

    return;

  }


  /*
     Clear previous frame.
  */

  heroCtx.clearRect(

    0,

    0,

    canvasWidth,

    canvasHeight

  );


  /*
     Keep the original
     aspect ratio.
  */

  const imageRatio =

    img.naturalWidth /

    img.naturalHeight;


  const canvasRatio =

    canvasWidth /

    canvasHeight;


  let drawWidth;

  let drawHeight;


  if (
    imageRatio > canvasRatio
  ) {


    drawHeight =
      canvasHeight;


    drawWidth =
      drawHeight *
      imageRatio;


  } else {


    drawWidth =
      canvasWidth;


    drawHeight =
      drawWidth /
      imageRatio;

  }


  const x =

    (
      canvasWidth -
      drawWidth
    ) / 2;


  const y =

    (
      canvasHeight -
      drawHeight
    ) / 2;


  heroCtx.drawImage(

    img,

    x,

    y,

    drawWidth,

    drawHeight

  );

}


/* =========================================================
   AUTOMATIC ANIMATION
   ========================================================= */

function startAutoPlay() {


  /*
     Prevent the animation from
     accidentally starting twice.
  */

  if (autoPlayStarted) {

    return;

  }


  autoPlayStarted =
    true;


  autoPlaying =
    true;


  /*
     IMPORTANT:

     This starting point NEVER resets
     when the animation reaches the end.

     The modulo calculation below
     creates a seamless continuous loop.
  */

  const startTime =
    performance.now();


  function animate(now) {


    if (!autoPlaying) {

      return;

    }


    /*
       Calculate where we are
       inside the current loop.

       When elapsed reaches 9000ms:

       9000 % 9000 = 0

       So the next frame starts
       immediately from frame 1.

       NO DELAY.
    */

    const elapsed =

      (
        now -
        startTime
      ) %
      AUTO_PLAY_DURATION;


    const progress =

      elapsed /
      AUTO_PLAY_DURATION;


    /*
       Direct linear frame movement.

       This prevents the animation
       from slowing down at the end
       before restarting.

       Therefore:

       001 → 002 → 003 → ... → 083
       → 001 → 002 → 003 → ...

       continuously.
    */

    targetFrame =

      progress *
      (TOTAL_FRAMES - 1);


    /*
       Keep ALL hero writing
       permanently visible.
    */

    keepHeroTextVisible();


    /*
       Update stage indicator.
    */

    updateStageIndicator(
      progress
    );


    requestAnimationFrame(
      animate
    );

  }


  requestAnimationFrame(
    animate
  );

}


/* =========================================================
   HERO TEXT — ALWAYS VISIBLE
   ========================================================= */

function keepHeroTextVisible() {


  /*
     MAIN HERO WRITING
  */

  if (heroTitleBlock) {


    heroTitleBlock.style.opacity =
      '1';


    heroTitleBlock.style.visibility =
      'visible';


    heroTitleBlock.style.display =
      'block';


    /*
       Do NOT allow JavaScript
       to move the writing away.
    */

    heroTitleBlock.style.transform =
      'translate(-50%, -50%)';

  }


  /*
     SCROLL TO EXPLORE
  */

  if (heroScrollHint) {


    heroScrollHint.style.opacity =
      '1';


    heroScrollHint.style.visibility =
      'visible';


    heroScrollHint.style.display =
      'block';

  }

}


/* =========================================================
   STAGE INDICATOR
   ========================================================= */

function updateStageIndicator(
  progress
) {


  if (!stageIndicator) {

    return;

  }


  stageIndicator.classList.add(
    'visible'
  );


  const frameIdx =

    Math.round(

      progress *
      (TOTAL_FRAMES - 1)

    );


  let matchedStage =
    STAGES[0].name;


  for (
    let s = 0;
    s < STAGES.length;
    s++
  ) {


    if (

      frameIdx >=
      STAGES[s].range[0] &&

      frameIdx <=
      STAGES[s].range[1]

    ) {


      matchedStage =
        STAGES[s].name;


      break;

    }

  }


  if (

    stageIndicator.textContent !==
    matchedStage

  ) {


    stageIndicator.textContent =
      matchedStage;

  }

}


/* =========================================================
   FRAME RENDER LOOP
   ========================================================= */

function render() {


  /*
     Smooth movement toward
     the target frame.

     This keeps the animation
     visually smooth.
  */

  currentFrame +=

    (
      targetFrame -
      currentFrame
    ) *
    0.18;


  /*
     Make sure the frame number
     stays inside the valid range.
  */

  if (
    currentFrame < 0
  ) {

    currentFrame = 0;

  }


  if (
    currentFrame >
    TOTAL_FRAMES - 1
  ) {

    currentFrame =
      TOTAL_FRAMES - 1;

  }


  const frameIndex =

    Math.round(
      currentFrame
    );


  const frame =
    frameImages[frameIndex];


  if (frame) {

    drawFrame(
      frame
    );

  }


  requestAnimationFrame(
    render
  );

}


/*
   Start the visual renderer.
*/

requestAnimationFrame(
  render
);


/* =========================================================
   SCROLL
   ========================================================= */

/*
   IMPORTANT:

   SCROLL DOES NOT CONTROL
   THE VIDEO.

   The animation continues playing
   regardless of scrolling.

   Scrolling only moves the visitor
   through the website.
*/

function setupScrollListener() {


  window.addEventListener(

    'scroll',

    () => {


      /*
         Keep writing permanently visible.
      */

      keepHeroTextVisible();


    },

    {
      passive: true
    }

  );

}


/* =========================================================
   NAVIGATION
   ========================================================= */

function setupNavigation() {


  const navLinks =

    document.querySelectorAll(
      'a[href^="#"]'
    );


  navLinks.forEach(
    link => {


      link.addEventListener(

        'click',

        event => {


          const href =
            link.getAttribute(
              'href'
            );


          if (

            !href ||

            href === '#'

          ) {

            return;

          }


          const target =

            document.querySelector(
              href
            );


          if (!target) {

            return;

          }


          event.preventDefault();


          target.scrollIntoView({

            behavior:
              'smooth',

            block:
              'start'

          });

        }

      );

    }
  );

}


/* =========================================================
   COLLECTION
   ========================================================= */

function setupCollection() {


  const collection =

    document.querySelector(
      '#collection'
    );


  if (!collection) {

    return;

  }


  const productGrid =

    collection.querySelector(
      '.product-grid'
    );


  if (!productGrid) {

    return;

  }


  /*
     Clear existing products
     before rebuilding.
  */

  productGrid.innerHTML =
    '';


  PRODUCTS.forEach(
    product => {


      const card =

        createProductCard(
          product
        );


      productGrid.appendChild(
        card
      );

    }
  );

}


/* =========================================================
   PRODUCT CARD
   ========================================================= */

function createProductCard(
  product
) {


  const card =

    document.createElement(
      'article'
    );


  card.className =
    'product-card';


  card.dataset.productId =
    product.id;


  card.innerHTML = `

    <button
      class="product-image-button"
      type="button"
      aria-label="View ${product.name}"
    >

      <div class="product-image-wrap">

        <img
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
        >

        <span class="product-view">
          VIEW
        </span>

      </div>

    </button>


    <div class="product-info">

      <h3>
        ${product.name}
      </h3>

      <p>
        $${product.price}
      </p>

    </div>

  `;


  const button =

    card.querySelector(
      '.product-image-button'
    );


  if (button) {


    button.addEventListener(

      'click',

      () => {

        openProductModal(
          product.id
        );

      }

    );

  }


  return card;

}


/* =========================================================
   PRODUCT MODAL
   ========================================================= */

let productModal =
  null;


function setupProductModal() {


  productModal =

    document.querySelector(
      '#product-modal'
    );


  if (!productModal) {

    return;

  }


  const closeButtons =

    productModal.querySelectorAll(
      '[data-close-modal]'
    );


  closeButtons.forEach(
    button => {


      button.addEventListener(

        'click',

        closeProductModal

      );

    }
  );


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


  document.addEventListener(

    'keydown',

    event => {


      if (
        event.key ===
        'Escape'
      ) {


        closeProductModal();

      }

    }

  );

}


/* =========================================================
   OPEN PRODUCT MODAL
   ========================================================= */

function openProductModal(
  productId
) {


  const product =

    PRODUCTS.find(

      item =>
        item.id ===
        productId

    );


  if (
    !product ||
    !productModal
  ) {

    return;

  }


  const image =

    productModal.querySelector(
      '[data-product-image]'
    );


  const name =

    productModal.querySelector(
      '[data-product-name]'
    );


  const price =

    productModal.querySelector(
      '[data-product-price]'
    );


  const description =

    productModal.querySelector(
      '[data-product-description]'
    );


  const sizeContainer =

    productModal.querySelector(
      '[data-product-sizes]'
    );


  if (image) {


    image.src =
      product.image;


    image.alt =
      product.name;

  }


  if (name) {


    name.textContent =
      product.name;

  }


  if (price) {


    price.textContent =
      `$${product.price}`;

  }


  if (description) {


    description.textContent =
      'A considered Nigrum Stare piece shaped by precision, individuality and edge.';

  }


  if (sizeContainer) {


    sizeContainer.innerHTML =
      '';


    product.sizes.forEach(

      size => {


        const button =

          document.createElement(
            'button'
          );


        button.type =
          'button';


        button.className =
          'size-option';


        button.textContent =
          size;


        button.dataset.size =
          size;


        button.addEventListener(

          'click',

          () => {


            sizeContainer
              .querySelectorAll(
                '.size-option'
              )
              .forEach(

                item =>

                  item.classList.remove(
                    'selected'
                  )

              );


            button.classList.add(
              'selected'
            );

          }

        );


        sizeContainer.appendChild(
          button
        );

      }

    );

  }


  const addButton =

    productModal.querySelector(
      '[data-add-to-cart]'
    );


  if (addButton) {


    addButton.onclick = () => {


      const selectedSize =

        sizeContainer

          ? sizeContainer.querySelector(
              '.size-option.selected'
            )

          : null;


      const size =

        selectedSize

          ? selectedSize.dataset.size

          : product.sizes[0];


      addToCart(
        product,
        size
      );


      closeProductModal();

    };

  }


  productModal.classList.add(
    'open'
  );


  document.body.classList.add(
    'modal-open'
  );

}


/* =========================================================
   CLOSE PRODUCT MODAL
   ========================================================= */

function closeProductModal() {


  if (!productModal) {

    return;

  }


  productModal.classList.remove(
    'open'
  );


  document.body.classList.remove(
    'modal-open'
  );

}


/* =========================================================
   CART
   ========================================================= */

function setupCart() {


  const cartButton =

    document.querySelector(
      '[data-cart]'
    );


  const cartClose =

    document.querySelector(
      '[data-close-cart]'
    );


  if (cartButton) {


    cartButton.addEventListener(
      'click',
      openCart
    );

  }


  if (cartClose) {


    cartClose.addEventListener(
      'click',
      closeCart
    );

  }


  const checkoutButton =

    document.querySelector(
      '[data-checkout]'
    );


  if (checkoutButton) {


    checkoutButton.addEventListener(
      'click',
      checkout
    );

  }


  const cartDrawer =

    document.querySelector(
      '#cart-drawer'
    );


  if (cartDrawer) {


    cartDrawer.addEventListener(

      'click',

      event => {


        if (
          event.target ===
          cartDrawer
        ) {


          closeCart();

        }

      }

    );

  }

}


/* =========================================================
   ADD TO CART
   ========================================================= */

function addToCart(
  product,
  size
) {


  const existing =

    cart.find(

      item =>

        item.id ===
        product.id &&

        item.size ===
        size

    );


  if (existing) {


    existing.quantity +=
      1;


  } else {


    cart.push({

      id:
        product.id,

      name:
        product.name,

      price:
        product.price,

      image:
        product.image,

      size:
        size,

      quantity:
        1

    });

  }


  saveCart();


  updateCartUI();


  showToast(
    `${product.name} added to cart`
  );

}


/* =========================================================
   SAVE CART
   ========================================================= */

function saveCart() {


  try {


    localStorage.setItem(

      CART_STORAGE_KEY,

      JSON.stringify(
        cart
      )

    );


  } catch (error) {


    console.warn(

      'Could not save cart:',

      error

    );

  }

}


/* =========================================================
   CART UI
   ========================================================= */

function updateCartUI() {


  const cartItems =

    document.querySelector(
      '[data-cart-items]'
    );


  const cartCount =

    document.querySelectorAll(
      '[data-cart-count]'
    );


  const cartTotal =

    document.querySelector(
      '[data-cart-total]'
    );


  const totalQuantity =

    cart.reduce(

      (total, item) =>

        total +
        item.quantity,

      0

    );


  cartCount.forEach(

    element => {


      element.textContent =
        totalQuantity;

    }

  );


  if (cartItems) {


    cartItems.innerHTML =
      '';


    if (cart.length === 0) {


      cartItems.innerHTML = `

        <p class="cart-empty">
          YOUR CART IS EMPTY.
        </p>

      `;


    } else {


      cart.forEach(

        item => {


          const cartItem =

            document.createElement(
              'div'
            );


          cartItem.className =
            'cart-item';


          cartItem.innerHTML = `

            <img
              src="${item.image}"
              alt="${item.name}"
            >

            <div class="cart-item-info">

              <h4>
                ${item.name}
              </h4>

              <p>
                Size: ${item.size}
              </p>

              <p>
                $${item.price}
              </p>

              <div class="cart-item-actions">

                <button
                  type="button"
                  data-cart-minus="${item.id}"
                  data-cart-size="${item.size}"
                >
                  −
                </button>

                <span>
                  ${item.quantity}
                </span>

                <button
                  type="button"
                  data-cart-plus="${item.id}"
                  data-cart-size="${item.size}"
                >
                  +
                </button>

                <button
                  type="button"
                  data-cart-remove="${item.id}"
                  data-cart-size="${item.size}"
                >
                  REMOVE
                </button>

              </div>

            </div>

          `;


          cartItems.appendChild(
            cartItem
          );

        }

      );


      setupCartItemButtons();

    }

  }


  if (cartTotal) {


    const total =

      cart.reduce(

        (sum, item) =>

          sum +
          (
            item.price *
            item.quantity
          ),

        0

      );


    cartTotal.textContent =
      `$${total.toFixed(2)}`;

  }

}


/* =========================================================
   CART ITEM BUTTONS
   ========================================================= */

function setupCartItemButtons() {


  document

    .querySelectorAll(
      '[data-cart-plus]'
    )

    .forEach(

      button => {


        button.addEventListener(

          'click',

          () => {


            changeCartQuantity(

              button.dataset.cartPlus,

              button.dataset.cartSize,

              1

            );

          }

        );

      }

    );


  document

    .querySelectorAll(
      '[data-cart-minus]'
    )

    .forEach(

      button => {


        button.addEventListener(

          'click',

          () => {


            changeCartQuantity(

              button.dataset.cartMinus,

              button.dataset.cartSize,

              -1

            );

          }

        );

      }

    );


  document

    .querySelectorAll(
      '[data-cart-remove]'
    )

    .forEach(

      button => {


        button.addEventListener(

          'click',

          () => {


            removeFromCart(

              button.dataset.cartRemove,

              button.dataset.cartSize

            );

          }

        );

      }

    );

}


/* =========================================================
   CHANGE CART QUANTITY
   ========================================================= */

function changeCartQuantity(
  productId,
  size,
  change
) {


  const item =

    cart.find(

      cartItem =>

        cartItem.id ===
        productId &&

        cartItem.size ===
        size

    );


  if (!item) {

    return;

  }


  item.quantity +=
    change;


  if (
    item.quantity <= 0
  ) {


    cart =

      cart.filter(

        cartItem =>

          !(
            cartItem.id ===
            productId &&

            cartItem.size ===
            size
          )

      );

  }


  saveCart();


  updateCartUI();

}


/* =========================================================
   REMOVE FROM CART
   ========================================================= */

function removeFromCart(
  productId,
  size
) {


  cart =

    cart.filter(

      item =>

        !(
          item.id ===
          productId &&

          item.size ===
          size
        )

    );


  saveCart();


  updateCartUI();

}


/* =========================================================
   OPEN CART
   ========================================================= */

function openCart() {


  const cartDrawer =

    document.querySelector(
      '#cart-drawer'
    );


  if (!cartDrawer) {

    return;

  }


  cartDrawer.classList.add(
    'open'
  );


  document.body.classList.add(
    'cart-open'
  );

}


/* =========================================================
   CLOSE CART
   ========================================================= */

function closeCart() {


  const cartDrawer =

    document.querySelector(
      '#cart-drawer'
    );


  if (!cartDrawer) {

    return;

  }


  cartDrawer.classList.remove(
    'open'
  );


  document.body.classList.remove(
    'cart-open'
  );

}


/* =========================================================
   CHECKOUT
   ========================================================= */

function checkout() {


  if (cart.length === 0) {


    showToast(
      'Your cart is empty'
    );


    return;

  }


  /*
     PAYSTACK
  */

  window.location.href =
    'https://paystack.shop/pay/yw9q-sw7y7';

}


/* =========================================================
   INTERSECTION OBSERVER
   ========================================================= */

function setupIntersectionObserver() {


  const elements =

    document.querySelectorAll(
      '[data-reveal]'
    );


  if (

    !elements.length ||

    !(
      'IntersectionObserver'
      in window
    )

  ) {

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


              entry.target.classList.add(
                'is-visible'
              );


              observer.unobserve(
                entry.target
              );

            }

          }

        );

      },

      {
        threshold: 0.15
      }

    );


  elements.forEach(

    element =>

      observer.observe(
        element
      )

  );

}


/* =========================================================
   SMOOTH SCROLL
   ========================================================= */

document.addEventListener(

  'click',

  event => {


    const link =

      event.target.closest(
        'a[href^="#"]'
      );


    if (!link) {

      return;

    }


    const href =

      link.getAttribute(
        'href'
      );


    if (

      !href ||

      href === '#'

    ) {

      return;

    }


    const target =

      document.querySelector(
        href
      );


    if (!target) {

      return;

    }


    event.preventDefault();


    target.scrollIntoView({

      behavior:
        'smooth',

      block:
        'start'

    });

  }

);


/* =========================================================
   TOAST
   ========================================================= */

function showToast(
  message
) {


  let toast =

    document.querySelector(
      '.ns-toast'
    );


  if (!toast) {


    toast =
      document.createElement(
        'div'
      );


    toast.className =
      'ns-toast';


    document.body.appendChild(
      toast
    );

  }


  toast.textContent =
    message;


  toast.classList.add(
    'show'
  );


  clearTimeout(
    toast._timeout
  );


  toast._timeout =

    setTimeout(

      () => {


        toast.classList.remove(
          'show'
        );


      },

      2500

    );

}


/* =========================================================
   FINAL INITIALIZATION
   ========================================================= */

window.addEventListener(

  'load',

  () => {


    /*
       Keep hero text visible.
    */

    keepHeroTextVisible();


    /*
       If frames haven't started loading,
       start loading them again.
    */

    if (
      frameImages.length === 0
    ) {


      preloadFrames();

    }

  }

);
