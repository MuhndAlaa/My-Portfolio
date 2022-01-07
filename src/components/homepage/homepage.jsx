import Header from "../header/header";
import About from "../about/about";
import Technologies from "../technologies/technologies";
import "./homepage.scss";
import Work from "../work/work";
import Contact from "../contact/contact";
import Navbar from "../navbar/navbar";

export default function Homepage(){
    return(
        <>
        <section className="main-content">
            <Header/>
            <Navbar/>
            <About/>
            <Technologies/>
            <Work/>
        </section>
        <Contact/>
        </>
    )
}