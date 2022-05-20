import React from "react"
import AboutMe from "./AboutMe"



function Header() {

    function scrollAbout() {
        const AboutElement = document.getElementById('About-me');
        AboutElement.scrollIntoView({behavior : "smooth"})
    }


    return(
        <div className="header">
            <div className="bg-image">
                <nav className="nav-bar">
                    <span href="#">Home</span>
                    <span href="#" onClick={scrollAbout}>About me</span>
                    <span href="#">Projects</span>
                    <span href="#">Contact me</span>
                </nav>
                <div className="Head-typo">
                    <h1>Create your own website</h1>
                    <h3>
                        Whatever the purpose of your website is,
                        I can make it work for you with todays technology.
                    </h3>
                    <p>get to know me in next section</p>
                    <button id="he" onClick={scrollAbout}>Know more</button>
                </div>
            </div>
        </div>
    )
}

export default Header