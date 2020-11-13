import React from "react"
import BMLogo from "../../assets/logo_BM-04_smaller-04.png"
const style = {
    maxWidth: "500px",
    // transform: "rotateZ(90deg)"
}
export default function NavBar() {
    return (

        <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-white px-5 py-3">
            <a className="pr-0 pt-3" href="/">
                <img src={BMLogo} style={style} alt="github_logo" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end " id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active  mr-2">
                        <a className="nav-link" href="#">About Me</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Resume</a>
                    </li>

                </ul>
            </div>
        </nav>

    )
}