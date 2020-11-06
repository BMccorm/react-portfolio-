import React from "react"

export default function NavBar() {
    return (

        <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-white px-5 py-3">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end " id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active mr-2">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item mr-2">
                        <a className="nav-link" href="#">About Me</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Projects</a>
                    </li>

                </ul>
            </div>
        </nav>

    )
}