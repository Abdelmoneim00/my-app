import React from "react";
import Personal from "../images/Personal.jpg"
import Professional from "../images/Professional.jpg"
import Coding from "../images/Coding.jpg"



function AboutMe() {
    const [personalTypo, setPersonalTypo] = React.useState(false);
    const [professionalTypo, setProfessionalTypo] = React.useState(true);
    function personalSwitcher() {
        setPersonalTypo(!personalTypo);
        setProfessionalTypo(professionalTypo === false )
        console.log(personalTypo);
    console.log(professionalTypo);
    }

    function professionalSwitcher() {
        setProfessionalTypo(!professionalTypo);
        setPersonalTypo(personalTypo === false )
        console.log(personalTypo);
    console.log(professionalTypo);
    }

    return (
    <section className="About-me">
        <h1>About me</h1>
        <div className="container">
            <div className="hobbies-images">
               <img src={Personal} alt="image"></img>
               <img src={Professional} alt="image"></img>
            </div>
            <div className="details-pointer">
                <span onClick={personalSwitcher}>personal information</span>
                <span onClick={professionalSwitcher}>professional information</span>
            </div>
            <div className="info-typography">
                {
                    personalTypo === true ? <h1>we did it</h1> : <h1>good job</h1>
                }
            </div>
        </div>
    </section>    
    )
}

export default AboutMe