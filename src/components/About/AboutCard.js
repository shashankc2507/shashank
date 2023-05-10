import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hope you are doing well! My name is
             <span className="purple"> Shashank C </span> 
             and I am from
             <span className="purple"> Bangalore. </span>
             I am currently studing 
             <span className="purple"> B.Tech, Computer science and Engineering </span>
             at the 
             <span className="purple"> Dayananda Sagar University. </span>
             I have a huge passion for programming, especially <span className="purple">
              Applications and Web Development, Machine learning and Software enginerring.
             </span>
            <br />
            <br />
            This summer I am a <span className="purple">software engineering intern</span> at 
            <span className="purple"> Salesforce</span> where 
            I am leveraging <span className="purple">agile methodologies</span> along with <span className="purple">Java, JavaScript, Android Studio and 
            XML</span> to develop new products for equity analysts while simultaneously pursuing 
            the <span className="purple">AWS cloud practioner certification.</span> 
            <br />
            <br />
            

           
            Some other activities I love include:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Table tennis and Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to the Music on repeat
            </li>
            <li className="about-activity">
              <ImPointRight /> Cycling
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Novels
            </li>
          </ul>
          <br />

        
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}


export default AboutCard;
