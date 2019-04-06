import React from "react";
import { Link } from "react-router-dom";

import logo from "../styles/images/logo.png";
import avatar from "../styles/images/personIcon.png";
import "../App.css";
import "../styles/_title_page.css";

const TitlePage = props => {
  return (
    <div>
      <div className="cardStyle">
        <div className="introText">
          <img style={{ marginBottom: "5%" }} src={logo} alt="Logo" />
          <h3>Welcome to the We All Count Data Biography&nbsp;Builder.</h3>
          <p>
            This tool is designed around the Data Equity Biography checklist.
            The tools helps you identify potential sources of bias in your
            dataset and gives you the chance to improve the equity in your use
            of the data.{" "}
          </p>
          <p>
            This tool is designed to be used to assess the level of bias that is
            present in dataset. This is designed to assess the level of bias
            prior to analysis. To get a sense of the sources and locations of
            potential bias in your data most completely you’ll need the a copy
            of the survey tool that was used to collect the data, the codebook,
            and the document that tells you how the data was sampled and
            collected.
          </p>

          <div className="buttonStyle">
            <p>
              <Link to={{ pathname: `/questionaire/1` }}>Begin</Link>
            </p>
          </div>

          <div className="introPic">
            <img src={avatar} alt="Avatar" />
          </div>
        </div>
      </div>
      <div className="bottomBorder">
        <div className="bottomTextL">
          <h3>Who we are</h3>
          <p>
            We All Count is a project dedicated to equity in data science. Read
            all about the project <a href="https://weallcount.com/">here</a>.
          </p>
        </div>
        <div className="bottomTextM">
          <h3>How Does It Work?</h3>
          <p>
            Want to learn more about the process? Find out using the link below.
          </p>
        </div>
        <div className="bottomTextR">
          <h3>Speak To A Specialist</h3>
          <p>
            Would you like one of our specialists to get back to you with some
            expert advice on the potential bias in your dataset? If so, please
            click <a href="mailto:heather@idatassist.com">here</a>.
          </p>
        </div>
      </div>
      <div className="secondBottomBorder">
        <i>Copyright @ WeAllCount 2019</i>
      </div>
    </div>
  );
};
export default TitlePage;
