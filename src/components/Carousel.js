import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import Image from 'next/image';

export default function Carousel({
  slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0);

  const prev = () => setCurr(curr => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () => setCurr(curr => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide || !slides || slides.length === 0) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, next, slides]);

  if (!slides || slides.length === 0) {
    return null; // Or return a loading spinner, placeholder, etc.
  }

  return (
    <div className="w-full max-w-xl h-full overflow-hidden flex items-center justify-center">
      <div className="flex w-full h-full transition-transform ease-out duration-500" style={{ transform: `translateX(-${curr * 100}%)`, width: `${slides.length * 100}%` }}>
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 flex flex-col items-center justify-center p-4" style={{ marginTop: '-60px' }}>
            <div style={{ maxWidth: '500px', maxHeight: '400px' }}>
              <Image
                src={slide.img}
                alt={`Slide ${index}`}
                width={400}  // Adjust width as needed
                height={300}  // Adjust height as needed
                layout="responsive"
              />
            </div>
            <p className="text-center">{slide.par}</p>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button onClick={prev} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
          <ChevronLeft size={40} />
        </button>
        <button onClick={next} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
          <ChevronRight size={40} />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0 flex items-center justify-center gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`transition-all w-3 h-3 bg-dark dark:bg-light rounded-full ${curr === i ? "p-2" : "bg-opacity-50"}`}
          />
        ))}
      </div>
    </div>
  );
}