import "../styles/about.css";
import useFadeIn from "../hooks/useFadeIn";
import selfie from "../assets/ebi.jpg"; // replace with the correct file path

function About() {
  const [ref, isVisible] = useFadeIn();

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
          <p>
            I’m a bassist and music producer, passionate about crafting deep,
            atmospheric sounds that resonate with listeners.
          </p>
          <p>
            With experience in post-metal/rock, I combine technical skill with
            emotional storytelling to bring music to life.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
