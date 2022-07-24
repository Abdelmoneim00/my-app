import React from "react"
import discord from "../images/discord-log.png"
import ProjectComp from "./smallComponents/ProjectComponent";


function  Projects() {



    return(

        <section className="Projects">
            <div className="Title" >
                <h3>Projects i'm proud of.</h3>
            </div>
            <div className="Projects-containter">
                <ProjectComp src={discord}/>
                <div className="Projects-menu">
                    <nav className="Projects-nav">
                        <ul id="menu-element">Sleepy bot</ul>
                        <ul id="menu-element">Wheather app</ul>
                        <ul id="menu-element">Note app</ul>
                        <ul id="menu-element">Tenzies game</ul>
                    </nav>
                </div>
            </div>
        </section>

    )




}


export default Projects;