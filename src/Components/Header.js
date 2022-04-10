import React from "react"


function Header() {

    return(
        <div className="header">
            <div className="bg-image">
                <nav className="nav-bar">
                    <a href="#">Home</a>
                    <a href="#">About me</a>
                    <a href="#">Projects</a>
                    <a href="#">Contact me</a>
                </nav>
                <div className="Head-typo">
                    <h1>Create your own website</h1>
                    <h3>
                        Whatever the purpose of your website is,
                        I can make it work for you with todays technology.
                    </h3>
                    <p>get to know me in next section</p>
                    <button>Know more</button>
                </div>
            </div>
        </div>
    )
}

export default Header