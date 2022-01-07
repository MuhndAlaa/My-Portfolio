import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
import "./technologies.scss";
import {techs} from "../technologies/techs";
export default function Technologies(){

    
    function hoverIn(e){
        const imgs = document.querySelectorAll(".tech");
        imgs.forEach(elem=>{
            if(e.target !== elem)elem.style.filter = "grayScale(1)";
        })
    }

    function hoverOut(){
        const imgs = document.querySelectorAll(".tech");
        imgs.forEach(elem=>{
            elem.style.filter="grayscale(0)";
        })
    }

    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        gsap.from("#technologies .tech", { x: -1200, duration: 1, scrollTrigger: { trigger: "#technologies", start: "top 90%" } });
    })
    return(
        <section className="technologies" id="technologies">
            {techs.map((elem , i)=>(
                <img onMouseEnter={hoverIn} onMouseLeave={hoverOut} className="tech" src={elem} key={i} alt={elem} />
            ))}
        </section>
    )
}