import React from "react"
import discord from "../images/discord-log.png"
import ProjectComp from "./smallComponents/ProjectComponent";


function  Projects() {



    return(

        <section className="Projects">
            <div className="Title" >
                    <h3>Projects i'm proud of.</h3>
                </div>
                <div className="Projects-Dashboard">
                    <div className="Main-project">

                    </div>
                    <nav id="project-slide">
                        <span id="nav-element"><i className="fa-solid fa-cloud"></i></span>
                        <span id="nav-element"><i className="fa-solid fa-cloud"></i></span>
                        <span id="nav-element"><i className="fa-solid fa-cloud"></i></span>
                        <span id="nav-element"><i className="fa-solid fa-cloud"></i></span>
                    </nav>
                </div>
            <div className="Projects-containter">
                <ProjectComp src={discord}/>
            </div>
        </section>

    )




}


export default Projects;