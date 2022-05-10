import React, { useEffect, useState } from "react";
import Canada from "../images/Canada.jpg"
import Tokyo from "../images/Tokyo.jpg"
import Coding from "../images/Coding3.jpg"
import southKorea from "../images/southKorea.jpg"


function AboutMe() {
    return (
    <section className="About-me">
        <h1>About me</h1>
        <div className="container">
            <div className="hobbies-images">
                <img src={southKorea} alt="image"></img>
                <img src={Tokyo} alt="image"></img>
                <img src={Coding} alt="image"></img>
                <img src={Canada} alt="image"></img>
            </div>
        </div>
    </section>    
    )
}

export default AboutMe