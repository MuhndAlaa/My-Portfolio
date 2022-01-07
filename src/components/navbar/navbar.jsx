import "./navbar.scss";

export default function Navbar() {
    return (
        // <nav>
        //     <h3><span>Muhnd</span> Olimy</h3>
        //     <ul>
        //         <li><a href="#header">home</a></li>
        //         <li><a href="#about">about</a></li>
        //         <li><a href="#technologies">techs</a></li>
        //         <li><a href="#projects">projects</a></li>
        //         <li><a href="#contactEnd">contact</a></li>
        //     </ul>
        // </nav>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#header"><h3><span>Muhnd</span>Olimy</h3></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#header">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#technologies">Techs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contactEnd">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}