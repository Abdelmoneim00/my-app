import React from "react"



function Header() {

    function scrollAbout() {
        const AboutElement = document.getElementById('About-me');
        AboutElement.scrollIntoView({behavior : "smooth"})
    }


    return(
        <div className="header">
            <div className="bg-image">
                <nav className="nav-bar">
                    <span>Home</span>
                    <span onClick={scrollAbout}>About me</span>
                    <span>Projects</span>
                    <span>Contact me</span>
                </nav>
                <div className="Head-typo">
                    <h1>Create your own website</h1>
                    <h3>
                        Whatever the purpose of your website is,
                        I can make it work for you with todays technology.
                    </h3>
                    <p>get to know me in next section</p>
                    <button onClick={scrollAbout}>Know more</button>
                </div>
            </div>
        </div>
    )
}

export default Header