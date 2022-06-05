import React from "react";
import { MDBAnimation } from "mdbreact";

const AnimationPage = () => {
    return (
        <MDBAnimation type="fadeIn" delay="300" duration={10} onAnimationStart={onscroll} reveal>
            <img className="img-fluid" alt="" src="https://mdbootstrap.com/img/logo/mdb-transparent-250px.webp" />
        </MDBAnimation>
    );
};

export default AnimationPage;