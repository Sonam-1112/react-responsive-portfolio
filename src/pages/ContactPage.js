import React from 'react'
import ContactItem from '../components/ContactItem'
import { phone, location, emailme } from '../img/index'
import Title from '../components/Title'

function ContactPage() {
    return (
        <div>
            <Title title={'Contact Me'}></Title>
            <div className="Contactpage">
                <div className="map-section">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15077.567683763495!2d72.92523417634652!3d19.134314292870098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c788a68363c1%3A0x84a156fa456a87e!2sKanjurmarg%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1623849780200!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
                </div>
                <div className="contact-section">
                    <ContactItem icon={phone} text1={'+257 7773874838'} text2={'+0333 4332 7388'} title={'Phone'} />
                    <ContactItem icon={emailme} text1={'abc@gmail.com'} text2={'xyz@gmail.com'} title={'Email'} />
                    <ContactItem icon={location} text1={'Mumbai'} text2={'Maharashtra'} title={'Address'} />
                </div>
            </div>
        </div>
    )
}

export default ContactPage
