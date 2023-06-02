import React from 'react'
import './Contact.css'
export default function Contact() {
  return (
    <div className="contact">
        <h2>Contact Us</h2>
        <div className="contact-hu">
            <div className="first-co">
            <i class="fa-solid fa-blender-phone"></i>
                <h3>BY PHONE</h3>
                <div>
                    <p>(Monday to Friday ,9am to 4pm IST)</p>
                    <h4>INDIA Toll Free:</h4>
                    <p>1-800-123-136</p>
                    <h4>INTERNATIONAL</h4>
                    <p>1-604-224-231</p>
                </div>
            </div>
            <div className="second-hu">
                
                <h3>START A NEW CASE</h3>
                <div className="kya">
                    <p>Just Sends us your questions or 
                        concerns by starting a new case and we 
                        will give you help you need.
                    </p>
                    <button>START HERE</button>
                </div>
            </div>
            <div className="chat-kro">
                <h3>LIVE CHAT</h3>
                <div>
                    <p>Chat with our member of our house-in
                        team.
                    </p>
                    <button>START CHAT</button>
                </div>
            </div>
        </div>
    </div>
  )
}
