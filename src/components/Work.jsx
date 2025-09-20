import "../styles/work.css";
import useFadeIn from "../hooks/useFadeIn";

import album_cover from "../assets/vertical-axis.jpeg"
import solo_cover from "../assets/single-track1.jpeg"
import live_record from "../assets/single2.jpg"

const projects = [
  {
    title: "Route71",
    description: "Producing full-length post-rock albums and singles with immersive soundscapes.",
    image: album_cover,
  },
  {
    title: "Solo Production",
    description: "Composing and recording solo projects.",
    image: solo_cover,
  },
  {
    title: "Record, Mix and Master in EZ Music Studio",
    description: "Capturing the essense of professional and talented musicians.",
    image: live_record,
  },
];

function Work() {
  const [ref, isVisible] = useFadeIn();

  return (
    <section
      id="work"
      ref={ref}
      className={`work ${isVisible ? "fade-in" : "fade-out"}`}
    >
      <h1>My Work</h1>
      <div className="grid">
        {projects.map((project, index) => (
          <div key={index} className="work-card">
            <img src={project.image} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Work;