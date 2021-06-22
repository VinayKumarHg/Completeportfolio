import React from 'react';
import about from '../img/about.jpg';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>I am<span> Vinay Kumar.</span></h4>
                <p className="about-text">
               <li> 1+ year of experience as a Dot Net developer in NTT DATA GLOBAL SERVICES.</li>
               <li> 1+ Years background in .NET development analysis, design, development, and execution of business applications.</li>
               <li> Programming experience using .Net framework 4.0, 4.5, MS Visual Studio .Net, ASP.NET, C#, MVC.</li>
               <li> About 1 years of working knowledge in E commerce using InSite Commerce (4.2).</li>

                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p>Country</p>
                    </div>
                    <div className="right-section">
                        <p>: Vinay Kumar</p>
                        <p>: 24</p>
                        <p>: INDIAN</p>
                        <p>: English,Kannada,Hindi</p>
                        <p>: Shivamogga,Karnataka</p>
                        <p>: INDIA</p>
                    </div>
                </div>
                <button className="btn">Download Cv</button>
            </div>
        </div>
    )
}

export default ImageSection;
