import React from 'react'
import Title from '../components/Title'
import ImageSection from '../components/ImageSection'
import SkillSection from '../components/SkillSection'
import ServiceSection from '../components/ServiceSection'
import { design,intelligence,game_dev } from '../img/index'

function AboutPage() {
    return (
        <div className="Aboutpage">
            <Title title={'About Me'}></Title>
            <ImageSection/>
            <Title title={'My Skills'}></Title>
            <div className="skills-container">
                <SkillSection skill={'Javascript'} progress={'70%'} width={`70%`}/>
                <SkillSection skill={'CSS'} progress={'75%'} width={`75%`}/>
                <SkillSection skill={'HTML'} progress={'65%'} width={`65%`}/>
                <SkillSection skill={'Python'} progress={'50%'} width={`50%`}/>
                <SkillSection skill={'React JS'} progress={'60%'} width={`60%`}/>
            </div>
            <Title title={'My Services'}></Title>
            <div className="service-container">
                <ServiceSection image={design} title={'Web Design'}/>
                <ServiceSection image={intelligence} title={'Intelligence'}/>
                <ServiceSection image={game_dev} title={'Game Development'}/>
            </div>
        </div>
    )
}

export default AboutPage
