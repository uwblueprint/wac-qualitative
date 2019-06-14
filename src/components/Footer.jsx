import React from 'react';
import '../App.css';
import '../styles/_title_page.css';
import '../styles/_footer.css';

const Footer = () => {
    return (
        <div>
            <TopFooter />
            <BottomFooter />
        </div>
    );
}

const TopFooter = () => {
    return (
      <div className="topFooter">
        <div className="footerTextLeft">
          <h3>Who we are</h3>
          <p>
            We All Count is a project dedicated to equity in data science. Read all about the
            project <a href="https://weallcount.com/">here</a>.
          </p>
        </div>
        <div className="footerTextMiddle">
          <h3>How Does It Work?</h3>
          <p>Want to learn more about the process? Find out using the link below.</p>
        </div>
        <div className="footerTextRight">
          <h3>Speak To A Specialist</h3>
          <p>
            Would you like one of our specialists to get back to you with some expert advice on the
            potential bias in your dataset? If so, please click{' '}
            <a href="mailto:heather@idatassist.com">here</a>.
          </p>
        </div>
      </div>
    );
  }
  
  const BottomFooter = () => {
    return (
      <div className="bottomFooter">
        <i>Copyright @ WeAllCount 2019</i>
      </div>
    );
  }

export default Footer;