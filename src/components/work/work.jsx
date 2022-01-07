import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
import { MdPreview, MdCode } from 'react-icons/md';
import { projects } from "./projects";
import { useState } from "react";
import "./work.scss";
export default function Work() {
    const [, setType] = useState("template");

    function selectType(e, type) {
        setType[0] = type;
        document.querySelectorAll(".projects .project-container").forEach(elem => {
            (elem.getAttribute("type") === type || (elem.getAttribute("main") === "true" & type === "all")) ? elem.classList.remove("d-none") : elem.classList.add("d-none");
        });
        document.querySelectorAll(".projects-types h4").forEach(elem => {
            elem.classList.remove("active");
        });
        e.target.classList.add("active");
    }

    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        gsap.fromTo("#projects .project", { scale: 0.7 }, { scale: 1, duration: 1, delay: 0.5, scrollTrigger: { trigger: "#projects", start: "top 70%" } });
    })
    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2>Projects</h2>
                <div className="projects-types">
                    <h4 onClick={(e) => { selectType(e, "all") }} className="active" >All</h4>
                    <h4 onClick={(e) => { selectType(e, "template") }}>Templates</h4>
                    <h4 onClick={(e) => { selectType(e, "js") }}>Vanilla Js</h4>
                    <h4 onClick={(e) => { selectType(e, "react") }}>React</h4>
                    <h4 onClick={(e) => { selectType(e, "angular") }}>Angular</h4>
                </div>
                <div className="row">
                    {projects.map((elem, index) => (
                        <div className={`col-lg-4 col-md-6 col-sm-12 project-container ${elem.main ?  '':'d-none' }`} key={index} type={elem.type} main={elem.main.toString()}>
                            <div className="project" >
                                <div className="project__img">
                                    <img src={elem.image} alt={elem.name} />
                                    <div className="links">
                                        <a href={elem.github} target="_blank" rel="noreferrer" className="code">Code <MdCode /></a>
                                        <a href={elem.preview} target="_blank" rel="noreferrer" className="preview">Preview <MdPreview /></a>
                                    </div>
                                </div>
                                <div className="project__content">
                                    <h5>{elem.name}</h5>
                                    <h6 className='project__badge'>{elem.type}</h6>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}