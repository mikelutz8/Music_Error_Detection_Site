import React, { Component } from "react";
import { Button } from "./../Components/Button";
import history from "../Scripts/history";
import "./../Styles/assignment.css";
import { withRouter } from "react-router-dom";
import Tmp from "./../Resources/Audio/Example1.m4a";
import example5 from "./../Resources/Images/Example1Display.png";
import example5Ans from "./../Resources/Images/Example1Answer.png";
var count;
var isPlaying = false;
var audio = new Audio(Tmp);
var hotspotCountP = 1;
var hotspotCountR = 1;
var hotspotCountI = 1;
let buttVal = ""
const imageStyle1 = {
  display: 'block'
};
const imageStyle2 = {
  display: 'none'
};

class Assignment5 extends Component {
    RenderButtonAndSound = () => {
        audio.onended=function()
        {
            count++;
            isPlaying = false;
            console.log(count);
        }
    return (
      <Button
        onClick={() => {
            if (count < 3) {
                if (! isPlaying) {
                    audio.play();
                    isPlaying = true;
                    console.log("playing");
                }
            }
            if (count === 2){
              alert("You can only play this sound one more time")
            }
            if (count === 3){
              alert("You have maxed out your attempts to play this sound")
            }
        }
        }
        type="button"
        buttonStyle="btn--primary--solid"
        buttonSize="btn--medium"
      >Play Sound</Button>
    )
  }
  render() {
    if (!count) {
      count = 0;
    }

    return (
      <div id="Assignment5" className="assignment">
        <h2>Assignment 5</h2>
        <div className="Instructions">
        <h2><u>Instructions:</u>  Click the "Play Sound" button to hear the music.
          You will only be able to play the sound 3 times. After listening to the music,
          place the hotspots over each note error. There are 3 different types of error:
          Pitch Error (Purple), Rhythm Error (Red), and Intonation Error (Green).
          <br></br>
          <br></br>
          <u>How to place the hotspot?</u>
          <br></br>
          1. Click the error button
          <br></br>
          2. Place the hotspot on the note error
          <br></br>
          3. Click the error button again.
          <br></br>
          4. If you want to add more errors, click on the note to place hotspot and click the error button.
          <br></br>
          5. After you are done, click the submit button to check your answer</h2>
        </div>
        {this.RenderButtonAndSound()}

        <Button
        onClick={() => {
          hotspotCountP++;

          document.getElementById('shapeP').style.display = "block";

          if (buttVal === "R"){
            document.getElementById('shapeR').style.display = "none";
          }
          else if (buttVal === "I"){
            document.getElementById('shapeI').style.display = "none";
          }
          else {
            let clone = document.querySelector('#shapeP').cloneNode(true);
            clone.setAttribute('id', 'shapeP'+hotspotCountP.toString());
            document.querySelector('div').appendChild( clone );

          }
          buttVal = "P";
        }
        }
        type="button"
        buttonStyle="btn--pitch--solid"
        buttonSize="btn--medium"
        >Add Pitch Error</Button>

        <Button
        onClick={() => {
          hotspotCountR++;

          document.getElementById('shapeR').style.display = "block";

          if (buttVal === "P"){
            document.getElementById('shapeP').style.display = "none";
          }

          else if (buttVal === "I"){
            document.getElementById('shapeI').style.display = "none";
          }

          else {
            let clone = document.querySelector('#shapeR').cloneNode(true);
            clone.setAttribute('id', 'shapeR'+hotspotCountR.toString());
            document.querySelector('div').appendChild( clone );
          }

          buttVal = "R";
        }
        }
        type="button"
        buttonStyle="btn--rhythm--solid"
        buttonSize="btn--medium"
        >Add Rhythm Error</Button>
        <Button
        onClick={() => {
          hotspotCountI++;

          document.getElementById('shapeI').style.display = "block";

          if (buttVal === "R"){
            document.getElementById('shapeR').style.display = "none";
          }

          else if (buttVal === "P"){
            document.getElementById('shapeP').style.display = "none";
          }

          else {
            let clone = document.querySelector('#shapeI').cloneNode(true);
            clone.setAttribute('id', 'shapeI'+hotspotCountI.toString());
            document.querySelector('div').appendChild( clone );
          }

          buttVal = "I";
        }
        }
        type="button"
        buttonStyle="btn--intonation--solid"
        buttonSize="btn--medium"
        >Add Intonation Error</Button>
        <br></br>
        <img id="img5" className="center-fit" style={imageStyle1} src={example5} alt="Assignment 5"/>
        <img id="img5ans" className="center-fit" style={imageStyle2} src={example5Ans} alt="Assignment 5"/>
        <br></br>
        <Button
          onClick={() => {
            history.push('/');
            history.go();
          }
          }
          type="button"
          buttonStyle="btn--primary--solid-go-back"
          buttonSize="btn--medium"
        >Back</Button>

        <Button id='reset'
          onClick={() => {
            if(window.confirm("Are you sure you want to reset?")){
              window.location.reload(false);
            }
          }
          }
          type="button"
          buttonStyle="btn--primary--solid"
          buttonSize="btn--medium"
        >Reset</Button>

        <Button id = 'submit'
          onClick={() => {
            if(window.confirm("Are you sure you want to submit?")){
              document.getElementById('img5').style.display = "none";
              document.getElementById('img5ans').style.display = "block";
            }
          }
          }
          type="button"
          buttonStyle="btn--primary--solid"
          buttonSize="btn--medium"
        >Submit</Button>
      </div>
    );
  }
}

export default withRouter(Assignment5);