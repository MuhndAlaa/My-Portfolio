import { gsap } from "gsap/all";
import { useEffect } from "react";
// import { options } from "./particles-option";
// import Particles from "react-tsparticles";
import StarfieldAnimation from 'react-starfield-animation';
import "./header.scss";
export default function Header() {
    useEffect(() => {
        const tl = gsap.timeline({defaults:{ease:'power1.out'}})
        tl.to("#header .text",{y:"0%" , duration:1 , stagger:0.25});
        tl.to("#header .trans",{y:"-100%" , duration:1.5,delay:1});
        tl.to("#header .intro",{y:"-100%" , duration:1},"-=1.25");
        tl.fromTo("#header .header__content" , {opacity:0} , {opacity:1 , duration:1.5})
    })
    return (
        <>
            <header id="header">
                {/* <Particles id="particles-bg" options={options}/> */}
                <StarfieldAnimation style={{ position: 'absolute', width: '100%', height: '100%'  , zIndex: "1"}}/>
                <div className="header__content">
                    <h1>
                        Hi, I'm <span>Mohanad Olimy</span> <br/>
                        I'm a front-end developer
                    </h1>
                    <a href="#projects">View my projects</a>
                </div>
                <div className="intro">
                    <div className="intro__content">
                        <h1 className="hide">
                            <span className="text">Loving What you do,</span>
                        </h1>
                        <h1 className="hide">
                            <span className="text">Is the only way to do</span>
                        </h1>
                        <h1 className="hide">
                            <span className="text work">Great Work.</span>
                        </h1>
                    </div>
                </div>
                <div className="trans">
                </div>
            </header>
        </>
    )
}