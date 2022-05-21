import React from "react";
import Bolt from "../images/Bolt.svg"




function AboutMe() {

    const [view, setView] = React.useState();

    function viewSection() {
        const element = document.getElementById("viewpoint");
        const rect = element.getBoundingClientRect();
        if(rect.top <= 200) {
            const headero = document.getElementById("header-animation");
            headero.innerHTML = "Abdel-moneim Ibrahim";
            headero.classList.add("AboutMe-h1");
            const pHeader = document.getElementById('fr-en');
            setInterval(() => {
                pHeader.innerHTML = "Front-End Developer";
                pHeader.classList.add("pAnimation");
            }, 1000);
            setInterval(() => {setView(true)}, 2500)
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
            <div id="active">
               {
                   view === true &&
                   <div id="active-1">
                    <div className="group-flex">
                        <h2>About</h2>
                        <span className="material-symbols-outlined  h">person_pin</span>
                   </div>
                   <p>
                       I'm Abdel-Moneim Arabi Ibrahim, 22 year old from Egypt,
                       and don't be surprised if i tell that i still study accounting 
                       at Damanhour university, and yes i do study two fields at
                       the same time.
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
                   I beleieve practicing and sharing what you learn is
                   the key to grow and success in your journey, I've met and talked to
                   many people from different backgrounds and i know that as long as we communicate together
                   we can produce more than a single person can do alone.
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
                        HTML5 with badge in Linkedin, CSS3 with badge in Linkedin
                        Javascript, server-side and Client-side Javascript, React.js, node.js, webpack.

                    </p>
                    </div>
                }
            </div>
        </div>
    </section>    
    )
    
}



export default AboutMe