import React from 'react';
import 'react-responsive-pagination/themes/classic.css';
import { blog } from '../../Components/home/data';
import Img from '../../assets/img/blog/breadcrumb/blog-breadcrumb-slider-1.jpg';
import constant from '../../constant';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';

function Items({ currentItems }) {
    return (
        <>
            {
                currentItems.map((ele) => (
                    <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                        <div className="blog__grid-item">
                            <div className="blog__item-10 white-bg transition-3 mb-30 fix">
                                <div className="blog__thumb-10 w-img fix">
                                    <a href={`${constant.component.blogDetails.url}?id=${ele.id}`}>
                                        <img src={ele.blogimg} alt="" />
                                    </a>
                                    <div className="blog__tag-10">
                                        <a href={constant.component.blogDetails.url}>{ele.blogcat}</a>
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
                                                    </svg>{ele.blogdate}
                                                </span>
                                            </div>
                                        </div>
                                        <h3 className="blog__title-10">
                                            <a href={constant.component.blogDetails.url}>{ele.bloghead}</a>
                                        </h3>

                                        <p>{ele.blogdisc}</p>
                                    </div>
                                    <div className="blog__content-10-bottom d-flex align-items-center justify-content-between">
                                        <div className="blog__meta-author-10 d-flex align-items-center">
                                            <div className="blog__meta-author-thumb-10">
                                                <a href={constant.component.blogDetails.url}>
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
                    </div>
                ))
            }
        </>
    );
}

export default function Blog() {
    let itemsPerPage = 3;
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = blog.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(blog.length / itemsPerPage);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % blog.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <React.Fragment>
            <main>
                <section className="blog__breadcrumb">
                    <div className="blog__breadcrumb-slider p-relative">
                        <div className="blog__breadcrumb-slider-active swiper-container">
                            <div className="swiper-wrapper">
                                <div className="blog__breadcrumb-item blog__breadcrumb-height blog__breadcrumb-overlay include-bg d-flex align-items-end swiper-slide" style={{ backgroundImage: `url(${Img})` }}>
                                    <div className="container">
                                        <div className="col-xxl-8 col-xl-8 col-lg-10">
                                            <div className="blog__breadcrumb-thumb"></div>
                                            <div className="blog__breadcrumb-content">
                                                <div className="blog__breadcrumb-tag">
                                                    <a href="#">Business</a>
                                                </div>
                                                <h3 className="blog__breadcrumb-title">
                                                    <a href="blog-details.html">Investment Trend Monitor: Top Trends in 2023</a>
                                                </h3>

                                                <div className="blog__breadcrumb-meta">
                                                    <span>
                                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7.5 14C11.0899 14 14 11.0899 14 7.5C14 3.91015 11.0899 1 7.5 1C3.91015 1 1 3.91015 1 7.5C1 11.0899 3.91015 14 7.5 14Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M7.5 3.59961V7.49961L10.1 8.79961" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg> October 24, 2022
                                                    </span>
                                                    <span>
                                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M12.9718 6.66668C12.9741 7.54659 12.769 8.4146 12.3732 9.20001C11.9039 10.1412 11.1825 10.9328 10.2897 11.4862C9.39697 12.0396 8.36813 12.3329 7.31844 12.3333C6.4406 12.3356 5.57463 12.13 4.79106 11.7333L1 13L2.26369 9.20001C1.86791 8.4146 1.66281 7.54659 1.6651 6.66668C1.66551 5.61452 1.95815 4.58325 2.51025 3.68838C3.06236 2.79352 3.85211 2.0704 4.79106 1.60002C5.57463 1.20331 6.4406 0.997725 7.31844 1.00002H7.65099C9.03729 1.07668 10.3467 1.66319 11.3284 2.64726C12.3102 3.63132 12.8953 4.94378 12.9718 6.33334V6.66668Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>35
                                                    </span>
                                                    <span>
                                                        <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M11.0443 7.00397C11.0443 8.43962 9.88694 9.59974 8.45466 9.59974C7.02238 9.59974 5.86499 8.43962 5.86499 7.00397C5.86499 5.56832 7.02238 4.4082 8.45466 4.4082C9.88694 4.4082 11.0443 5.56832 11.0443 7.00397Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M8.45466 13C11.0082 13 13.3881 11.4918 15.0446 8.88157C15.6956 7.85921 15.6956 6.14078 15.0446 5.11843C13.3881 2.50816 11.0082 1 8.45466 1C5.90115 1 3.52126 2.50816 1.86474 5.11843C1.21371 6.14078 1.21371 7.85921 1.86474 8.88157C3.52126 11.4918 5.90115 13 8.45466 13Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>234,5k
                                                    </span>
                                                </div>
                                                <div className="blog__breadcrumb-btn">
                                                    <a href="blog-details.html" className="tp-btn-border-2">Continue Reading</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog__breadcrumb-item blog__breadcrumb-height blog__breadcrumb-overlay include-bg d-flex align-items-end swiper-slide" data-background="assets/img/blog/breadcrumb/blog-breadcrumb-slider-2.jpg">
                                    <div className="container">
                                        <div className="col-xxl-8 col-xl-8 col-lg-10">
                                            <div className="blog__breadcrumb-thumb"></div>
                                            <div className="blog__breadcrumb-content">
                                                <div className="blog__breadcrumb-tag">
                                                    <a href="#">Creative</a>
                                                </div>
                                                <h3 className="blog__breadcrumb-title">
                                                    <a href="">Things Your Boss Needs To Know Agency Industry.</a>
                                                </h3>

                                                <div className="blog__breadcrumb-meta">
                                                    <span>
                                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7.5 14C11.0899 14 14 11.0899 14 7.5C14 3.91015 11.0899 1 7.5 1C3.91015 1 1 3.91015 1 7.5C1 11.0899 3.91015 14 7.5 14Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M7.5 3.59961V7.49961L10.1 8.79961" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg> October 24, 2022
                                                    </span>
                                                    <span>
                                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M12.9718 6.66668C12.9741 7.54659 12.769 8.4146 12.3732 9.20001C11.9039 10.1412 11.1825 10.9328 10.2897 11.4862C9.39697 12.0396 8.36813 12.3329 7.31844 12.3333C6.4406 12.3356 5.57463 12.13 4.79106 11.7333L1 13L2.26369 9.20001C1.86791 8.4146 1.66281 7.54659 1.6651 6.66668C1.66551 5.61452 1.95815 4.58325 2.51025 3.68838C3.06236 2.79352 3.85211 2.0704 4.79106 1.60002C5.57463 1.20331 6.4406 0.997725 7.31844 1.00002H7.65099C9.03729 1.07668 10.3467 1.66319 11.3284 2.64726C12.3102 3.63132 12.8953 4.94378 12.9718 6.33334V6.66668Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>35
                                                    </span>
                                                    <span>
                                                        <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M11.0443 7.00397C11.0443 8.43962 9.88694 9.59974 8.45466 9.59974C7.02238 9.59974 5.86499 8.43962 5.86499 7.00397C5.86499 5.56832 7.02238 4.4082 8.45466 4.4082C9.88694 4.4082 11.0443 5.56832 11.0443 7.00397Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M8.45466 13C11.0082 13 13.3881 11.4918 15.0446 8.88157C15.6956 7.85921 15.6956 6.14078 15.0446 5.11843C13.3881 2.50816 11.0082 1 8.45466 1C5.90115 1 3.52126 2.50816 1.86474 5.11843C1.21371 6.14078 1.21371 7.85921 1.86474 8.88157C3.52126 11.4918 5.90115 13 8.45466 13Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>234,5k
                                                    </span>
                                                </div>
                                                <div className="blog__breadcrumb-btn">
                                                    <a href="blog-details.html" className="tp-btn-border-2">Continue Reading</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog__breadcrumb-item blog__breadcrumb-height blog__breadcrumb-overlay include-bg d-flex align-items-end swiper-slide" data-background="assets/img/blog/breadcrumb/blog-breadcrumb-slider-3.jpg">
                                    <div className="container">
                                        <div className="col-xxl-8 col-xl-8 col-lg-10">
                                            <div className="blog__breadcrumb-thumb"></div>
                                            <div className="blog__breadcrumb-content">
                                                <div className="blog__breadcrumb-tag">
                                                    <a href="#">Agency</a>
                                                </div>
                                                <h3 className="blog__breadcrumb-title">
                                                    <a href="blog-details.html">The Reasons Why We Love The Agency Industry.</a>
                                                </h3>

                                                <div className="blog__breadcrumb-meta">
                                                    <span>
                                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7.5 14C11.0899 14 14 11.0899 14 7.5C14 3.91015 11.0899 1 7.5 1C3.91015 1 1 3.91015 1 7.5C1 11.0899 3.91015 14 7.5 14Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M7.5 3.59961V7.49961L10.1 8.79961" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg> October 24, 2022
                                                    </span>
                                                    <span>
                                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M12.9718 6.66668C12.9741 7.54659 12.769 8.4146 12.3732 9.20001C11.9039 10.1412 11.1825 10.9328 10.2897 11.4862C9.39697 12.0396 8.36813 12.3329 7.31844 12.3333C6.4406 12.3356 5.57463 12.13 4.79106 11.7333L1 13L2.26369 9.20001C1.86791 8.4146 1.66281 7.54659 1.6651 6.66668C1.66551 5.61452 1.95815 4.58325 2.51025 3.68838C3.06236 2.79352 3.85211 2.0704 4.79106 1.60002C5.57463 1.20331 6.4406 0.997725 7.31844 1.00002H7.65099C9.03729 1.07668 10.3467 1.66319 11.3284 2.64726C12.3102 3.63132 12.8953 4.94378 12.9718 6.33334V6.66668Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>35
                                                    </span>
                                                    <span>
                                                        <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M11.0443 7.00397C11.0443 8.43962 9.88694 9.59974 8.45466 9.59974C7.02238 9.59974 5.86499 8.43962 5.86499 7.00397C5.86499 5.56832 7.02238 4.4082 8.45466 4.4082C9.88694 4.4082 11.0443 5.56832 11.0443 7.00397Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M8.45466 13C11.0082 13 13.3881 11.4918 15.0446 8.88157C15.6956 7.85921 15.6956 6.14078 15.0446 5.11843C13.3881 2.50816 11.0082 1 8.45466 1C5.90115 1 3.52126 2.50816 1.86474 5.11843C1.21371 6.14078 1.21371 7.85921 1.86474 8.88157C3.52126 11.4918 5.90115 13 8.45466 13Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>234,5k
                                                    </span>
                                                </div>
                                                <div className="blog__breadcrumb-btn">
                                                    <a href="blog-details.html" className="tp-btn-border-2">Continue Reading</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog__breadcrumb-item blog__breadcrumb-height blog__breadcrumb-overlay include-bg d-flex align-items-end swiper-slide" data-background="assets/img/blog/breadcrumb/blog-breadcrumb-slider-4.jpg">
                                    <div className="container">
                                        <div className="col-xxl-8 col-xl-8 col-lg-10">
                                            <div className="blog__breadcrumb-thumb"></div>
                                            <div className="blog__breadcrumb-content">
                                                <div className="blog__breadcrumb-tag">
                                                    <a href="#">Latest</a>
                                                </div>
                                                <h3 className="blog__breadcrumb-title">
                                                    <a href="blog-details.html">Here's What Industry Insiders Say About Agency.</a>
                                                </h3>

                                                <div className="blog__breadcrumb-meta">
                                                    <span>
                                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7.5 14C11.0899 14 14 11.0899 14 7.5C14 3.91015 11.0899 1 7.5 1C3.91015 1 1 3.91015 1 7.5C1 11.0899 3.91015 14 7.5 14Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M7.5 3.59961V7.49961L10.1 8.79961" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg> October 24, 2022
                                                    </span>
                                                    <span>
                                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M12.9718 6.66668C12.9741 7.54659 12.769 8.4146 12.3732 9.20001C11.9039 10.1412 11.1825 10.9328 10.2897 11.4862C9.39697 12.0396 8.36813 12.3329 7.31844 12.3333C6.4406 12.3356 5.57463 12.13 4.79106 11.7333L1 13L2.26369 9.20001C1.86791 8.4146 1.66281 7.54659 1.6651 6.66668C1.66551 5.61452 1.95815 4.58325 2.51025 3.68838C3.06236 2.79352 3.85211 2.0704 4.79106 1.60002C5.57463 1.20331 6.4406 0.997725 7.31844 1.00002H7.65099C9.03729 1.07668 10.3467 1.66319 11.3284 2.64726C12.3102 3.63132 12.8953 4.94378 12.9718 6.33334V6.66668Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>35
                                                    </span>
                                                    <span>
                                                        <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M11.0443 7.00397C11.0443 8.43962 9.88694 9.59974 8.45466 9.59974C7.02238 9.59974 5.86499 8.43962 5.86499 7.00397C5.86499 5.56832 7.02238 4.4082 8.45466 4.4082C9.88694 4.4082 11.0443 5.56832 11.0443 7.00397Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M8.45466 13C11.0082 13 13.3881 11.4918 15.0446 8.88157C15.6956 7.85921 15.6956 6.14078 15.0446 5.11843C13.3881 2.50816 11.0082 1 8.45466 1C5.90115 1 3.52126 2.50816 1.86474 5.11843C1.21371 6.14078 1.21371 7.85921 1.86474 8.88157C3.52126 11.4918 5.90115 13 8.45466 13Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>234,5k
                                                    </span>
                                                </div>
                                                <div className="blog__breadcrumb-btn">
                                                    <a href="blog-details.html" className="tp-btn-border-2">Continue Reading</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="blog-slider-dot-breadcrumb tp-swiper-dot"></div>
                    </div>
                </section>

                <section className="blog__grid grey-bg-4 pt-90 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-12">
                                <div className="section__title-wrapper section-title-sm mb-60">
                                    <h3 className="section__title">
                                        Our latest
                                        <span className="section__title-highlight">articles
                                            <svg width="220" height="27" viewBox="0 0 220 27" fill="none">
                                                <path className="wow" d="M19.6407 15.2948C33.4481 12.464 47.2752 10.3031 61.24 8.63481C48.6133 9.07487 35.9865 9.33103 23.3729 9.29162C22.4743 9.29162 21.7396 8.54942 21.7396 7.64958C21.7462 6.74318 22.4808 6.00754 23.386 6.00754C60.8398 6.12577 138.464 3.57728 175.839 1.69222C185.81 1.18648 195.563 0.739778 205.534 0.477052C208.079 0.41137 210.63 0.280046 213.175 0.188091C214.5 0.142114 217.924 -0.0286769 218.403 0.0041639C219.761 0.0895499 219.964 1.27179 219.984 1.4557C220.036 1.8892 220.003 2.53954 219.242 3.03215C219.19 3.07156 218.895 3.25544 218.232 3.33426C181.198 7.74806 103.764 7.1897 66.6842 11.3079C51.0861 13.0485 35.6783 15.3606 20.3032 18.5133C14.9311 19.6102 11.8678 20.3064 7.57803 21.4493C14.649 23.3081 21.8971 24.3393 29.2173 24.891C29.2173 24.891 19.6407 27.474 12.386 25.9286C5.13134 24.3833 4.9674 24.221 1.33353 23.0321C0.493934 22.7628 0.238148 22.2375 0.133199 21.955C-0.0963783 21.3639 -0.0701445 20.7136 0.539874 20.1159C0.703857 19.9583 1.01869 19.7349 1.51064 19.5773C2.15346 19.3737 3.48499 19.1636 4.08189 18.9994C9.9853 17.3705 13.1535 16.6216 19.6407 15.2948Z" fill="currentColor" />
                                            </svg>
                                        </span>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <Items currentItems={currentItems} />
                        </div>
                        <div className="row">
                            <div className="col-xxl-12">
                                <div className="tp-pagination mt-20">
                                    {/* <nav>
                                        <ul>
                                            <li>
                                                <a href="blog.html" className="tp-pagination-prev prev page-numbers">
                                                    <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6.17749 10.105L1.62499 5.55248L6.17749 0.999981" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M14.3767 5.55249L1.75421 5.55249" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                    Prev
                                                </a>
                                            </li>
                                            <li>
                                                <a href="blog.html">1</a>
                                            </li>
                                            <li>
                                                <span className="current">2</span>
                                            </li>
                                            <li>
                                                <a href="blog.html">3</a>
                                            </li>
                                            <li>
                                                <a href="blog.html" className="next page-numbers">
                                                    Next
                                                    <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9.82422 1L14.3767 5.5525L9.82422 10.105" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M1.625 5.55249H14.2475" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav> */}
                                    <ReactPaginate
                                        breakLabel="..."
                                        onPageChange={handlePageClick}
                                        pageRangeDisplayed={2}
                                        activeLinkClassName={"btnactive"}
                                        onPageActive={currentItems}
                                        pageCount={pageCount}
                                        renderOnZeroPageCount={null}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </React.Fragment>
    )
}
