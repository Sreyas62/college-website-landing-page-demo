'use client'
import "./styles.css";
import {MdLocationOn,MdEmail} from "react-icons/md";
import {IoMdContact} from "react-icons/io";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('contact_service', 'contact_form', form.current, 'w_O39RozvDOyOAUFd')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <div className="sec">
        {/* <section class="location">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.2002179315555!2d77.27999911492367!3d19.18645548702458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd1d7f29ec9d4b5%3A0x87c4833f7786ba8b!2sAvitulya%20Nivas!5e0!3m2!1sen!2sin!4v1677829762454!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section> */}
    
    <section className="contact-us">
        <h1 className="ccc">Contact us</h1>
        <div className="row">
            <div className="contact-col">
                <div>
                    <MdLocationOn className="ic" size="2.5em"/>               
                    <span>
                        <h5>College of Engineering Chengannur</h5>
                        <p>Chengannur P.O.
                            Alapuzha District<br />
                            Kerala
                            PIN 689121</p>
                    </span>
                </div>
                <div>
                <IoMdContact className="ic" size="2em"/>                     
                    <span>
                        <h5>+91 8848835546</h5>
                        <p>Monday to Saturday, 10AM to 6PM</p>
                    </span>
                </div>
                <div>
                <MdEmail className="ic" size="2em"/>                
                    <span>
                        <h5>principal@ceconline.edu</h5>
                        <p>Email your query</p>
                    </span>
                </div>
            </div>
            <div className="contact-col">
                <form action="submit" ref={form} onSubmit={sendEmail}>
                    <input className="ff" type="text" name="user_name" placeholder="Enter your name" required/>
                    <input type="email" name="user_email" placeholder="Enter email address" required/>
                    <input type="text" name="subject" placeholder="Enter your subject" required/>
                    <textarea rows="8" name="message" placeholder="Message" required></textarea>
                    <button type="submit" class="btn2" value="Send">Send Message</button>
                </form>
            </div>
        </div>
    </section>
    <h1 className="mm">Locate us</h1>
    <div className="map">
    
    <iframe
      title="Google Maps"
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7874.354761650065!2d76.617834!3d9.317546!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0622ea027eb08f%3A0x41105b207db821c6!2sCollege%20of%20Engineering%20Chengannur!5e0!3m2!1sen!2sus!4v1683437991768!5m2!1sen!2sus"
      width="1000"
      height="450"
      style={{ border: 0, borderRadius: "1em" }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
    </div>
    </div>
  )
}

export default Contact