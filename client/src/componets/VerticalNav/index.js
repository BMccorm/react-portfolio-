import React from "react"
import linkedIn from "../../assets/social_icons_02.png"
import GitHub from "../../assets/social_icons_01.png"



export default function VerticalNav() {
    return (
        <div class="flex-column col-2 fixed-bottom mb-5">

            <a class="nav-link" href="#">{linkedIn}</a>


            <a class="nav-link" href="#" className={GitHub}></a>

            <a class="nav-link" href="#">Link</a>

        </div>)
}