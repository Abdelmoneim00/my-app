import React, { useEffect, useState } from "react";
import Canada from "../images/Canada.jpg"
import Tokyo from "../images/Tokyo.jpg"
import NewYork from "../images/NewYork.jpg"
import southKorea from "../images/southKorea.jpg"


function AboutMe() {
    const [image, setImage] = useState(NewYork);
  const [imageIndex, setImageIndex] = useState(0);
  const imgArray = [NewYork, Tokyo, Canada, southKorea];

  let i = 0;
  const maxImgArray = imgArray.length - 1;

  useEffect(() => {
    let interval = null;
    if (i !== maxImgArray) {
      interval = setInterval(() => {
        let image = imgArray[imageIndex];
        const attr = document.getElementById("moving-image");
        attr.src = image;
        // update the img index to state
        setImageIndex((imageIndex) =>
          imageIndex === maxImgArray ? 0 : imageIndex + 1
        );
        // update the src in state.
        setImage(attr.src);
      }, 5000);
    }
    // When our code runs and reruns for every render, useEffect also cleans up after itself using the cleanup function.
    // Here we clear the interval to remove the effects that could happen with state change while interval.
    return () => clearInterval(interval);
  }, [image, imageIndex]); // when image, imageIndex gets change, useEffect will be triggered.


    return (
    <section className="About-me">
        <h1>About me</h1>
        <div className="container">
        <div className="cities-images">
            <img 
            src={Tokyo}
            alt="NewYork" id="moving-image"></img>
        </div>
            <div className="info">
                <p>Abdel-moneim Arabi Ibrahim</p>
            </div>
        </div>
    </section>    
    )
}

export default AboutMe