import React from "react";


function ProjectComp(props) {

    return (
        <div className="Project-component">
            <div className="image-wrapper">
                <img src={props.src}></img>
                <span>{props.typo}</span>
            </div>
        </div>
    )
}

export default ProjectComp