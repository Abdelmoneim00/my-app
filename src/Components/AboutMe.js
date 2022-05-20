import React from "react";




function AboutMe() {
    

    function viewSection() {
        const element = document.getElementById("viewpoint");
        const rect = element.getBoundingClientRect();
        if(rect.top <= 300) {
            const headero = document.getElementById("header-animation");
            headero.innerHTML = "Abdel-moneim Ibrahim";
            headero.classList.add("AboutMe-h1");
            const pHeader = document.getElementById('fr-en');
            setInterval(() => {
                pHeader.innerHTML = "Front-End Developer";
                pHeader.classList.add("pAnimation");
            }, 1000);
        }
    }

    document.addEventListener('scroll', (viewSection));
    

   


    return (
    <section className="About-me" id="About-me">
        <div className="Header-flex">
        <h1 id="header-animation"></h1>
        <p id="fr-en"></p>
        </div>
        <div id="viewpoint">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </section>    
    )
    
}



export default AboutMe