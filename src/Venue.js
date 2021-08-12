import React from 'react'
import conference from './img/conference.png'

const Venue = () => {
    return (
        <div className="Item Venue Flex75">
            <h2 className="Title">VENUE</h2>
        <div className="Item-content">
            <p className="Item-p">Venue:
Turning Stone Casino Resort Conference Center</p>
<img src={conference} alt="Conference Room" className="Conference-img" />
<a href="https://turningstone.com" className="Turningstone-link">turningstone.com</a>
<iframe title="Google Map to Turning Stone" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46606.71394008029!2d-75.64976187281344!3d43.106204060682465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d973dc14c2ffbd%3A0x7bf71dd02d72ba2!2sTurning%20Stone%20Resort%20Casino!5e0!3m2!1sen!2sus!4v1628756833043!5m2!1sen!2sus" loading="lazy" className="Google-map"></iframe>
        </div>
        </div>
    )
}

export default Venue
