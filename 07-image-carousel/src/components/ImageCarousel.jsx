import { useState, useEffect } from "react";
export default function ImageCarousel({ images = [] }) {

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleArrow = (pos) => {
    let newCurrentIndex = currentIndex;
    if (pos === 'left' && currentIndex > 0) {
      newCurrentIndex = currentIndex - 1;
    } else if (pos === 'right' && currentIndex < images.length - 1) {
      newCurrentIndex = currentIndex + 1;
    }
    setCurrentIndex(newCurrentIndex)
  }

  return (
    <div>
      <div className="carousel">
        <img src={images[currentIndex].src} alt={images[currentIndex].alt} />
        <div className="carousel-controls">
          {currentIndex > 0 && <button onClick={() => handleArrow('left')}>Arrow Left</button>}
          {currentIndex < images.length - 1 && <button onClick={() => handleArrow('right')}>Arrow Right</button>}
        </div>

        <div className="indicators">
          {images.map((data, index) => (
            <div className={`${index === currentIndex ? 'active' : ''}`} onClick={() => setCurrentIndex(index)}></div>
          ))}
        </div>
      </div>
    </div>
  );
}
