import React from 'react'

function ServiceSection({image,title}) {
    return (
        <div className="Servicesection">
            <div className="service">
                <div className="service-content">
                <img src={image} alt="" />
                    <h5 className="service-title">{title}</h5>
                    <p className="service-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis quod necessitatibus, suscipit repellat dolores laborum.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ServiceSection
