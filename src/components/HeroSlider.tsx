import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import styled, { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  .swiper-slide {
    opacity: 0 !important;
    pointer-events: none;
    transition: opacity 1s ease;
  }
  .swiper-slide-active {
    opacity: 1 !important;
    pointer-events: auto;
  }
`;

const SlideWrapper = styled.div<{ bgImage: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 550px;
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
  position: relative;
  text-align: center;
  overflow: hidden;

 
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  
  .content {
    position: relative;
    z-index: 2;
    color: #fff;
    opacity: 0;
    transform: scale(0.95);
    transition: opacity 1s ease, transform 1s ease;
  }

  .swiper-slide-active & .content {
    opacity: 1;
    transform: scale(1);
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
`;

const ExploreButton = styled.button`
  padding: 0.75rem 2rem;
  font-size: 1rem;
  background: #22c55e;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #16a34a;
  }
`;

const slides = [
  {
    title: 'Fresh Vegetables',
    description: 'Quality greens delivered to your doorstep.',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    title: 'Juicy Seasonal Fruits',
    description: 'Nature’s sweetest offerings just a click away.',
    image: 'https://images.pexels.com/photos/7782949/pexels-photo-7782949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    title: 'Farm-Fresh Dairy',
    description: 'Pure goodness straight from local farms.',
    image: 'https://www.feesers.com/wp-content/uploads/2020/02/iStock-910881428-scaled.jpg',
  },
];

const HeroSlider: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Swiper
        modules={[EffectFade, Pagination, Autoplay]}
        effect="fade"
        loop
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        fadeEffect={{ crossFade: true }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <SlideWrapper bgImage={slide.image}>
              <div className="content">
                <Title>{slide.title}</Title>
                <Description>{slide.description}</Description>
                <ExploreButton>Explore Now</ExploreButton>
              </div>
            </SlideWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HeroSlider;
