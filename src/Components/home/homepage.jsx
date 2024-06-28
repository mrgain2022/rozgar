import React from 'react'
import {homecon, servicesBox, event, faq, blog} from '../../Components/home/data'
import constant from "../../constant";
export default function homepage() {
  return (
    <React.Fragment>
      <div className="offcanvas__full">
         <div className="offcanvas__full-wrapper d-flex flex-column justify-content-between">
            <div className="offcanvas__full-inner">
               <div className="offcanvas__close">
                  <button className="offcanvas__full-close-btn offcanvas-close-btn">
                     <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="1">
                        <path d="M31 1L1 31" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1 1L31 31" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        </svg>                                               
                  </button>
               </div>
               <div className="offcanvas__full-content">
                  <div className="mobile-menu fix mb-40 menu-counter d-md-none"></div>
                  <div className="offcanvas__full-menu menu-counter d-none d-md-block">
                     <nav>
                        <ul>
                           <li className="has-dropdown">
                              <a href="home-main.html">Home</a>

                              <ul className="submenu">
                                 <li><a href="home-main.html">Main Home</a></li>
                                 <li><a href="home-portfolio.html">Personal Portfolio</a></li>
                                 <li><a href="home-freelancer.html">Freelancer</a></li>
                              </ul>
                           </li>
                           <li><a href="about.html">About</a></li>
                           <li className="has-dropdown">
                              <a href="services.html">Service</a>
                              <ul className="submenu">
                                 <li><a href="services.html">Classic Style</a></li>
                                 <li><a href="services-2.html">Creative Agency</a></li>
                                 <li><a href="services-3.html">UI Service</a></li>
                              </ul>
                           </li>
                           <li><a href="blog-grid.html">Blog</a></li>
                           <li className="has-dropdown">
                              <a href="portfolio.html">Portfoilo</a>
                              <ul className="submenu">
                                 <li><a href="portfolio.html">Classic Style</a></li>
                                 <li><a href="portfolio-metro.html">Metro Style</a></li>
                                 <li><a href="portfolio-slider.html">Classic Slider</a></li>
                              </ul>
                           </li>
                           <li><a href="contact.html">Contact</a></li>
                        </ul>
                     </nav>
                  </div>
               </div>
            </div>
            <div className="offcanvas__full-footer">
               <div className="row align-items-center">
                  <div className="col-xl-3">
                     <div className="offcanvas__full-link">
                        <a href="policy.html">Privacy Policy</a>
                        <a href="terms.html">Use of terms</a>
                     </div>
                  </div>
                  <div className="col-xl-9 order-first order-xl-last">
                     <div className="offcanvas__full-right d-lg-flex justify-content-xl-end align-items-center">
                        <div className="offcanvas__info d-flex flex-wrap justify-content-lg-end align-items-center">
                           <div className="offcanvas__info-item">
                              <h4 className="offcanvas__info-item-title">Information</h4>
                              <p><a href="tel:964-742-44-763">+964 742 44 763</a></p>
                              <p><a href="mailto:support@harry.com">support@harry.com</a></p>
                           </div>
                           <div className="offcanvas__info-item">
                              <h4 className="offcanvas__info-item-title">Address</h4>
                              <p><a href="https://www.google.com/maps/place/102+Thompson+St,+New+York,+NY+10012,+USA/@40.7255437,-74.004061,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2598c338f691d:0x6d5f394e7a1962cc!8m2!3d40.7255397!4d-74.0018723" target="_blank">32 East Trusel Court <br/> North Tonawanda, NY 14120</a></p>
                           </div>
                        </div>
                        <div className="offcanvas__full-social offcanvas__social-3">
                           <a href="#"><i className="fab fa-facebook-f"></i></a>
                           <a href="#"><i className="fab fa-twitter"></i></a>
                           <a href="#"><i className="fab fa-youtube"></i></a>
                           <a href="#"><i className="fab fa-linkedin"></i></a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="body-overlay"></div>
      
      <div className="search__popup">
         <div className="container">
            <div className="row">
               <div className="col-xxl-12">
                  <div className="search__wrapper">
                     <div className="search__top d-flex justify-content-between align-items-center">
                        <div className="search__logo">
                           <a href="home-main.html">
                              <img src="assets/img/logo/logo.svg" alt=""/>
                           </a>
                        </div>
                        <div className="search__close">
                           <button type="button" className="search__close-btn search-close-btn">
                              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M17 1L1 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                 <path d="M1 1L17 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>                                 
                           </button>
                        </div>
                     </div>
                     <div className="search__form">
                        <form action="#">
                           <div className="search__input">
                              <input className="search-input-field" type="text" placeholder="Type here to search..."/>
                              <span className="search-focus-border"></span>
                              <button type="submit">
                                 <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.55 18.1C14.272 18.1 18.1 14.272 18.1 9.55C18.1 4.82797 14.272 1 9.55 1C4.82797 1 1 4.82797 1 9.55C1 14.272 4.82797 18.1 9.55 18.1Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M19.0002 19.0002L17.2002 17.2002" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                 </svg> 
                              </button>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      
      <div className="newsletter__area newsletter-popup">
         <div className="newsletter__wrapper">
            <div className="newsletter__close">
               <button type="button" className="newsletter__close-btn newsletter-close-btn">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M17 1L1 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                     <path d="M1 1L17 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>                     
               </button>
            </div>
            <div className="newsletter__thumb include-bg" data-background="assets/img/newsletter/newsletter-1.jpg"></div>
            <h3 className="newsletter__title">Keep up with our daily and weekly newsletters</h3>

            <form action="#">
               <div className="newsletter__input">
                  <input type="email" placeholder="Email address"/>
                  <button type="submit">Sign Up</button>
               </div>
               <div className="newsletter__agree d-flex align-items-start mb-35">
                  <input className="e-check-input" type="checkbox" id="n-agree"/>
                  <label className="e-check-label" for="n-agree">The city and town name generator uses a database of over five million names across more countries</label>
               </div>
               <div className="newsletter__option">
                  <p>Please, don’t ask me again</p>
               </div>
            </form>
         </div>
      </div>
      <div className="newsletter-overlay"></div>

      <main>

        
         <section className="slider__area p-relative">
            <div className="slider__active swiper-container">
               <div className="swiper-wrapper">
                  <div className="slider__item slider__height slider__overlay include-bg pt-100 pb-100 swiper-slide d-flex align-items-center">
                     <div className="slider__bg p-relative include-bg" data-background="assets/img/slider/slider-1.jpg"></div>
                     <div className="container">
                        <div className="row justify-content-center">
                           <div className="col-xxl-12">
                              <div className="slider__content text-center">
                                 <span className="slider__title-pre">Rozgar.com</span>
                                 <h3 className="slider__title">Looking for a Job?</h3>

                                 <div className="slider__form">
                                    <form action="#">
                                       <div className="slider__form-wrapper flex-wrap">
                                          <div className="slider__form-input">
                                             <input type="text" placeholder="Your Name"/>
                                          </div>
                                          <div className="slider__form-input">
                                             <input type="text" placeholder="Your Email"/>
                                          </div>
                                          <div className="slider__form-input has-select">
                                             <select>
                                                <option value="1">Select Event</option>
                                                <option value="2">Wedding</option>
                                                <option value="3">Photography</option>
                                                <option value="4">Consulting</option>
                                             </select>
                                          </div>
                                          <div className="slider__form-input">
                                             <button type="button" className="slider-form-btn tp-link-btn-3">Join the event <i className="fa-regular fa-arrow-right"></i></button>
                                          </div>
                                       </div>
                                    </form>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="slider__item slider__height slider__overlay include-bg pt-100 pb-100 swiper-slide d-flex align-items-center">
                     <div className="slider__bg p-relative include-bg" data-background="assets/img/slider/slider-2.jpg"></div>
                     <div className="container">
                        <div className="row justify-content-center">
                           <div className="col-xxl-11">
                              <div className="slider__content text-center">
                                 <span className="slider__title-pre">Hello! Consulting</span>
                                 <h3 className="slider__title">To This Template Than What You Can See</h3>

                                 <div className="slider__form">
                                    <form action="#">
                                       <div className="slider__form-wrapper flex-wrap">
                                          <div className="slider__form-input">
                                             <input type="text" placeholder="Your Name"/>
                                          </div>
                                          <div className="slider__form-input">
                                             <input type="text" placeholder="Your Email"/>
                                          </div>
                                          <div className="slider__form-input has-select">
                                             <select>
                                                <option value="1">Select Event</option>
                                                <option value="2">Wedding</option>
                                                <option value="3">Photography</option>
                                                <option value="4">Consulting</option>
                                             </select>
                                          </div>
                                          <div className="slider__form-input">
                                             <button type="button" className="slider-form-btn tp-link-btn-3">Join the event <i className="fa-regular fa-arrow-right"></i></button>
                                          </div>
                                       </div>
                                    </form>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="slider__item slider__height slider__overlay include-bg pt-100 pb-100 swiper-slide d-flex align-items-center">
                     <div className="slider__bg p-relative include-bg" data-background="assets/img/slider/slider-3.jpg"></div>
                     <div className="container">
                        <div className="row justify-content-center">
                           <div className="col-xxl-12">
                              <div className="slider__content text-center">
                                 <span className="slider__title-pre">Rozgar.com</span>
                                 <h3 className="slider__title">Looking for a Job?</h3>

                                 <div className="slider__form">
                                    <form action="#">
                                       <div className="slider__form-wrapper flex-wrap">
                                          <div className="slider__form-input">
                                             <input type="text" placeholder="Your Name"/>
                                          </div>
                                          <div className="slider__form-input">
                                             <input type="text" placeholder="Your Email"/>
                                          </div>
                                          <div className="slider__form-input has-select">
                                             <select>
                                                <option value="1">Select Event</option>
                                                <option value="2">Wedding</option>
                                                <option value="3">Photography</option>
                                                <option value="4">Consulting</option>
                                             </select>
                                          </div>
                                          <div className="slider__form-input">
                                             <button type="button" className="slider-form-btn tp-link-btn-3">Join the event <i className="fa-regular fa-arrow-right"></i></button>
                                          </div>
                                       </div>
                                    </form>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="main-slider-dot d-none d-lg-flex"></div>
            </div>
            <div className="mouse-scroll">
               <a href="#tpabout" className="mouse-scroll-btn"></a>
            </div>
         </section>
         
         <section id="tpabout" className="about__area pt-120 pb-120">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-6 col-xl-6 col-lg-6">
                     <div className="about__thumb-wrapper ml-70 pr-100">
                        <div className="about__thumb w-img">
                           <div className="tp-thumb-overlay wow"></div>
                           <img src="assets/img/about/about-img-1.jpg" alt=""/>
                        </div>
                        <div className="about__thumb-text">
                           <h3 data-text="Expert">Expert</h3>
                        </div>
                        <div className="about__experience">
                           <h4><span data-purecounter-duration="1" data-purecounter-end="12"  className="purecounter">0</span></h4>
                           <p>Years <br/> Experience</p>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6">
                     {
                        homecon.map((ele) =>(
                           <div className="about__wrapper pr-95 wow fadeInUp" data-wow-delay=".7s" data-wow-duration="1s">
                        <div className="section__title-wrapper mb-25">
                           <span className="section__title-pre">Expert Guidance</span>
                           <h3 className="section__title">
                              {ele.abouthead} <span className="section__title-highlight">about us 
                              <svg width="220" height="27" viewBox="0 0 220 27" fill="none">
                                 <path d="M19.6407 15.2948C33.4481 12.464 47.2752 10.3031 61.24 8.63481C48.6133 9.07487 35.9865 9.33103 23.3729 9.29162C22.4743 9.29162 21.7396 8.54942 21.7396 7.64958C21.7462 6.74318 22.4808 6.00754 23.386 6.00754C60.8398 6.12577 138.464 3.57728 175.839 1.69222C185.81 1.18648 195.563 0.739778 205.534 0.477052C208.079 0.41137 210.63 0.280046 213.175 0.188091C214.5 0.142114 217.924 -0.0286769 218.403 0.0041639C219.761 0.0895499 219.964 1.27179 219.984 1.4557C220.036 1.8892 220.003 2.53954 219.242 3.03215C219.19 3.07156 218.895 3.25544 218.232 3.33426C181.198 7.74806 103.764 7.1897 66.6842 11.3079C51.0861 13.0485 35.6783 15.3606 20.3032 18.5133C14.9311 19.6102 11.8678 20.3064 7.57803 21.4493C14.649 23.3081 21.8971 24.3393 29.2173 24.891C29.2173 24.891 19.6407 27.474 12.386 25.9286C5.13134 24.3833 4.9674 24.221 1.33353 23.0321C0.493934 22.7628 0.238148 22.2375 0.133199 21.955C-0.0963783 21.3639 -0.0701445 20.7136 0.539874 20.1159C0.703857 19.9583 1.01869 19.7349 1.51064 19.5773C2.15346 19.3737 3.48499 19.1636 4.08189 18.9994C9.9853 17.3705 13.1535 16.6216 19.6407 15.2948Z" fill="currentColor"/>
                              </svg>
                           </span>
                           </h3>
                        </div>

                        <p>{ele.aboutcon}</p>

                        <div className="about__author d-sm-flex align-items-center mb-40">
                           <div className="about__author-inner d-flex align-items-center">
                              <div className="about__author-thumb mr-10">
                                 <img src="assets/img/about/about-author-thumb.jpg" alt=""/>
                              </div>
                              <div className="about__author-content d-sm-flex align-items-center">
                                 <h3 className="about__author-title">Hi, I'm <span>Robert Fox.</span></h3>
                              </div>
                           </div>
                           <div className="about__author-btn">
                              <span className="about-author-link">let’s talk about ideas</span>
                           </div>
                        </div>
                        <div className="about__btn">
                           <a href="about.html" className="tp-btn">Discover Now</a>
                        </div>
                     </div>
                        ))

                     }
                  </div>
               </div>
            </div>
         </section>
         
         <section className="counter__area counter__border pb-110">
            <div className="container">
               <div className="counter__inner black-bg fix">
                  <div className="counter__shape">
                     <img className="counter__shape-1 wow fadeInDown" data-wow-duration="1s" data-wow-delay=".3s" src="assets/img/counter/counter-shape-1.png" alt=""/>
                     <img className="counter__shape-2 wow fadeInDown" data-wow-duration="1s" data-wow-delay=".7s" src="assets/img/counter/counter-shape-2.png" alt=""/>
                     <img className="counter__shape-3 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".7s" src="assets/img/counter/counter-shape-3.png" alt=""/>
                     <img className="counter__shape-4 wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.2s" src="assets/img/counter/counter-shape-4.png" alt=""/>

                     <img className="counter__shape-5 wow fadeInLeft" data-wow-duration="1s" src="assets/img/counter/counter-shape-circle-1.png" alt=""/>
                     <img className="counter__shape-6 wow fadeInRight" data-wow-duration="1s" src="assets/img/counter/counter-shape-circle-2.png" alt=""/>

                     <img className="counter__shape-7 wow fadeInUp" data-wow-duration="1s" src="assets/img/counter/counter-shape-line-1.png" alt=""/>
                     <img className="counter__shape-8 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s" src="assets/img/counter/counter-shape-line-2.png" alt=""/>
                     <img className="counter__shape-9 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".7s" src="assets/img/counter/counter-shape-line-3.png" alt=""/>
                  </div>
                  <div className="row justify-content-center">
                     <div className="col-xxl-4 col-xl-4 col-lg-4">
                        <div className="counter__item">
                           <div className="counter__content">
                              <p>Cups of Coffee</p>
                              <h3 className="counter__title">+<span data-purecounter-duration="1" data-purecounter-end="914"  className="purecounter">0</span>K</h3>
                           </div>
                        </div>
                     </div>
                     <div className="col-xxl-4 col-xl-4 col-lg-4">
                        <div className="counter__item">
                           <div className="counter__content">
                              <p>Happy Clients</p>
                              <h3 className="counter__title">+<span data-purecounter-duration="1" data-purecounter-end="123"  className="purecounter">0</span>K</h3>
                           </div>
                        </div>
                     </div>
                     <div className="col-xxl-4 col-xl-4 col-lg-4">
                        <div className="counter__item">
                           <div className="counter__content">
                              <p>Review</p>
                              <h3 className="counter__title">+<span data-purecounter-duration="1" data-purecounter-end="76"  className="purecounter">0</span>K</h3>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         
         <section className="services__area pb-90">
            <div className="container">
               <div className="row align-items-end">
                  <div className="col-xxl-7 col-xl-5 col-lg-8 col-md-8 col-sm-8">
                     <div className="section__title-wrapper mb-60">
                        <h3 className="section__title">
                           Services to help 
                           <span className="section__title-highlight">business
                              <svg width="220" height="27" viewBox="0 0 220 27" fill="none">
                                 <path d="M19.6407 15.2948C33.4481 12.464 47.2752 10.3031 61.24 8.63481C48.6133 9.07487 35.9865 9.33103 23.3729 9.29162C22.4743 9.29162 21.7396 8.54942 21.7396 7.64958C21.7462 6.74318 22.4808 6.00754 23.386 6.00754C60.8398 6.12577 138.464 3.57728 175.839 1.69222C185.81 1.18648 195.563 0.739778 205.534 0.477052C208.079 0.41137 210.63 0.280046 213.175 0.188091C214.5 0.142114 217.924 -0.0286769 218.403 0.0041639C219.761 0.0895499 219.964 1.27179 219.984 1.4557C220.036 1.8892 220.003 2.53954 219.242 3.03215C219.19 3.07156 218.895 3.25544 218.232 3.33426C181.198 7.74806 103.764 7.1897 66.6842 11.3079C51.0861 13.0485 35.6783 15.3606 20.3032 18.5133C14.9311 19.6102 11.8678 20.3064 7.57803 21.4493C14.649 23.3081 21.8971 24.3393 29.2173 24.891C29.2173 24.891 19.6407 27.474 12.386 25.9286C5.13134 24.3833 4.9674 24.221 1.33353 23.0321C0.493934 22.7628 0.238148 22.2375 0.133199 21.955C-0.0963783 21.3639 -0.0701445 20.7136 0.539874 20.1159C0.703857 19.9583 1.01869 19.7349 1.51064 19.5773C2.15346 19.3737 3.48499 19.1636 4.08189 18.9994C9.9853 17.3705 13.1535 16.6216 19.6407 15.2948Z" fill="currentColor"/>
                           </svg>
                           </span>
                           grow.
                        </h3>
                     </div>
                  </div>
                  <div className="col-xxl-5 col-xl-7 col-lg-4 col-md-4 col-sm-4">
                     <div className="services__more mb-70 text-md-end">
                        <a href="services.html" className="tp-link-btn-2">
                           See All Service
                           <span>
                              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M1 7H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                 <path d="M7 1L13 7L7 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>                              
                           </span>                              
                        </a>
                     </div>
                  </div>
               </div>
               <div className="row">
                     { servicesBox.map((ele) => (
                        <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
                           <div className="services__item transition-3 mb-30 fix wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                              <div className="services__shape">
                                 <img className="services__shape-1" src="assets/img/services/shape/services-shape-1.png" alt=""/>
                                 <img className="services__shape-2" src="assets/img/services/shape/services-shape-2.png" alt=""/>
                              </div>
                              <div className="services__item-inner">
                                 <div className="services__icon">
                                    <span>{ele.skillIcon}</span>
                                 </div>
                                 <div className="services__content">
                                    <h3 className="services__title">
                                       <a href="#">{ele.skilltitle}</a>
                                    </h3>
                                    <p>{ele.skillcon}</p>
         
                                    <div className="services__btn">
                                       <a href="#" className="tp-btn-border">{ele.button}<i className="fa-regular fa-angle-right"></i></a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     ))
                  }
               </div>
            </div>
         </section>
         
         <section className="event__area grey-bg-4 pt-110 pb-115">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-9 col-xl-8">
                     <div className="section__title-wrapper mb-50">
                        <h3 className="section__title">
                           Event &  
                           <span className="section__title-highlight">seminar
                              <svg width="220" height="27" viewBox="0 0 220 27" fill="none">
                                 <path d="M19.6407 15.2948C33.4481 12.464 47.2752 10.3031 61.24 8.63481C48.6133 9.07487 35.9865 9.33103 23.3729 9.29162C22.4743 9.29162 21.7396 8.54942 21.7396 7.64958C21.7462 6.74318 22.4808 6.00754 23.386 6.00754C60.8398 6.12577 138.464 3.57728 175.839 1.69222C185.81 1.18648 195.563 0.739778 205.534 0.477052C208.079 0.41137 210.63 0.280046 213.175 0.188091C214.5 0.142114 217.924 -0.0286769 218.403 0.0041639C219.761 0.0895499 219.964 1.27179 219.984 1.4557C220.036 1.8892 220.003 2.53954 219.242 3.03215C219.19 3.07156 218.895 3.25544 218.232 3.33426C181.198 7.74806 103.764 7.1897 66.6842 11.3079C51.0861 13.0485 35.6783 15.3606 20.3032 18.5133C14.9311 19.6102 11.8678 20.3064 7.57803 21.4493C14.649 23.3081 21.8971 24.3393 29.2173 24.891C29.2173 24.891 19.6407 27.474 12.386 25.9286C5.13134 24.3833 4.9674 24.221 1.33353 23.0321C0.493934 22.7628 0.238148 22.2375 0.133199 21.955C-0.0963783 21.3639 -0.0701445 20.7136 0.539874 20.1159C0.703857 19.9583 1.01869 19.7349 1.51064 19.5773C2.15346 19.3737 3.48499 19.1636 4.08189 18.9994C9.9853 17.3705 13.1535 16.6216 19.6407 15.2948Z" fill="currentColor"/>
                           </svg>
                           </span>
                           schedules for the year 2022/23.
                        </h3>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xxl-12">
                     {
                        event.map((ele) => (
                           <div className="event__item white-bg transition-3 wow fadeInUp" data-wow-delay=".5s" data-wow-duration="1s">
                              <div className="row align-items-center">
                                 <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <h3 className="event__title">
                                       <a href="event-details.html">{ele.eventtitle}</a>
                                    </h3>
                                 </div>
                                 <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6">
                                    <div className="event__speaker">
                                       <ul>
                                          <li>
                                             <img src={ele.eventimgname01} alt=""/>
                                          </li>
                                          <li>
                                             <img src={ele.eventimgname02} alt=""/>
                                          </li>
                                       </ul>
                                       <span>{ele.eventimg}</span>
                                    </div>
                                 </div>
                                 <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-6">
                                    <div className="event__meta">
                                       <span>{ele.eventdate}</span>
                                    </div>
                                 </div>
                                 <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                    <div className="event__more float-lg-end">
                                       <a href="event-details.html" className="tp-btn-border-pink">{ele.eventbtn}<svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M1 9L5 5L1 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          </svg>
                                       </a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        ))
                     }
                     
                  </div>
               </div>
            </div>
         </section>
         
        
         <section className="faq__area pb-120" >
            <div className="container">
               <div className="faq__inner p-relative">
                  <div className="faq__text d-none d-lg-block">
                     <h3 data-text="faq">faq</h3>
                  </div>
                  <div className="row justify-content-end">
                     <div className="col-xxl-9 col-xl-9 col-lg-9">
                        <div className="faq__wrapper tp-accordion pt-65">
                           <div className="accordion" id="faqaccordion">
                              {
                                 faq.map((ele, i)=>(
                                 <div className="accordion-item">
                                    <h2 className="accordion-header" id={ele.id}>
                                       <button className= {i==0 ? "accordion-button":"accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target={'#'+ele.col} aria-expanded="true" aria-controls={ele.col}>
                                          {ele.faqtitle}
                                          <span className="accordion-btn"></span>
                                       </button>
                                    </h2>
                                    <div id={ele.col} className={i==0 ? "accordion-collapse collapse show":"accordion-collapse collapse"} aria-labelledby={ele.id} data-bs-parent="#faqaccordion">
                                       <div className="accordion-body">
                                          <p>{ele.faqcon}</p>
                                       </div>
                                    </div>
                                    </div>
                                 ))
                              }
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
        
         <section className="testimonial__area pt-120 pb-60 wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
            <div className="container">
               <div className="testimonial__inner p-relative pt-70 purple-bg">
                  <div className="testimonial__shape">
                     <img className="testimonial__shape-quote" src="assets/img/testimonial/testimonial-quote-icon.png" alt=""/>
                  </div>
                  <div className="row justify-content-center">
                     <div className="col-xxl-10 col-xl-9 col-lg-10 col-11">
                        <div className="testimonial__wrapper">
                           <div className="section__title-wrapper text-center">
                              <span className="section__title-pre section__title-pre-1-2">Some of Our Customer's Words</span>
                              <h3 className="section__title section__title-1-2">
                                 <span className="section__title-highlight">
                                    Customers
                                    <svg width="220" height="27" viewBox="0 0 220 27" fill="none">
                                       <path d="M19.6407 15.2948C33.4481 12.464 47.2752 10.3031 61.24 8.63481C48.6133 9.07487 35.9865 9.33103 23.3729 9.29162C22.4743 9.29162 21.7396 8.54942 21.7396 7.64958C21.7462 6.74318 22.4808 6.00754 23.386 6.00754C60.8398 6.12577 138.464 3.57728 175.839 1.69222C185.81 1.18648 195.563 0.739778 205.534 0.477052C208.079 0.41137 210.63 0.280046 213.175 0.188091C214.5 0.142114 217.924 -0.0286769 218.403 0.0041639C219.761 0.0895499 219.964 1.27179 219.984 1.4557C220.036 1.8892 220.003 2.53954 219.242 3.03215C219.19 3.07156 218.895 3.25544 218.232 3.33426C181.198 7.74806 103.764 7.1897 66.6842 11.3079C51.0861 13.0485 35.6783 15.3606 20.3032 18.5133C14.9311 19.6102 11.8678 20.3064 7.57803 21.4493C14.649 23.3081 21.8971 24.3393 29.2173 24.891C29.2173 24.891 19.6407 27.474 12.386 25.9286C5.13134 24.3833 4.9674 24.221 1.33353 23.0321C0.493934 22.7628 0.238148 22.2375 0.133199 21.955C-0.0963783 21.3639 -0.0701445 20.7136 0.539874 20.1159C0.703857 19.9583 1.01869 19.7349 1.51064 19.5773C2.15346 19.3737 3.48499 19.1636 4.08189 18.9994C9.9853 17.3705 13.1535 16.6216 19.6407 15.2948Z" fill="currentColor"/>
                                    </svg>
                                 </span>
                                 love the ease and simplicity
                              </h3>
                           </div>

                           <div className="testimonial__slider pb-50">
                              <div className="testimonial__slider-active pt-45 pb-40 swiper-container">
                                 <div className="swiper-wrapper">
                                    <div className="testimonial__item swiper-slide">
                                       <div className="row align-items-center">
                                          <div className="col-xxl-4 col-xl-4 col-lg-4">
                                             <div className="testimonial__avater d-flex align-items-center">
                                                <div className="testimonial__avater-thumb mr-15">
                                                   <img src="assets/img/users/user-1.jpg" alt=""/>
                                                </div>
                                                <div className="testimonial__avater-info">
                                                   <h3 className="testimonial__avater-title">Cody Fisher</h3>
                                                   <span className="testimonial__avater-designation">Starbucks</span>
                                                </div>
                                             </div>
                                          </div>
                                          <div className="col-xxl-8 col-xl-8 col-lg-8">
                                             <div className="testimonial__content">
                                                <p>Eos voluptas consequuntur est assumenda quae aut omnis unde. Qui exercitationem nisi aut dolor iure at vero iure rem quia dolore aut voluptas commodi est aliquid repellat.</p>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="testimonial__item swiper-slide">
                                       <div className="row align-items-center">
                                          <div className="col-xxl-4 col-xl-4 col-lg-4">
                                             <div className="testimonial__avater d-flex align-items-center">
                                                <div className="testimonial__avater-thumb mr-15">
                                                   <img src="assets/img/users/user-2.jpg" alt=""/>
                                                </div>
                                                <div className="testimonial__avater-info">
                                                   <h3 className="testimonial__avater-title">Shahnewaz SP</h3>
                                                   <span className="testimonial__avater-designation">Themepure</span>
                                                </div>
                                             </div>
                                          </div>
                                          <div className="col-xxl-8 col-xl-8 col-lg-8">
                                             <div className="testimonial__content">
                                                <p>Quia dolore eos voluptas  rem  aut voluptas commodi est aliquid consequuntur est assumenda quae aut omnis unde. Qui exercitationem nisi aut dolor iure at vero iure repellat.</p>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="testimonial__item swiper-slide">
                                       <div className="row align-items-center">
                                          <div className="col-xxl-4 col-xl-4 col-lg-4">
                                             <div className="testimonial__avater d-flex align-items-center">
                                                <div className="testimonial__avater-thumb mr-15">
                                                   <img src="assets/img/users/user-3.jpg" alt=""/>
                                                </div>
                                                <div className="testimonial__avater-info">
                                                   <h3 className="testimonial__avater-title">Steven Paul</h3>
                                                   <span className="testimonial__avater-designation">Mcdoal</span>
                                                </div>
                                             </div>
                                          </div>
                                          <div className="col-xxl-8 col-xl-8 col-lg-8">
                                             <div className="testimonial__content">
                                                <p>Qui exercitationem nisi aut dolor os voluptas consequuntur est assumenda quae aut omnis unde. Iure at vero iure rem quia dolore aut voluptas commodi est aliquid repellat.</p>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="testimonial__item swiper-slide">
                                       <div className="row align-items-center">
                                          <div className="col-xxl-4 col-xl-4 col-lg-4">
                                             <div className="testimonial__avater d-flex align-items-center">
                                                <div className="testimonial__avater-thumb mr-15">
                                                   <img src="assets/img/users/user-4.jpg" alt=""/>
                                                </div>
                                                <div className="testimonial__avater-info">
                                                   <h3 className="testimonial__avater-title">Quali Mac</h3>
                                                   <span className="testimonial__avater-designation">Suddly</span>
                                                </div>
                                             </div>
                                          </div>
                                          <div className="col-xxl-8 col-xl-8 col-lg-8">
                                             <div className="testimonial__content">
                                                <p>vero iure rem quia dolore voluptas consequuntur est assumenda quae aut omnis unde. Qui exercitationem nisi aut dolor iure at  aut voluptas commodi est aliquid repellat.</p>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="testimonial-slider-dot tp-swiper-dot"></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="container">
               <div className="brand__inner purple-bg">
                  <div className="row justify-content-center">
                     <div className="col-xxl-10 col-xl-9 col-xl-10 col-11">
                        <div className="brand__area">
                           <div className="brand__thumb-wrapper d-sm-flex align-items-center text-center text-sm-start">
                              <h3 className="brand__title">Global Exparts: </h3>
                              <div className="brand__slider-active swiper-container">
                                 <div className="swiper-wrapper d-flex align-items-center justify-content-between">
                                    <div className="brand__thumb swiper-slide">
                                       <img src="assets/img/brand/brand-2.png" alt=""/>
                                    </div>
                                    <div className="brand__thumb swiper-slide">
                                       <img src="assets/img/brand/brand-3.png" alt=""/>
                                    </div>
                                    <div className="brand__thumb swiper-slide">
                                       <img src="assets/img/brand/brand-4.png" alt=""/>
                                    </div>
                                    <div className="brand__thumb swiper-slide">
                                       <img src="assets/img/brand/brand-5.png" alt=""/>
                                    </div>
                                    <div className="brand__thumb swiper-slide">
                                       <img src="assets/img/brand/brand-6.png" alt=""/>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         
         
         <section className="blog__area pt-50 pb-110">
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-xxl-6 col-xl-6 col-lg-8 col-md-8 col-sm-10">
                     <div className="section__title-wrapper text-center mb-60">
                        <h3 className="section__title">
                           Take a look at the latest 
                           <span className="section__title-highlight">articles<svg width="220" height="27" viewBox="0 0 220 27" fill="none">
                                 <path d="M19.6407 15.2948C33.4481 12.464 47.2752 10.3031 61.24 8.63481C48.6133 9.07487 35.9865 9.33103 23.3729 9.29162C22.4743 9.29162 21.7396 8.54942 21.7396 7.64958C21.7462 6.74318 22.4808 6.00754 23.386 6.00754C60.8398 6.12577 138.464 3.57728 175.839 1.69222C185.81 1.18648 195.563 0.739778 205.534 0.477052C208.079 0.41137 210.63 0.280046 213.175 0.188091C214.5 0.142114 217.924 -0.0286769 218.403 0.0041639C219.761 0.0895499 219.964 1.27179 219.984 1.4557C220.036 1.8892 220.003 2.53954 219.242 3.03215C219.19 3.07156 218.895 3.25544 218.232 3.33426C181.198 7.74806 103.764 7.1897 66.6842 11.3079C51.0861 13.0485 35.6783 15.3606 20.3032 18.5133C14.9311 19.6102 11.8678 20.3064 7.57803 21.4493C14.649 23.3081 21.8971 24.3393 29.2173 24.891C29.2173 24.891 19.6407 27.474 12.386 25.9286C5.13134 24.3833 4.9674 24.221 1.33353 23.0321C0.493934 22.7628 0.238148 22.2375 0.133199 21.955C-0.0963783 21.3639 -0.0701445 20.7136 0.539874 20.1159C0.703857 19.9583 1.01869 19.7349 1.51064 19.5773C2.15346 19.3737 3.48499 19.1636 4.08189 18.9994C9.9853 17.3705 13.1535 16.6216 19.6407 15.2948Z" fill="currentColor"/>
                           </svg>
                        </span>
                        </h3>
                     </div>
                  </div>
               </div>
               <div className="row">
                  {
                     blog.map((ele)=>(
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                     <div className="blog__item white-bg transition-3 mb-30 wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                        <div className="row">
                           <div className="col-xxl-5 col-xl-5">
                              <div className="blog__thumb m-img fix">
                                 <div className="tp-thumb-overlay wow"></div>
                                 <a href={constant.component.blogDetails.url}>
                                    <img src={ele.blogimg} alt=""/>
                                 </a>
                              </div>
                           </div>
                           <div className="col-xxl-7 col-xl-7">
                              <div className="blog__content">
                                 <div className="blog__tag">
                                    <a href={constant.component.blogDetails.url}>{ele.blogcat}</a>
                                 </div>
                                 <h3 className="blog__title">
                                    <a href={constant.component.blogDetails.url}>{ele.bloghead}</a>
                                 </h3>
                                 <div className="blog__meta">
                                    <span>
                                       <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M7.5 14C11.0899 14 14 11.0899 14 7.5C14 3.91015 11.0899 1 7.5 1C3.91015 1 1 3.91015 1 7.5C1 11.0899 3.91015 14 7.5 14Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                       <path d="M7.5 3.59961V7.49961L10.1 8.79961" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                       </svg>
                                       {ele.blogdate}
                                    </span>
                                    <span>{ele.blogtime}</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                     ))
                  }
               </div>
            </div>
         </section>

      </main>

      
    </React.Fragment>
  )
}

