import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Data from '../../data/data.json';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Gallery() {
  const { id } = useParams();
  const [data, setData] = useState({
    pictures: []
  });
  const [currentPicture, setCurrentPicture] = useState(0);

  useEffect(() => {
    const selectedLocation = Data.find((Data) => Data.id === id);
    setData(selectedLocation);
  }, [id]);

  const picturesLength = data.pictures.length;

  const nextPicture = () => {
    setCurrentPicture(currentPicture === picturesLength - 1 ? 0 : currentPicture + 1);
  }

  const prevPicture = () => {
    setCurrentPicture(currentPicture === 0 ? picturesLength - 1 : currentPicture - 1);
  }

  const chevronClass = picturesLength === 1 ? "notActiveChevron" : "activeChevron";

  return (
    <section className="gallery">
      {data.pictures.map((picture, index) => (
        <article
          className={index === currentPicture ? "gallery__picture active" : "gallery__picture"}
          key={index}
        >
          {index === currentPicture && (
            <div
              className="currentPicture-box"
              style={{ backgroundImage: `url(${picture})` }}
            >
              <FiChevronLeft className={chevronClass} onClick={prevPicture} />
              <FiChevronRight className={chevronClass} onClick={nextPicture} />
            </div>
          )}
        </article>
      ))}
    </section>
  );
}

export default Gallery;