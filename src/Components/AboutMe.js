import React, { useEffect, useState } from "react";
import Canada from "../images/Canada.jpg"
import Tokyo from "../images/Tokyo.jpg"
import NewYork from "../images/NewYork.jpg"
import southKorea from "../images/southKorea.jpg"


function AboutMe() {
    return (
    <section className="About-me">
        <h1>About me</h1>
        <div className="container" id="h">
        <div className="hoppies-images">
            <img src={Tokyo} alt="Tokyo image" id="moving-image"></img>
            <div className="middle-images">
                <img src={NewYork} alt='NewYork image' id="middle-1"></img>
                <img src={southKorea} alt="South Korea" id="middle-2"></img>
            </div>
            <img src={Canada} alt="Canada"></img>
        </div>
            <div className="info">
                <p>Abdel-moneim Arabi Ibrahim</p>
            </div>
        </div>
    </section>    
    )
}

export default AboutMe