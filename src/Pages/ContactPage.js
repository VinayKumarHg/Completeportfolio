import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Tittle from '../Components/Tittle';

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={'About Me'} span={'About Me'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123918.09152973087!2d75.49467341354922!3d13.93236556546873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbba8d0ec620495%3A0x5589d733c2761a17!2sShivamogga%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1624362911291!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+91 8747944483'} text2={''} title={'Phone'}/>
                    <ContactItem icon={email} text1={'hgvinay68@gmail.com'} text2={''} title={'Email'}/>
                    <ContactItem icon={location} text1={'Shivamogga,Karnataka'} text2={'INDIA'} title={'Address'}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;
