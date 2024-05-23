/**
 * website.ts Common Script File
 *
 * @project yii2
 * @company Codendot <https://codendot.com>
 * @author Jawdat Sobh <jawdat@codendot.com>
 * @since Monday, July 10, 2023 at 11:49 AM GMT+3
 *
 */

import "@scss/tiers/website/website.scss";
import "@/native";
import Swiper from 'swiper';
import { Navigation, Autoplay, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import $ from "jquery";
import AOS from 'aos';
import 'aos/dist/aos.css';
declare var window: any;


(() => {


	function main() {
		// prevent();
		// activeLinks();
		AOS.init();
		swiper();
		carouselChanging();
		detailCarousel();
		slidewidth();
		// filter();
	}

	document.addEventListener("readystatechange", async (event: any) => {
		if (event.target.readyState === 'complete') {
			// (await import("@/modules/theme"))?.initTheme?.()
			main()
		}
	})
	// function prevent() {
	// 	const select = document.querySelector("select");
	// 	console.log('added');
	// 	if (select != null) {
	// 		select.onchange = (event) => {
	// 			console.log('event');
	// 			event.preventDefault();
	// 			if (select.selectedIndex !== 0) {
	// 				event.preventDefault();
	// 				select.value = select.options[select.selectedIndex].value;
	// 				window.location.href = select.value;
	// 			}
	// 		};
	// 	}
	// }

	function swiper() {
		const swiper = new Swiper('.swiper', {
			modules: [Navigation, Autoplay, Pagination],
			direction: 'horizontal',
			// centeredSlides: true,
			// centeredSlidesBounds: true,
			breakpoints: {
				300: {
					slidesPerView: 4,
					spaceBetween: 10,
				},
				640: {
					slidesPerView: 4,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 6,
					spaceBetween: 20,
				},
				1024: {
					slidesPerView: 8,
					spaceBetween: 20,
				},
				1366: {
					slidesPerView: 8,
					spaceBetween: 20,
				},
			},
			// autoplay: {
			// 	delay: 4000,
			// 	disableOnInteraction: false,
			// },
			// speed: 1200,
			// loop: true,
			slidesOffsetAfter: 10,
			slidesOffsetBefore: 10,
			// If we need pagination
			pagination: {
				el: '.swiper-pagination',
			},

			// Navigation arrows
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},

			// And if we need scrollbar
			scrollbar: {
				el: '.swiper-scrollbar',
			},
		});

		swiper.on('slideChange', function () {
			let lastVisibleSlideIndex = swiper.activeIndex + swiper.params.slidesPerView - 1;
			let lastVisibleSlide = swiper.slides[lastVisibleSlideIndex];
			lastVisibleSlide.addEventListener('click', function () {
				swiper.slideNext();
			});
		});

	}

	function carouselChanging() {
		$(document).ready(function () {
			var currentImageIndex = 0;
			var totalImages = $('.carousel .card-product').length;
			var intervalId;

			function changeImage(directionOrIndex) {
				var nextImageIndex;
				if (typeof directionOrIndex === 'number') {
					nextImageIndex = directionOrIndex;
				} else if (directionOrIndex === 'prev') {
					nextImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
				} else {
					nextImageIndex = (currentImageIndex + 1) % totalImages;
				}

				var $currentImage = $('.carousel .card-product').eq(currentImageIndex);
				var $nextImage = $('.carousel .card-product').eq(nextImageIndex);

				$currentImage.fadeOut('slow', function () {
					$currentImage.removeClass('active');
					$nextImage.addClass('active').hide().fadeIn('slow');
					currentImageIndex = nextImageIndex;
					updateActiveDot();
				});
			}

			function startCarousel() {
				intervalId = setInterval(function () {
					changeImage('next');
				}, 5000);
			}

			function stopCarousel() {
				clearInterval(intervalId);
			}

			$('.carousel-dot').eq(currentImageIndex).addClass('active');

			$('.carousel-dot').on('click', function () {
				var dotIndex = $(this).data('index');
				if (dotIndex !== currentImageIndex) {
					stopCarousel();
					changeImage(dotIndex);
					startCarousel();
				}
			});

			$('#prev-button').on('click', function () {
				stopCarousel();
				changeImage('prev');
				startCarousel();
			});

			$('#next-button').on('click', function () {
				stopCarousel();
				changeImage('next');
				startCarousel();
			});

			function updateActiveDot() {
				$('.carousel-dot').removeClass('active');
				$('.carousel-dot').eq(currentImageIndex).addClass('active');
			}

			$('.carousel .card-product').eq(currentImageIndex).addClass('active');
			startCarousel();
		});
	}

	function detailCarousel() {
		$(document).ready(function () {
			var currentIndex = 0;
			// var images = [{% for image in content.gallery %}"{{ image.url }}",{% endfor %}];
			var images = window.carouselImages;

			$(".project-image").on("click", function () { });

			$(".gallery-image").on("click", function () {
				$(".gallery-image").removeClass("selected");
				$(this).addClass("selected");

				$(".project-image img").fadeOut(500, function () {
					var newImageSrc = images[currentIndex];
					$(".project-image img").attr("src", newImageSrc);

					$(".project-image img").fadeIn(500);
				});

				currentIndex = $(".gallery-image").index(this);
			});

			function changeImage(direction) {
				if (direction === 'next') {
					currentIndex = (currentIndex + 1) % images.length;
				} else if (direction === 'prev') {
					currentIndex = (currentIndex - 1 + images.length) % images.length;
				}

				$(".project-image img").fadeOut(500, function () {
					var newImageSrc = images[currentIndex];
					$(".project-image img").attr("src", newImageSrc);

					$(".project-image img").fadeIn(500);
				});

				$(".gallery-image").removeClass("selected");
				$(".gallery-image").eq(currentIndex).addClass("selected");
			}

			$(".carousel-control-prev").on("click", function () {
				changeImage('prev');
			});

			$(".carousel-control-next").on("click", function () {
				changeImage('next');
			});
		});
	}

	function slidewidth() {
		function adjustSwiper(galleryLength, viewportWidth) {
			var swiperElement = document.getElementById('mySwiper');
			var slides = swiperElement?.querySelectorAll('.swiper-slide');
			if (slides) {
				if (galleryLength <= 7 && viewportWidth > 767) {
					swiperElement?.setAttribute('style', 'width: fit-content !important');
					for (var i = 0; i < slides.length; i++) {
						slides[i].classList.add('swiper-slide-custom');
					}
				} else {
					swiperElement?.setAttribute('style', 'width: 100% !important');
					for (var i = 0; i < slides.length; i++) {
						slides[i].classList.remove('swiper-slide-custom');
					}
				}
			}
		}
		window.onload = function () {
			var galleryLength = window.categoryLengths;
			var viewportWidth = window.innerWidth;

			adjustSwiper(galleryLength, viewportWidth);

			var mql = window.matchMedia('(max-width: 767px)');
			function handleViewportChange(e) {
				adjustSwiper(galleryLength, e.matches ? 767 : window.innerWidth);
			}
			mql.addEventListener('change', handleViewportChange);
		}
	}
	function scrollTo() {
		document.querySelectorAll('.scroll-to').forEach((a) => {
			a.addEventListener('click', (e) => {
				const elementId = a.getAttribute('href').split('#')[1];
				const element = document.getElementById(elementId);
				if (element) {
					e.preventDefault();
					element.scrollIntoView({ behavior: 'smooth' });
				}
			})
		})
	}
})()


// function filter() {
// 	function filterProjects(event, categoryId) {
// 		event.preventDefault();
// 		fetch(`/Projects?cid=${categoryId}`)
// 			.then(response => response.text()) // Get the response as text
// 			.then(html => {
// 				// Replace the entire content of the 'project-section' div with the new HTML
// 				const projectSection = document.querySelector('.project-section');
// 				projectSection.innerHTML = html;
// 			});
// 	}
// }


