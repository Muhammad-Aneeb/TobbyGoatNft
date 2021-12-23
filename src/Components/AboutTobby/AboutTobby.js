import React from "react";
import "./AboutTobby.css";
function AboutTobby() {
  return (
    <div>
      <div className="Mainclass111">
        <div className="AboutPart">
            
          <div className="Abouttobby">
          <h2 style={{color:"white"}}>- About Toby</h2>
          </div>
          <div className="Aboutdescription111">
          <p><strong>Toby is a goat</strong> that has never joined the herd like the others. Since childhood, he showed an <strong>adventurous spirit</strong> and willingness to explore the unknown. After years of doing his own research, Toby decided to leave his pasture life to embark on what will be the biggest adventure of his life. Determined to put goats in the history books, <strong>Toby moved to the Ethereum blockchain</strong> to be the first goat to go to the moon.</p>
          </div>
        </div>
        <div className="ImagePart">
            <img style={{width:"25rem", }} src="https://tobythegoat.io/images/toby_moon.png" alt = "About Image" />
        </div>
      </div>
    </div>
  );
}

export default AboutTobby;
