import React from "react"
import discord from "../images/discord-log.png"
import ProjectComp from "./smallComponents/ProjectComponent";


function  Projects() {



    return(

        <section className="Projects">
            <div className="Title">
                    <h3>Projects i'm proud of.</h3>
                </div>
            <div className="Projects-containter">
                <ProjectComp src={discord} typo="bot app" />
                <ProjectComp src={discord} typo="bot app"/>
            </div>
        </section>

    )




}


export default Projects;