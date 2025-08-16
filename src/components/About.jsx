import "../styles/about.css";
import useFadeIn from "../hooks/useFadeIn";

function About() {
  const [ref, isVisible] = useFadeIn();

  return (
    <section
      id="about"
      ref={ref}
      className={`about ${isVisible ? "fade-in" : "fade-out"}`}
    >
      <h1>About Me</h1>
      <p>Some info about the bassist/producer...</p>
    </section>
  );
}

export default About;
