import React from "react"
import linkedIn from "../../assets/social_icons_02.png"
import GitHub from "../../assets/social_icons_01.png"

const style = {
    maxHeight: "30px",
}

export default function VerticalNav() {
    return (
        <div className="flex-column col-2 fixed-bottom mb-5">
            <a className="nav-link" href="https://www.linkedin.com/in/brielle-mccormick-7a9bbb54/">
                <img src={linkedIn} style={style} alt="linkedIn_logo" />
            </a>
            <a className="nav-link" href="https://github.com/BMccorm">
                <img src={GitHub} style={style} alt="github_logo" />
            </a>

        </div>)
}