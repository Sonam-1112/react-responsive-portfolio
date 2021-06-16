import React from 'react'
import { about_png } from '../img/index'

function ImageSection() {
    return (
        <div className="Imagesection">
            <div className="img">
                <img src={about_png} alt="" />
                <button className="btn">Download CV</button>
            </div>
            <div className="about-info">
                <h4>I am <span>Lorem Ipsum</span></h4>
                <p className="about-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt deserunt dignissimos voluptas, at dolorum magni?
                </p>
                <div className="about-details">
                    <div className="name-details">
                        <p>Full Name</p>
                        <p>: Lorem Ipsum</p>
                    </div>
                    <div className="name-details">
                        <p>Age</p>
                        <p>: 20</p>
                    </div>
                    <div className="name-details">
                        <p>Nationality</p>
                        <p>: Indian</p>
                    </div>
                    <div className="name-details">
                        <p>Languages Known</p>
                        <p>: Hindi, English, Marathi</p>
                    </div>
                    <div className="name-details">
                        <p>Address</p>
                        <p>: Gujarat</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageSection
