import React from "react"
import pic from "./myPic.jpg"
import ReactDOM from "react-dom"


function BodyAbout() {

    return  <div class="container" style={{ textAlign: "center" }}>
            <img id="about-img" src={pic} />
            <div class="row icons">
            <div class="col-xs-3">
                <a href="https://github.com/ASHISH-GITHUB2495/GRIP_BasicBankingSystem_2021" target="_blank"><i class="fab fa-github icon"></i></a><br></br>
                <h2>Github</h2>
                </div>
            <div class="col-xs-3">
                <a href="https://ashish-github2495.github.io/MyPortfolio.github.io/" target="_blank"><i class="far fa-file icon"></i></a><br></br>
                <h2>PortFolio</h2>
                </div>
            <div class="col-xs-3">
                <a href="https://www.stopstalk.com/user/profile/ZeroHu0" target="_blank"><i class="fas fa-paper-plane icon"></i></a><br></br>
                <h2>Stopstalk</h2>
            </div>
            <div class="col-xs-3">
                <a href="https://www.linkedin.com/in/ashish2495/" target="_blank"><i class="fab fa-linkedin icon"></i></a><br></br>
                <h2>linkedin</h2>
            </div>
        </div>
        </div>



}
export default BodyAbout;
