import { useState } from "react";
import "../styles/about.css";
import useFadeIn from "../hooks/useFadeIn";
import selfie from "../assets/ebi.jpg";

function About() {
  const [ref, isVisible] = useFadeIn();
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="about"
      ref={ref}
      className="about"
    >
      <div className="about-grid">
        <div className="about-photo">
          <img src={selfie} alt="Portrait of me" />
        </div>
        <div className="about-text"> 
          <h2>About Me</h2>
          
          <p>I am a bassist, composer, and producer
            who tells stories from the southernmost part of
            Iran through his music.
          </p>
              <p>
              Drawing inspiration from Rock, Funk, Blues, and Fusion,
              I create music where the bass
              is not just a rhythmic instrument,
              but the central voice telling the melody.
            </p>

            <p>
              My musical journey began at age 16 after watching an Eric Clapton concert.
              In 2012, I co-founded the post-rock band "<a href="https://soundcloud.com/route71?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" target="_blank" rel="noopener noreferrer">Route 71</a>"
              and have since collaborated with groups like "<a href="https://open.spotify.com/album/4QnvWBeNY4Ix19422zpP4V?si=wejjdhvpQf2VPPQ-HbW2jQ" target="_blank" rel="noopener noreferrer">Jalboat</a>"
              and "Pipeh Band".
            </p>

            <p>  
              In my work, I blend personal experiences and social issues from life in Southern Iran with my favorite musical styles.
              With my expertise in mixing and mastering, I maintain complete creative control over my sound.
            </p>
            
            <p>
              My recent work includes the single "<a href="https://open.spotify.com/track/6yk99I4VYB72cN9723A7k4?si=f85718552a544c9a" target="_blank" rel="noopener noreferrer">Cold Rain Place</a>" and the latest "<a href="https://soundcloud.com/route71?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" target="_blank" rel="noopener noreferrer">Route 71</a>" album. I continue to create and collaborate with other artists.
            </p>
          </div>
      </div>
    </section>
  );
}

export default About;
