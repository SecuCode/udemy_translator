/* ============================================
   메타자산운용 리브랜딩 프레젠테이션 - 메인 스크립트
   ============================================ */

(function () {
  'use strict';

  var TOTAL_SLIDES = 15;
  var currentSlide = 0;
  var isTransitioning = false;
  var TRANSITION_DURATION = 900;

  // DOM Elements
  var slidesContainer = document.querySelector('.slides-container');
  var slides = document.querySelectorAll('.slide');
  var progressBar = document.querySelector('.progress-bar');
  var navDots = document.querySelectorAll('.nav-dot');
  var counterCurrent = document.querySelector('.slide-counter .current');
  var loadingScreen = document.querySelector('.loading-screen');

  // ---- Initialize ----
  function init() {
    createParticles();
    goToSlide(0, false);

    // Hide loading screen
    setTimeout(function () {
      if (loadingScreen) {
        loadingScreen.classList.add('hidden');
      }
    }, 2000);

    // Event Listeners
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeydown);
    setupNavDots();
    setupTouchEvents();
  }

  // ---- Particles for Slide 1 ----
  function createParticles() {
    var particlesContainer = document.querySelector('.particles');
    if (!particlesContainer) return;

    for (var i = 0; i < 40; i++) {
      var particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDuration = (Math.random() * 8 + 6) + 's';
      particle.style.animationDelay = (Math.random() * 8) + 's';
      particle.style.width = (Math.random() * 3 + 1) + 'px';
      particle.style.height = particle.style.width;
      particlesContainer.appendChild(particle);
    }
  }

  // ---- Navigation ----
  function goToSlide(index, animate) {
    if (animate === undefined) animate = true;
    if (index < 0 || index >= TOTAL_SLIDES) return;
    if (isTransitioning && animate) return;

    isTransitioning = true;

    // Reset previous slide animations
    var prevSlide = slides[currentSlide];
    if (prevSlide && currentSlide !== index) {
      resetSlideAnimations(prevSlide);
    }

    currentSlide = index;

    // Update slides
    slides.forEach(function (slide, i) {
      slide.classList.toggle('active', i === currentSlide);
    });

    // Update progress bar
    var progress = ((currentSlide + 1) / TOTAL_SLIDES) * 100;
    progressBar.style.width = progress + '%';

    // Update nav dots
    navDots.forEach(function (dot, i) {
      dot.classList.toggle('active', i === currentSlide);
    });

    // Update counter
    var displayNum = (currentSlide + 1).toString().padStart(2, '0');
    counterCurrent.textContent = displayNum;

    // Trigger slide-specific animations
    triggerSlideAnimations(currentSlide);

    setTimeout(function () {
      isTransitioning = false;
    }, animate ? TRANSITION_DURATION : 100);
  }

  function nextSlide() {
    if (currentSlide < TOTAL_SLIDES - 1) {
      goToSlide(currentSlide + 1);
    }
  }

  function prevSlide() {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1);
    }
  }

  // ---- Reset animations for a slide ----
  function resetSlideAnimations(slide) {
    var selectors = [
      '[style*="animation"]',
      '.strength-card', '.trend-item', '.why-point',
      '.meta-letter-block', '.vision-block', '.strategy-side',
      '.effect-card', '.roadmap-phase',
      '.value-card', '.process-step', '.process-connector',
      '.risk-layer', '.risk-metric',
      '.track-highlight', '.chart-bar-group',
      '.people-stat', '.org-dept',
      '.esg-pillar', '.esg-vision',
      '.partner-group', '.partner-node',
      '.ir-channel', '.ir-commitment'
    ];
    var animatedElements = slide.querySelectorAll(selectors.join(', '));
    animatedElements.forEach(function (el) {
      el.style.animation = 'none';
      void el.offsetHeight;
      el.style.animation = '';
    });
  }

  // ---- Trigger slide-specific animations ----
  function triggerSlideAnimations(index) {
    var slide = slides[index];
    if (!slide) return;

    // Track Record slide (index 6) - counter animation
    if (index === 6) {
      setTimeout(function () {
        animateTrackCounters(slide);
      }, 800);
    }

    // Expected Effects slide (index 12) - counter animation
    if (index === 12) {
      setTimeout(function () {
        animateCounters();
      }, 800);
    }

    // Track Record slide (index 6) - animate chart bars
    if (index === 6) {
      setTimeout(function () {
        animateChartBars(slide);
      }, 600);
    }
  }

  // ---- Counter Animation for Effects slide ----
  function animateCounters() {
    var counters = document.querySelectorAll('.effect-value[data-count]');
    counters.forEach(function (counter) {
      var target = parseInt(counter.getAttribute('data-count'), 10);
      var suffix = counter.getAttribute('data-suffix') || '';
      var prefix = counter.getAttribute('data-prefix') || '';
      var duration = 2000;
      var startTime = null;

      function updateCounter(timestamp) {
        if (!startTime) startTime = timestamp;
        var elapsed = timestamp - startTime;
        var progress = Math.min(elapsed / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        var current = Math.floor(eased * target);
        counter.textContent = prefix + current.toLocaleString() + suffix;
        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = prefix + target.toLocaleString() + suffix;
        }
      }
      requestAnimationFrame(updateCounter);
    });
  }

  // ---- Counter Animation for Track Record slide ----
  function animateTrackCounters(slide) {
    var counters = slide.querySelectorAll('.track-value[data-count]');
    counters.forEach(function (counter) {
      var targetStr = counter.getAttribute('data-count');
      var target = parseFloat(targetStr);
      var suffix = counter.getAttribute('data-suffix') || '';
      var hasDecimal = counter.getAttribute('data-decimal');
      var duration = 2000;
      var startTime = null;

      function updateCounter(timestamp) {
        if (!startTime) startTime = timestamp;
        var elapsed = timestamp - startTime;
        var progress = Math.min(elapsed / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        var current = eased * target;
        if (hasDecimal) {
          counter.textContent = current.toFixed(parseInt(hasDecimal, 10)) + suffix;
        } else {
          counter.textContent = Math.floor(current).toLocaleString() + suffix;
        }
        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          if (hasDecimal) {
            counter.textContent = target.toFixed(parseInt(hasDecimal, 10)) + suffix;
          } else {
            counter.textContent = target.toLocaleString() + suffix;
          }
        }
      }
      requestAnimationFrame(updateCounter);
    });
  }

  // ---- Risk bars animation ----
  function animateRiskBars(slide) {
    var fills = slide.querySelectorAll('.metric-fill');
    fills.forEach(function (fill, i) {
      var targetWidth = fill.style.width;
      fill.style.width = '0%';
      fill.style.transition = 'width 1.2s ' + (i * 0.15) + 's cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      requestAnimationFrame(function () {
        fill.style.width = targetWidth;
      });
    });
  }

  // ---- Chart bars animation ----
  function animateChartBars(slide) {
    var fills = slide.querySelectorAll('.chart-bar-fill');
    fills.forEach(function (fill, i) {
      var targetWidth = fill.style.width;
      fill.style.width = '0%';
      fill.style.transition = 'width 1s ' + (i * 0.12) + 's cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      requestAnimationFrame(function () {
        fill.style.width = targetWidth;
      });
    });
  }

  // ---- Event Handlers ----
  function handleWheel(e) {
    e.preventDefault();
    if (isTransitioning) return;

    if (e.deltaY > 30) {
      nextSlide();
    } else if (e.deltaY < -30) {
      prevSlide();
    }
  }

  function handleKeydown(e) {
    switch (e.key) {
      case 'ArrowDown':
      case 'ArrowRight':
      case ' ':
      case 'PageDown':
        e.preventDefault();
        nextSlide();
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
      case 'PageUp':
        e.preventDefault();
        prevSlide();
        break;
      case 'Home':
        e.preventDefault();
        goToSlide(0);
        break;
      case 'End':
        e.preventDefault();
        goToSlide(TOTAL_SLIDES - 1);
        break;
    }
  }

  function setupNavDots() {
    navDots.forEach(function (dot, index) {
      dot.addEventListener('click', function () {
        goToSlide(index);
      });
    });
  }

  // ---- Touch Events ----
  var touchStartY = 0;
  var touchStartX = 0;

  function setupTouchEvents() {
    document.addEventListener('touchstart', function (e) {
      touchStartY = e.touches[0].clientY;
      touchStartX = e.touches[0].clientX;
    }, { passive: true });

    document.addEventListener('touchend', function (e) {
      var touchEndY = e.changedTouches[0].clientY;
      var touchEndX = e.changedTouches[0].clientX;
      var diffY = touchStartY - touchEndY;
      var diffX = touchStartX - touchEndX;

      if (Math.abs(diffY) > Math.abs(diffX) && Math.abs(diffY) > 50) {
        if (diffY > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    }, { passive: true });
  }

  // ---- Start ----
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
