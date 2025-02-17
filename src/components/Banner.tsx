import { useState, useEffect } from 'react';

const slidesData = {
  pc: [
    { src: '/assets/image/luxeret_slider-pc.png', alt: '룩세렛 슬로건 PC 이미지' },
    { src: '/assets/image/luxeret-membership_slider-pc.png', alt: '룩세렛 멤버십 PC 이미지' },
    { src: '/assets/image/return_slider-pc.png', alt: '리턴 최적화 PC 이미지' },
  ],
  mobile: [
    { src: '/assets/image/luxeret_slider-mobile.png', alt: '룩세렛 슬로건 모바일 이미지' },
    { src: '/assets/image/luxeret-membership_slider-mobile.png', alt: '룩세렛 멤버십 모바일 이미지' },
    { src: '/assets/image/return_slider-mobile.png', alt: '리턴 최적화 모바일 이미지' },
  ],
};

const Banner = () => {
  const slidesCount = slidesData.pc.length; // PC와 모바일 모두 슬라이드 개수 동일
  const [index, setIndex] = useState(0);
  const [isPC, setIsPC] = useState(window.innerWidth > 768);

  // 창 크기에 따라 PC/모바일 여부 업데이트
  useEffect(() => {
    const handleResize = () => setIsPC(window.innerWidth > 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 6초마다 자동 슬라이드
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(i => (i + 1) % slidesCount);
    }, 6000);
    return () => clearInterval(interval);
  }, [slidesCount]);

  // 슬라이드 이동 스타일 (원본에서는 33.33%씩 이동)
  const sliderStyle = {
    transform: `translateX(-${index * 33.33}%)`,
    transition: 'transform 0.5s ease',
  };

  return (
    <section data-luxeret="luxeret-section-hero" className="section-hero">
      <div className="hero-content">
        <div className="slider">
          {/* PC 전용 슬라이드 */}
          <div className="slides pc" style={isPC ? sliderStyle : {}}>
            {slidesData.pc.map((slide, i) => (
              <div className="slide" key={i}>
                <img src={slide.src} alt={slide.alt} />
              </div>
            ))}
          </div>
          {/* 모바일 전용 슬라이드 */}
          <div className="slides mobile" style={!isPC ? sliderStyle : {}}>
            {slidesData.mobile.map((slide, i) => (
              <div className="slide" key={i}>
                <img src={slide.src} alt={slide.alt} />
              </div>
            ))}
          </div>
          <div className="controls">
            <button id="prev" onClick={() => setIndex((index - 1 + slidesCount) % slidesCount)}>
              &#10094;
            </button>
            <button id="next" onClick={() => setIndex((index + 1) % slidesCount)}>
              &#10095;
            </button>
          </div>
          <div className="indicator">
            {Array.from({ length: slidesCount }).map((_, i) => (
              <div key={i} className={`bar ${i === index ? 'active' : ''}`}></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
