import React from 'react'
import {Link} from 'react-router-dom' 

function HomePage() {
    return (
        <div className="Homepage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I'm 
                    <span> Lorem Ipsum.</span>
                </h1>
                <p className="h-sub-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cum dolorum ullam debitis quibusdam illo, ducimus culpa assumenda esse iusto, suscipit a dolorem quaerat numquam molestias odit! Expedita, non molestiae.
                </p>
                <div className="icons">
                    <Link to="#"><i className="fa fa-facebook-f"></i></Link>
                    <Link to="#"><i className="fab fa-github"></i></Link>
                    <Link to="#"><i className="fab fa-youtube-square"></i></Link>
                </div>

            </header>
        </div>
    )
}

export default HomePage
