import React, { Component } from 'react';
import logo from './styles/images/logo.png';
import avatar from './styles/images/personIcon.png';
import './App.css';
import './TitlePage.css';

class TitlePage extends Component {

  render() {
    var cardStyle ={
      color: "black",
      background: "#FFFFFF",
  /* CARD STROKE STYLE */
  border: "1px solid #E1E1E1",
  width: '300px',
  boxSizing: "border-box",/* Card drop shadow */
  boxShadow: '1px 1px 8px rgba(0, 0, 0, 0.07)',
  borderRadius: '2px',
  position: 'absolute',
width:' 840px',
height: '668px',
left: '300px',
top: '68px',
textalign:'left'
    }; 

    return (
      <div>
      <div className="cardStyle">
      <p>hello world!!!!!!!</p>
      <div >
<img  src={logo} alt="Logo"/>
<img  src={avatar} alt="Avatar"/>
      <p>Welcome to the We All Count Data Biography Builder.</p>
      </div>
      <p>This tool is designed around the Data Equity Biography checklist. The tools helps you identify potential sources of bias in your dataset and gives you the chance to improve the equity in your use of the data.

This tool is designed to be used to assess the level of bias that is present in dataset. This is designed to assess the level of bias prior to analysis. To get a sense of the sources and locations of potential bias in your data most completely you’ll need the a copy of the survey tool that was used to collect the data, the codebook, and the document that tells you how the data was sampled and collected.

</p>
      <div className="buttonStyle" >
      Begin
      </div>
      </div>
      <div className="bottomBorder"> 
      <div className ="bottomTextL">
      <h3>Who we are</h3>
      <p>We All Count is a project dedicated to equity in data science. Read all about the project here.</p>
      </div>
      <div className ="bottomTextM">
      <h3>How Does It Work?</h3>
      <p>Want to learn more about the process? Find out using the link below.
      </p>
      </div>
      <div className ="bottomTextR">
      <h3>Speak To A Specialist</h3>
      <p>Would you like one of our specialists to get back to you with some expert advice on the potential bias in your dataset? If so, please click here.</p>
      </div>
      
      </div>
      </div>
    );
  }
}

export default TitlePage;
