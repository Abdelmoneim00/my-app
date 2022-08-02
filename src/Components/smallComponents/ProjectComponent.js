import React from "react";


function ProjectComp(props) {

    return (
        <div className="Project-component">
            <div className="Project-head">
                <div className="image-wrapper">
                    <img src={props.src}></img>
                </div>
                <div className="charts">
                    <div className="yellow"></div>
                    <div className="green"></div>
                    <div className="red"></div>
                </div>
            </div>
        </div>
        
    )
}

export default ProjectComp