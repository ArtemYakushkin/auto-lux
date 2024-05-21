import React, { useRef, useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Navigation,
  Pagination,
  Controller,
  Scrollbar,
} from "swiper/modules";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/parallax";
import "swiper/css/scrollbar";
import "./Slider.css";
import Modal from "../Modal/Modal";
import audi from "../../assets/audi-a8.jpg";
import mercedes from "../../assets/mercedes-s-class.jpg";
import bmw from "../../assets/bmw-7-series.jpg";

const sliderCatalog = [{ img: audi }, { img: mercedes }, { img: bmw }];

const sliderText = [
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sit architecto sequi unde reiciendis, enim quo commodi fugit atque? Sed ratione debitis ullam dolorem impedit recusandae maiores accusamus, voluptate pariatur!",
    btnText: "Order A8",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sit architecto sequi unde reiciendis, enim quo commodi fugit atque? Sed ratione debitis ullam dolorem impedit recusandae maiores accusamus, voluptate pariatur!",
    btnText: "Order S-class",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sit architecto sequi unde reiciendis, enim quo commodi fugit atque? Sed ratione debitis ullam dolorem impedit recusandae maiores accusamus, voluptate pariatur!",
    btnText: "Order 7 series",
  },
];

const Slider = () => {
  const sliderImageRef = useRef(null);
  const sliderTextRef = useRef(null);
  const gearRef = useRef(null);
  const currentSlideRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const slider = sliderImageRef.current;

    const handleSlideChange = () => {
      const newIndex = slider.realIndex + 1;
      if (slider.previousIndex !== undefined) {
        const direction = newIndex > currentIndex ? "+=60" : "-=60";
        gsap.to(gearRef.current, { rotation: direction, duration: 1.7 });
      }
      setCurrentIndex(newIndex);
      gsap.fromTo(
        currentSlideRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 }
      );
    };

    if (slider) {
      slider.on("slideChange", handleSlideChange);
    }
    return () => {
      if (slider) {
        slider.off("slideChange", handleSlideChange);
      }
    };
  }, [currentIndex]);

  const handleButtonClick = (content) => {
    setShowModal(true);
  };

  return (
    <div className="slider-container">
      <div className="slider-bottom">
        <div className="slider-share">
          <div className="slider-share__items">
            <a
              className="slider-share__item"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram size={30} />
            </a>
            <a
              className="slider-share__item"
              href="https://uk-ua.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF size={30} />
            </a>
            <a
              className="slider-share__item"
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaXTwitter size={30} />
            </a>
          </div>
        </div>
        <div className="slider-pagination">
          <div className="swiper-pagination"></div>
        </div>
        <div className="slider-scrollbar">
          <div className="swiper-scrollbar"></div>
        </div>
        <div className="slider-navigation">
          <div className="button-prev">
            <IoIosArrowBack size={15} />
          </div>
          <div className="button-next">
            <IoIosArrowForward size={15} />
          </div>
        </div>
      </div>

      <div className="slider-pagination-count">
        <span className="current" ref={currentSlideRef}>
          {currentIndex < 10 ? `0${currentIndex}` : currentIndex}
        </span>{" "}
        /{" "}
        <span className="total">
          {sliderCatalog.length < 10
            ? `0${sliderCatalog.length}`
            : sliderCatalog.length}
        </span>
      </div>

      <div className="slider-pagination-current">
        {currentIndex < 10 ? `0${currentIndex}` : currentIndex}{" "}
        <span className="slider-pagination-current-dot">.</span>
      </div>

      <div className="slider-gear" ref={gearRef}></div>

      <Swiper
        className="swiper-images"
        modules={[EffectCoverflow, Navigation, Controller]}
        speed={2000}
        onSwiper={(swiper) => (sliderImageRef.current = swiper)}
      >
        {sliderCatalog.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="slider-img__bg"
              style={{ backgroundImage: `url(${item.img})` }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        className="swiper-text"
        modules={[
          EffectCoverflow,
          Navigation,
          Pagination,
          Controller,
          Scrollbar,
        ]}
        navigation={{
          prevEl: ".button-prev",
          nextEl: ".button-next",
        }}
        slidesPerView={1}
        pagination={{
          clickable: true,
          el: ".slider-pagination",
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        scrollbar={{ el: ".slider-scrollbar", draggable: true }}
        speed={2000}
        onSwiper={(swiper) => {
          sliderTextRef.current = swiper;
          if (sliderImageRef.current) {
            swiper.controller.control = sliderImageRef.current;
            sliderImageRef.current.controller.control = swiper;
          }
        }}
      >
        {sliderText.map((item, index) => (
          <SwiperSlide className="slider-text" key={index}>
            <div className="slider-text__content">
              <h2 className="slider-text__title">
                Luxury car rental <span>for any</span> occasion
              </h2>
              <p className="slider-text__text">{item.text}</p>
              <button
                className="slider-text__btn"
                onClick={() => handleButtonClick(item.btnText)}
              >
                <span>{item.btnText}</span>
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Modal show={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default Slider;
