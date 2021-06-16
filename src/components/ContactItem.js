import React from 'react'

function ContactItem({icon,text1,text2,title}) {
    return (
        <div className="Contactitem">
            <div className="contact">
                <img src={icon} alt="" />
                <div className="right-items">
                    <h3>{title}</h3>
                    <p>{text1}</p>
                    <p>{text2}</p>
                </div>
            </div>
        </div>
    )
}

export default ContactItem
