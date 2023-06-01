// window.addEventListener('DOMContentLoaded',function(){

// })

// ハンバーガーメニュー
$(function () {
  $(".js-hamburger").click(function () {
    $(".js-hamburger").toggleClass("is-active");
    $(".js-drawer").toggleClass("is-active");
    $("body").toggleClass("is-fixed");
  });

  $(".drawer__link").click(function () {
    $(".js-hamburger").removeClass("is-active");
    $(".js-drawer").removeClass("is-active");
    $("body").removeClass("is-fixed");
  });

  $(".drawer__logo").click(function () {
    $(".js-hamburger").removeClass("is-active");
    $(".js-drawer").removeClass("is-active");
    $("body").removeClass("is-fixed");
  });
});

// アコーディオン
window.addEventListener("load", function () {
  // スライドできるようにする関数--------------
  // slideUp
  function slideUp(el, duration = 500) {
    el.style.height = el.offsetHeight + "px";
    el.offsetHeight;
    el.style.transitionProperty = "height, margin, padding";
    el.style.transitionDuration = duration + "ms";
    el.style.transitionTimingFunction = "ease";
    el.style.overflow = "hidden";
    el.style.height = 0;
    el.style.paddingTop = 0;
    el.style.paddingBottom = 0;
    el.style.marginTop = 0;
    el.style.marginBottom = 0;
    setTimeout(() => {
      el.style.display = "none";
      el.style.removeProperty("height");
      el.style.removeProperty("padding-top");
      el.style.removeProperty("padding-bottom");
      el.style.removeProperty("margin-top");
      el.style.removeProperty("margin-bottom");
      el.style.removeProperty("overflow");
      el.style.removeProperty("transition-duration");
      el.style.removeProperty("transition-property");
      el.style.removeProperty("transition-timing-function");
    }, duration);
  }

  // slideDown
  function slideDown(el, duration = 500) {
    el.style.removeProperty("display");
    let display = window.getComputedStyle(el).display;
    if (display === "none") {
      display = "flex";
    }
    el.style.display = display;
    let height = el.offsetHeight;
    el.style.overflow = "hidden";
    el.style.height = 0;
    el.style.paddingTop = 0;
    el.style.paddingBottom = 0;
    el.style.marginTop = 0;
    el.style.marginBottom = 0;
    el.offsetHeight;
    el.style.transitionProperty = "height, margin, padding";
    el.style.transitionDuration = duration + "ms";
    el.style.transitionTimingFunction = "ease";
    el.style.height = height + "px";
    el.style.removeProperty("padding-top");
    el.style.removeProperty("padding-bottom");
    el.style.removeProperty("margin-top");
    el.style.removeProperty("margin-bottom");
    setTimeout(() => {
      el.style.removeProperty("height");
      el.style.removeProperty("overflow");
      el.style.removeProperty("transition-duration");
      el.style.removeProperty("transition-property");
      el.style.removeProperty("transition-timing-function");
    }, duration);
  }

  // slideToggle
  function slideToggle(el, duration = 500) {
    if (window.getComputedStyle(el).display === "none") {
      return slideDown(el, duration);
    } else {
      return slideUp(el, duration);
    }
  }

  // ----------------------

  // 同じ階層(並列or兄弟)の要素全て取得する関数-------
  function getSiblings(e) {
    // for collecting siblings
    let siblings = [];
    // if no parent, return no sibling
    if (!e.parentNode) {
      return siblings;
    }
    // first child of the parent node
    let sibling = e.parentNode.firstChild;

    // collecting siblings
    while (sibling) {
      if (sibling.nodeType === 1 && sibling !== e) {
        siblings.push(sibling);
      }
      sibling = sibling.nextSibling;
    }
    return siblings;
  }

  // ---------------------

  //親要素の同じ階層の要素すべて取得する関数--------
  function getParents(element) {
    var parent = element.parentNode;
    // 親要素の兄弟要素（ひとつめクリックしたら二つ目三つ目の親要素）を取得（叔母ポジ）
    return getSiblings(parent);
  }

  // ---------------------

  // タイトル３つとも取得
  var accordionTitle = document.querySelectorAll(".faq__question");
  // コンテンツ３つとも取得
  var accordionContent = document.querySelectorAll(".faq__answer");
  // それぞれのタイトルにインデックス番号をつける
  accordionTitle.forEach((accordionTitle) => {
    accordionTitle.addEventListener("click", function () {
      // クリックしたものに対してプラスマイナスの付け替え
      accordionTitle.classList.toggle("is-active");
      // タイトルの兄弟要素であるコンテンツをスライドして表示
      slideToggle(accordionTitle.nextElementSibling);

      // 常に開いているアコーディオンは一つの状態に保つ-------
      var accordionItems = getParents(accordionTitle);
      accordionItems.forEach((accordionItem) => {
        // ターゲットとなるタイトルとコンテンツをそれぞれ取得
        var targetTitle = accordionItem.querySelector(".faq__question");
        var targetContent = accordionItem.querySelector(".faq__answer");
        // コンテンツをスライドして隠す
        slideUp(targetContent);
        // ターゲットのプラスをマイナスに切り替え
        targetTitle.classList.remove("is-active");
      });
    });
  });

  // -----------------
});

// スワイパー
const swiper = new Swiper(".work__swiper", {
  loop: true,
  spaceBetween: 64,
  slidesPerView: 1.5,
  centeredSlides: true,
  centeredSlidesBounds: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    769: {
      loop: true,
      slidesPerGroup: 3,
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1201: {
      spaceBetween: 30,
      slidesPerGroup: 3,
      slidesPerView: 3,
    },
  },
});
