import "../styles/work.css";
import useFadeIn from "../hooks/useFadeIn";

import album_cover from "../assets/vertical-axis.jpg"
import solo_cover from "../assets/cold-rain-place.jpg"
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
    link: "https://soundcloud.com/mehdimonfared5708/paskang?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
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
            {project.link ? <h2><a href={project.link}>{project.title}</a></h2> : <h2>{project.title}</h2>}
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Work;