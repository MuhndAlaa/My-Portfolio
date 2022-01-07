import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
import profilePic from "../../assests/muhnd-pp.png";
import "./about.scss";


export default function About() {
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        gsap.from("#about h2", { x: -800, duration: 1, scrollTrigger: { trigger: "#about", start: "top 70%" } });
        gsap.from(".who-am-I figure", { x: -800, duration: 1, scrollTrigger: { trigger: "#about", start: "top 70%" } });
        gsap.from(".skills li", { x: 800, duration: 1, stagger: 0.25, scrollTrigger: { trigger: "#about", start: "top 70%" } });
    })
    return (
        <section id="about" className="about">
            <div className="container">
                <h2>About</h2>
                <div className="row">
                    <div className="col-md-6 col-sm-12 who-am-I">
                        <figure>
                            <img src={profilePic} alt="Muhnd profile" />
                            <figcaption>
                                <h3>Who am I ?</h3>
                                <p>
                                    I'm A Front-End Developer. Graduated from ITI Frontend development
                                    track, Who Have A Decent Knowledge To Deliver Impressive High Quality Work With Clean Code.
                                </p>
                            </figcaption>
                        </figure>

                    </div>
                    <ul className="col-md-6 col-sm-12 skills">
                        <li className="skill">Responsive layouts works on any device, big or small.</li>
                        <li className="skill">Dynamic Websites where pages come to life.</li>
                        <li className="skill">Deliver in short time and meet the deadlines.</li>
                        <li className="skill">Online presence and always in touch.</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}