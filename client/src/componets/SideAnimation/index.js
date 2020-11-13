import React from "react"
const contentContainer = {
    width: "550px",
    height: "350px",
    border: "5px black solid",
    overflow: "hidden",
    backgroundColor: "#DFF2FF",
    display: "flex",
    alignItems: "center"
};


const circle = {
    width: "200px",
    height: "200px",
    backgroundColor: "#20A6FF",
    borderRadius: "50%"
}

export default function SideAnimation() {

    var circle = document.querySelector("#circle");

    var xPos = 0;
    var yPos = 0;
    var angle = 0;

    function animate() {
        xPos += 5;
        angle += .1;

        yPos = Math.round(50 * Math.sin(angle));

        // circle.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;

        if (Math.abs(xPos) >= 900) {
            xPos = -500;
        }

        if (angle > 2 * Math.PI) {
            angle = 0;
        }

        requestAnimationFrame(animate);
    }
    animate();
    return (
        <div style={contentContainer}>
            <div id="circle" style={circle}></div>
        </div>
    )
}








