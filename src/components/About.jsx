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
      className={`about ${isVisible ? "fade-in" : "fade-out"}`}
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
          {expanded && (
            <div className="about-extra">
              <p>
              Drawing inspiration from Rock, Funk, Blues, and Fusion,
              I create music where the bass
              is not just a rhythmic instrument,
              but the central voice telling the melody.
            </p>

            <p>
              My musical journey began at age 16 after watching an Eric Clapton concert.
              In 2012, I co-founded the post-rock band "Route 71"
              and have since collaborated with groups like "Jalboat"
              and "Pipeh Band."
            </p>

            <p>  
              In my work, I blend personal experiences and social issues from life in Southern Iran with my favorite musical styles.
              With my expertise in mixing and mastering, I maintain complete creative control over my sound.
            </p>
            
            <p>
              My recent work includes the single "Cold Rain Place" and the latest "Route 71" album. I continue to create and collaborate with other artists.
            </p>
          </div>
          )}

      <button
        className="about-toggle"
        onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Read Less ▲" : "Read More ▼"}
        </button>
      </div>
      </div>
    </section>
  );
}

export default About;
