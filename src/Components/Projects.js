import React from "react"
import discord from "../images/discord-log.png"


function  Projects() {



    return(

        <section className="Projects">
            <div className="Title">
                    <h3>Projects i'm proud of.</h3>
                </div>
            <div className="Projects-containter">
                <div className="Project-component">
                    <div className="image-wrapper">
                        <img src={discord}></img>
                    </div>
                </div>
            </div>
        </section>

    )




}


export default Projects;