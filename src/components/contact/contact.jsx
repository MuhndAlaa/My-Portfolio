import { BsEnvelope, BsFillTelephoneFill, BsWhatsapp, BsGithub, BsLinkedin } from 'react-icons/bs';
import emailjs from '@emailjs/browser';
import "./contact.scss";
export default function Contact() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_tmimq0t', 'template_h3ydchy', e.target, 'user_5RI5DHqQKbrt7qdE85qJV')
            .then((result) => {
                console.log(result.text);
                document.querySelector("#msgSend").classList.remove("d-none");
            }, (error) => {
                console.log(error.text);
                document.querySelector("#msgUnSend").classList.remove("d-none");
            });
        e.target.reset();    
    }

    function clearMsg(){
        document.querySelector("#msgSend").classList.add("d-none");
        document.querySelector("#msgUnSend").classList.add("d-none");
    }
    return (
        <>
        <section id="contact" className="contact">
            <h2>Contact Me</h2>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12 contact__message">
                        <h3>Send  A Message</h3>

                        <form onSubmit={sendEmail} onFocus={clearMsg}>
                            <label htmlFor="">Name</label>
                            <input type="text" className="form-control" name="sender_name"/>

                            <label htmlFor="">Message</label>
                            <textarea className="form-control" rows="5" name="sender_message"></textarea>

                            <div id='msgSend' className='alert-success d-none  my-3 p-2'>Message sent successfully</div>
                            <div id='msgUnSend' className='alert-danger d-none  my-3 p-2'>Message didn't go through... try later</div>

                            <button className='btn btn-prime'>Send</button>
                            
                        </form>

                    </div>
                    <div className="col-md-6 col-sm-12 contact__reach">
                        <h3>Reach Me</h3>

                        <ul>
                            <li><i><BsEnvelope /></i><a target="_blank" rel="noreferrer" href="mailto:mohanad96alaa@gmail.com">Mohanad96alaa@gmail.com</a></li>
                            <li><i><BsFillTelephoneFill /></i><a arget="_blank" rel="noreferrer" href="tel:+201097954315">+20 1097954315</a></li>
                            <li><i><BsWhatsapp /></i><a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send/?phone=+201225191819">+20 1225191819 </a></li>
                            <li><i><BsGithub /></i><a target="_blank" rel="noreferrer" href="https://github.com/MuhndAlaa">MuhndAlaa</a></li>
                            <li><i><BsLinkedin /></i><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mohanad96alaa/">Mohanad96alaa</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </section>
        <span id="contactEnd"></span>
        </>
        
    )
}