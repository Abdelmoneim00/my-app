import React from "react";




function AboutMe() {

    const [view, setView] = React.useState();


    function viewSection() {
        const element = document.getElementById("viewpoint");
        const rect = element.getBoundingClientRect();
        if(rect.top <= 200) {
            const headero = document.getElementById("header-animation");
            headero.innerHTML = "Abdel-moneim Ibrahim";
            headero.classList.add("AboutMe-h1");
            setInterval(() => {setView(true)}, 2000)
        } 
    }

    document.addEventListener('scroll', (viewSection));
   


    return (
    <section className="About-me" id="About-me">
        <div className="Header-flex">
        <h1 id="header-animation"></h1>
        {view===true && <p className="pAnimation" id="fr-en">Front-End Developer</p>}
        </div>
        <div id="viewpoint">
            <div id="active">
               {
                   view === true &&
                   <div id="active-1">
                    <div className="group-flex">
                        <h2>About</h2>
                        <span className="material-symbols-outlined  h">person_pin</span>
                   </div>
                   <p>
                     I'm Abdel-Moneim Arabi Ibrahim, 22 years old from Egypt,
                     and don't be surprised if I say that I still study accounting at Damanhour University,
                     and yes, I do learn how to code and study accounting simultaneously.
                   </p>
                   </div>
               }
            </div>
            <div id="productive">
                {
                view === true &&
                <div id="active-1">
                <div className="group-flex">
                    <h2>Active</h2>
                    <span className="material-symbols-outlined  h">bolt</span>
               </div>
               <p>
                 I believe practicing and sharing what you learn is the key to growth and success in your journey,
                 I've met and talked to many people from different backgrounds and I know that as long as we 
                 communicate together we can produce more than a single person can do alone.
               </p>
               </div>
            }
            </div>
            <div id="skills">
                {
                     view === true &&
                     <div id="active-1">
                     <div className="group-flex">
                         <h2>Skills</h2>
                         <span className="material-symbols-outlined  h">home_repair_service</span>
                    </div>
                    <p>
                        HTML5 with a badge in Linkedin, CSS3 with a badge in Linkedin,
                        Javascript, Server-side and Client-side Javascript, React.js, Node.js, Webpack,
                        Git, Github.

                    </p>
                    </div>
                }
            </div>
        </div>
    </section>    
    )
    
}



export default AboutMe