import React, {useEffect, useState} from 'react';
import {useNavigate, useSearchParams} from 'react-router-dom';
import {blog, BlogDetailsData, category } from '../../Components/home/data';
import constant from '../../constant';

export default function BlogDetails() {
   let [searchParams, setSearchParams] = useSearchParams();
   const [data, setData] = useState({});
   let id = searchParams.get('id')
   const navigate = useNavigate();

   useEffect(() => {
      let result = BlogDetailsData.find((ele) => ele.id === id)
      if (result) {
         setData(result);
      } else if (!result) {
         navigate(constant.component.Blog.url);
      }
   }, [])

   return (
      <React.Fragment>
         <main>
            <section className="breadcrumb__area include-bg pb-70 pt-120 grey-bg-4">
               <div className="container">
                  <div className="row">
                     <div className="col-xxl-12">
                        <div className="breadcrumb__content p-relative z-index-1">
                           <div className="postbox__category">
                              <a href="#">{data && data?.catName}</a>
                           </div>
                           <h3 className="breadcrumb__title">
                              {data && data?.detailHead}
                           </h3>

                           <div className="breadcrumb__list">
                              <span><a href="#">Home</a></span>
                              <span className="dvdr"><i className="fa-solid fa-circle-small"></i></span>
                              <span><a href="#">Business</a></span>
                              <span className="dvdr"><i className="fa-solid fa-circle-small"></i></span>
                              <span>Investment Trend Monitor: Top Trends in 2022  </span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            <section className="postbox__area grey-bg-4 pb-120">
               <div className="container">
                  <div className="row">
                     <div className="col-xxl-12">
                        <div className="postbox__wrapper">
                           <div className="postbox__top">
                              <div className="postbox__thumb m-img mb-55">
                                 <img src={data && data?.detailImg} alt="" />
                              </div>
                           </div>
                           <div className="postbox__main">
                              <div className="row">
                                 <div className="col-lg-8">
                                    <div className="postbox__main-wrapper">
                                       <div className="postbox__meta-wrapper d-flex align-items-center flex-wrap">
                                          <div className="postbox__meta-item mb-30">
                                             <div className="postbox__meta-author d-flex align-items-center">
                                                <div className="postbox__meta-author-thumb">
                                                   <a href="#">
                                                      <img src={data && data?.DauthorImg} alt="" />
                                                   </a>
                                                </div>
                                                <div className="postbox__meta-content">
                                                   <span className="postbox__meta-type">Author</span>
                                                   <p className="postbox__meta-name">{data && data?.AuthorName}</p>
                                                </div>
                                             </div>
                                          </div>
                                          <div className="postbox__meta-item mb-30">
                                             <div className="postbox__meta-content">
                                                <span className="postbox__meta-type">Published</span>
                                                <p className="postbox__meta-name">April 24, 2022</p>
                                             </div>
                                          </div>
                                          <div className="postbox__meta-item mb-30">
                                             <div className="postbox__meta-content">
                                                <span className="postbox__meta-type">2 Comments</span>
                                                <p className="postbox__meta-name"><a href="#tp-blog-details-comment">Join the Conversation</a></p>
                                             </div>
                                          </div>
                                          <div className="postbox__meta-item mb-30">
                                             <div className="postbox__meta-content">
                                                <span className="postbox__meta-type">View</span>
                                                <p className="postbox__meta-name">{data && data?.AuthorView} views</p>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="postbox__details-content-wrapper">
                                          <h3 className="postbox__details-title">{data && data?.PageHead}</h3>
                                          <p>{data && data?.PagePara}</p>

                                          <div className="postbox__img m-img mt-50 mb-45">
                                             <img src={data && data?.PageImg} alt="" />
                                             <h5 className="postbox__img-caption">Image by <a href="#">@example01</a></h5>
                                          </div>

                                          <p>{data && data?.PagePara2}</p>

                                          <div className="postbox__quote">
                                             <blockquote>
                                                <div className="postbox__quote-icon">
                                                   <span>
                                                      <svg width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M25.6645 0C27.2731 0 28.5892 0.329033 29.6129 0.987098C30.6366 1.64516 31.4774 2.48602 32.1355 3.50968C32.9398 4.67957 33.4516 5.95915 33.671 7.34839C33.8903 8.73764 34 9.87097 34 10.7484C34 14.3312 33.086 17.585 31.2581 20.5097C29.4301 23.4344 26.5785 25.8108 22.7032 27.6387L21.7161 25.6645C23.9828 24.714 25.9204 23.2151 27.529 21.1677C29.2108 19.1204 30.0516 17.0366 30.0516 14.9161C30.0516 14.0387 29.9419 13.271 29.7226 12.6129C28.5527 13.5634 27.2 14.0387 25.6645 14.0387C23.7634 14.0387 22.1183 13.4172 20.729 12.1742C19.3398 10.9312 18.6452 9.21291 18.6452 7.01936C18.6452 4.97205 19.3398 3.29033 20.729 1.9742C22.1183 0.658065 23.7634 0 25.6645 0ZM7.01936 0C8.62796 0 9.94409 0.329033 10.9677 0.987098C11.9914 1.64516 12.8323 2.48602 13.4903 3.50968C14.2946 4.67957 14.8065 5.95915 15.0258 7.34839C15.2452 8.73764 15.3548 9.87097 15.3548 10.7484C15.3548 14.3312 14.4409 17.585 12.6129 20.5097C10.7849 23.4344 7.93333 25.8108 4.05806 27.6387L3.07097 25.6645C5.33763 24.714 7.27527 23.2151 8.88387 21.1677C10.5656 19.1204 11.4065 17.0366 11.4065 14.9161C11.4065 14.0387 11.2968 13.271 11.0774 12.6129C9.90753 13.5634 8.55484 14.0387 7.01936 14.0387C5.11828 14.0387 3.47312 13.4172 2.08387 12.1742C0.694624 10.9312 0 9.21291 0 7.01936C0 4.97205 0.694624 3.29033 2.08387 1.9742C3.47312 0.658065 5.11828 0 7.01936 0Z" fill="currentColor" />
                                                      </svg>
                                                   </span>
                                                </div>
                                                <p>{data && data?.PageQuote}</p>
                                             </blockquote>
                                          </div>

                                          <div className="postbox__features">
                                             <h4 className="postbox__features-title">Learning from failure</h4>
                                             <p>The European languages are members of the same family. Their separate existence is a myth. For science europe uses the same vocabulary. </p>

                                             <ul>
                                                <li>Get yourself comfortable.</li>
                                                <li>Manage your workspace and organize your desk.</li>
                                                <li>Keep In touch with your co-workers.</li>
                                             </ul>
                                          </div>
                                          <p>The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family.</p>

                                       </div>
                                       <div className="postbox__more-navigation white-bg d-none d-md-flex justify-content-between flex-wrap mb-40">
                                          <div className="postbox__more-left d-flex align-items-center">
                                             <div className="postbox__more-icon">
                                                <a href="blog-details.html">
                                                   <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M7 12.9718L2.06061 8.04401C1.47727 7.46205 1.47727 6.50975 2.06061 5.92778L7 1" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                   </svg>
                                                </a>
                                             </div>
                                             <div className="postbox__more-content">
                                                <p>Previous Article</p>
                                                <h4>
                                                   <a href="blog-details.html">Traveling Solo Is Awesome</a>
                                                </h4>
                                             </div>
                                          </div>
                                          <div className="postbox__more-right d-flex align-items-center">
                                             <div className="postbox__more-content">
                                                <p>Next Article</p>
                                                <h4>
                                                   <a href="blog-details.html">A Beautiful Sunday Morning</a>
                                                </h4>
                                             </div>
                                             <div className="postbox__more-icon">
                                                <a href="blog-details.html">
                                                   <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M1 12.9718L5.93939 8.04401C6.52273 7.46205 6.52273 6.50975 5.93939 5.92778L1 1" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                   </svg>
                                                </a>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="postbox__share-wrapper mb-60">
                                          <div className="row align-items-center">
                                             <div className="col-xl-7">
                                                <div className="tagcloud tagcloud-sm">
                                                   <span>Tags:</span>
                                                   <a href="#">Blog</a>
                                                   <a href="#">Creative</a>
                                                   <a href="#">Portfoilo</a>
                                                   <a href="#">Harry</a>
                                                </div>
                                             </div>
                                             <div className="col-xl-5">
                                                <div className="postbox__share text-xl-end">
                                                   <span>Share On:</span>
                                                   <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                                                   <a href="#"><i className="fab fa-twitter"></i></a>
                                                   <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="postbox__author d-sm-flex align-items-start white-bg mb-95">
                                          <div className="postbox__author-thumb">
                                             <a href="#">
                                                <img src="assets/img/users/user-14.jpg" alt="" />
                                             </a>
                                          </div>
                                          <div className="postbox__author-content">
                                             <h3 className="postbox__author-title">
                                                <a href="#">Colene Landin</a>
                                             </h3>
                                             <p>Digital content wrangler | UX enthusiast | Recovering educator & GIF hockey fan  Oxford comma or death.!</p>

                                             <div className="postbox__author-social d-flex align-items-center">
                                                <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                                <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                                             </div>
                                          </div>
                                       </div>

                                       <div className="postbox__related mb-65">
                                          <h3 className="postbox__related-title">You may also like</h3>

                                          <div className="row">
                                             {blog.map((ele, index)=>(
                                                (index < 2 ? <div className="col-xl-6 col-lg-12 col-md-6">
                                                   <div className="blog__grid-item">
                                                      <div className="blog__item-10 white-bg transition-3 mb-30 fix">
                                                         <div className="blog__thumb-10 w-img fix">
                                                            <a href="blog-details.html">
                                                               <img src={ele.blogimg} alt="" />
                                                            </a>
                                                            <div className="blog__tag-10">
                                                               <a href="#">{ele.blogcat}</a>
                                                            </div>
                                                         </div>
                                                         <div className="blog__content-10">
                                                            <div className="blog__content-10-top">
                                                               <div className="blog__meta-10-wrapper d-flex align-items-center">
                                                                  <div className="blog__meta-10 has-date">
                                                                     <span>
                                                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                           <path d="M7.5 14C11.0899 14 14 11.0899 14 7.5C14 3.91015 11.0899 1 7.5 1C3.91015 1 1 3.91015 1 7.5C1 11.0899 3.91015 14 7.5 14Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                           <path d="M7.5 3.59961V7.49961L10.1 8.79961" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                        </svg> {ele.blogdate}
                                                                     </span>
                                                                  </div>
                                                               </div>
                                                               <h3 className="blog__title-10">
                                                                  <a href="blog-details.html">{ele.bloghead}</a>
                                                               </h3>
   
                                                               <p>{ele.blogdisc}</p>
                                                            </div>
                                                            <div className="blog__content-10-bottom d-flex align-items-center justify-content-between">
                                                               <div className="blog__meta-author-10 d-flex align-items-center">
                                                                  <div className="blog__meta-author-thumb-10">
                                                                     <a href="#">
                                                                        <img src={ele.blogauthorImg} alt="" />
                                                                     </a>
                                                                  </div>
                                                                  <div className="blog__meta-author-content-10">
                                                                     <span>By<a href="#">{ele.blogauthor}</a></span>
                                                                  </div>
                                                               </div>
                                                               <div className="blog__meta-10 blog-meta-10-2">
                                                                  <span>
                                                                     <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M12.9718 6.66668C12.9741 7.54659 12.769 8.4146 12.3732 9.20001C11.9039 10.1412 11.1825 10.9328 10.2897 11.4862C9.39697 12.0396 8.36813 12.3329 7.31844 12.3333C6.4406 12.3356 5.57463 12.13 4.79106 11.7333L1 13L2.26369 9.20001C1.86791 8.4146 1.66281 7.54659 1.6651 6.66668C1.66551 5.61452 1.95815 4.58325 2.51025 3.68838C3.06236 2.79352 3.85211 2.0704 4.79106 1.60002C5.57463 1.20331 6.4406 0.997725 7.31844 1.00002H7.65099C9.03729 1.07668 10.3467 1.66319 11.3284 2.64726C12.3102 3.63132 12.8953 4.94378 12.9718 6.33334V6.66668Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                     </svg>{ele.blogComment}
                                                                  </span>
                                                                  <span>
                                                                     <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M11.0443 7.00397C11.0443 8.43962 9.88694 9.59974 8.45466 9.59974C7.02238 9.59974 5.86499 8.43962 5.86499 7.00397C5.86499 5.56832 7.02238 4.4082 8.45466 4.4082C9.88694 4.4082 11.0443 5.56832 11.0443 7.00397Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                        <path d="M8.45466 13C11.0082 13 13.3881 11.4918 15.0446 8.88157C15.6956 7.85921 15.6956 6.14078 15.0446 5.11843C13.3881 2.50816 11.0082 1 8.45466 1C5.90115 1 3.52126 2.50816 1.86474 5.11843C1.21371 6.14078 1.21371 7.85921 1.86474 8.88157C3.52126 11.4918 5.90115 13 8.45466 13Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                     </svg>{ele.blogview}
                                                                  </span>
                                                               </div>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div> : "") 
                                             ))}
                                          </div>
                                       </div>
                                       <div className="postbox__comment-wrapper">
                                          <div className="postbox__comment mb-95">
                                             <h3 className="postbox__comment-title">Comments (2)</h3>
                                             <ul>
                                                <li>
                                                   <div className="postbox__comment-box d-sm-flex align-items-start">
                                                      <div className="postbox__comment-info">
                                                         <div className="postbox__comment-avater">
                                                            <img src="assets/img/users/user-17.jpg" alt="" />
                                                         </div>
                                                      </div>
                                                      <div className="postbox__comment-text ">
                                                         <div className="postbox__comment-name">
                                                            <span className="post-meta"> July 14, 2022</span>
                                                            <h5><a href="#">Eleanor Fant</a></h5>
                                                         </div>
                                                         <p>One’s of the best template out of there. design, code quality, updates etc everything you needs guys, buy it you won’t regret it!</p>
                                                         <div className="postbox__comment-reply">
                                                            <a href="#">Reply</a>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <ul className="children">
                                                      <li>
                                                         <div className="postbox__comment-box d-sm-flex align-items-start">
                                                            <div className="postbox__comment-info">
                                                               <div className="postbox__comment-avater">
                                                                  <img src="assets/img/users/user-19.jpg" alt="" />
                                                               </div>
                                                            </div>
                                                            <div className="postbox__comment-text ">
                                                               <div className="postbox__comment-name">
                                                                  <span className="post-meta"> July 14, 2022</span>
                                                                  <h5><a href="#">Alexander Ljung</a></h5>
                                                               </div>
                                                               <p>This theme is super awesome! But I had one small issue with link option in parallax portfolio. The other day! </p>
                                                               <div className="postbox__comment-reply">
                                                                  <a href="#">Reply</a>
                                                               </div>
                                                            </div>
                                                         </div>
                                                      </li>
                                                   </ul>
                                                </li>
                                                <li>
                                                   <div className="postbox__comment-box d-sm-flex align-items-start">
                                                      <div className="postbox__comment-info">
                                                         <div className="postbox__comment-avater">
                                                            <img src="assets/img/users/user-18.jpg" alt="" />
                                                         </div>
                                                      </div>
                                                      <div className="postbox__comment-text ">
                                                         <div className="postbox__comment-name">
                                                            <span className="post-meta"> July 14, 2022</span>
                                                            <h5><a href="#">Shahnewaz Sakil</a></h5>
                                                         </div>
                                                         <p>His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked</p>
                                                         <div className="postbox__comment-reply">
                                                            <a href="#">Reply</a>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </li>
                                             </ul>
                                          </div>
                                          <div className="postbox__comment-form">
                                             <h3 className="postbox__comment-form-title">Leave A Reply</h3>
                                             <p>Your email address will not be published. Required fields are marked *</p>
                                             <form action="#">
                                                <div className="row">
                                                   <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                                                      <div className="postbox__comment-input">
                                                         <input type="text" placeholder="Name*" />
                                                      </div>
                                                   </div>
                                                   <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                                                      <div className="postbox__comment-input">
                                                         <input type="email" placeholder="Email" />
                                                      </div>
                                                   </div>
                                                   <div className="col-xxl-4 col-xl-4 col-lg-12">
                                                      <div className="postbox__comment-input">
                                                         <input type="text" placeholder="Website" />
                                                      </div>
                                                   </div>
                                                   <div className="col-xxl-12">
                                                      <div className="postbox__comment-input">
                                                         <textarea placeholder="Your Comment Here..."></textarea>
                                                      </div>
                                                   </div>
                                                   <div className="col-xxl-12">
                                                      <div className="postbox__comment-agree d-flex align-items-start mb-25">
                                                         <input className="e-check-input" type="checkbox" id="e-agree" />
                                                         <label className="e-check-label" for="e-agree">Save my name, email, and website in this browser for the next time I comment.</label>
                                                      </div>
                                                   </div>
                                                   <div className="col-xxl-12">
                                                      <div className="postbox__comment-btn">
                                                         <button type="submit" className="tp-btn">Submit Comment</button>
                                                      </div>
                                                   </div>
                                                </div>
                                             </form>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="col-lg-4">
                                    <div className="sidebar__wrapper pl-40">
                                       <div className="sidebar__widget mb-20">
                                          <div className="sidebar__widget-content">
                                             <div className="sidebar__search">
                                                <form action="#">
                                                   <div className="sidebar__search-input">
                                                      <input type="text" placeholder="Enter your keywords..." />
                                                      <button type="submit">
                                                         <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M9.55 18.1C14.272 18.1 18.1 14.272 18.1 9.55C18.1 4.82797 14.272 1 9.55 1C4.82797 1 1 4.82797 1 9.55C1 14.272 4.82797 18.1 9.55 18.1Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M19.0002 19.0002L17.2002 17.2002" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                         </svg>
                                                      </button>
                                                   </div>
                                                </form>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="sidebar__widget mb-45">
                                          <div className="sidebar__widget-content">
                                             <div className="sidebar__author">
                                                <div className="sidebar__author-thumb">
                                                   <img src="assets/img/blog/sidebar/sidebar-author.jpg" alt="" />
                                                </div>
                                                <div className="sidebar__author-content">
                                                   <h3 className="sidebar__author-title">Colene Landin</h3>
                                                   <p>Lorem ipsum dolor ametare elit consectetur adipiscing Aenean pellentesque.</p>

                                                   <div className="sidebar__author-social d-flex align-items-center justify-content-center">
                                                      <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                                      <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                                      <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="sidebar__widget mb-45">
                                          <h3 className="sidebar__widget-title">Category</h3>
                                          <div className="sidebar__widget-content">
                                             <ul>
                                                {
                                                   category.map((ele)=>(
                                                      <li><a href="blog.html">{ele} <span>10</span></a></li>
                                                   ))
                                                }
                                             </ul>
                                          </div>
                                       </div>
                                       <div className="sidebar__widget mb-45">
                                          <h3 className="sidebar__widget-title">Recent Post</h3>
                                          <div className="sidebar__widget-content">
                                             <div className="sidebar__post">
                                                <div className="rc__post d-flex align-items-center">
                                                   <div className="rc__post-thumb">
                                                      <a href="blog-details.html"><img src="assets/img/blog/sidebar/blog-sm-1.jpg" alt="" /></a>
                                                   </div>
                                                   <div className="rc__post-content">
                                                      <h3 className="rc__post-title">
                                                         <a href="blog-details.html">Business meeting 2021 in San Francisco</a>
                                                      </h3>
                                                      <div className="rc__meta">
                                                         <span>
                                                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                               <path d="M7.5 14C11.0899 14 14 11.0899 14 7.5C14 3.91015 11.0899 1 7.5 1C3.91015 1 1 3.91015 1 7.5C1 11.0899 3.91015 14 7.5 14Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                               <path d="M7.5 3.59961V7.49961L10.1 8.79961" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>July 21, 2022
                                                         </span>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div className="rc__post d-flex align-items-center">
                                                   <div className="rc__post-thumb">
                                                      <a href="blog-details.html"><img src="assets/img/blog/sidebar/blog-sm-2.jpg" alt="" /></a>
                                                   </div>
                                                   <div className="rc__post-content">
                                                      <h3 className="rc__post-title">
                                                         <a href="blog-details.html">Developing privacy user-centric apps</a>
                                                      </h3>
                                                      <div className="rc__meta">
                                                         <span>
                                                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                               <path d="M7.5 14C11.0899 14 14 11.0899 14 7.5C14 3.91015 11.0899 1 7.5 1C3.91015 1 1 3.91015 1 7.5C1 11.0899 3.91015 14 7.5 14Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                               <path d="M7.5 3.59961V7.49961L10.1 8.79961" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>July 21, 2022
                                                         </span>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div className="rc__post d-flex align-items-center">
                                                   <div className="rc__post-thumb">
                                                      <a href="blog-details.html"><img src="assets/img/blog/sidebar/blog-sm-3.jpg" alt="" /></a>
                                                   </div>
                                                   <div className="rc__post-content">
                                                      <h3 className="rc__post-title">
                                                         <a href="blog-details.html">Starting and Growing  Web Design in 2022</a>
                                                      </h3>
                                                      <div className="rc__meta">
                                                         <span>
                                                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                               <path d="M7.5 14C11.0899 14 14 11.0899 14 7.5C14 3.91015 11.0899 1 7.5 1C3.91015 1 1 3.91015 1 7.5C1 11.0899 3.91015 14 7.5 14Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                               <path d="M7.5 3.59961V7.49961L10.1 8.79961" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>July 21, 2022
                                                         </span>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="sidebar__widget mb-40">
                                          <h3 className="sidebar__widget-title">Tags</h3>
                                          <div className="sidebar__widget-content">
                                             <div className="tagcloud">
                                                <a href="#">Techology</a>
                                                <a href="#">Food</a>
                                                <a href="#">Personality</a>
                                                <a href="#">Life Style</a>
                                                <a href="#">Travel</a>
                                                <a href="#">Nature</a>
                                             </div>
                                          </div>
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
         </main>
      </React.Fragment>
   )
}
