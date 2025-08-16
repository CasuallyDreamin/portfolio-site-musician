import "../styles/work.css";
import useFadeIn from "../hooks/useFadeIn";

// image imports
import album_cover from "../assets/vertical-axis.jpeg"
import solo_cover from "../assets/single-track1.jpeg"
import live_record from "../assets/single2.jpg"

// Example project data; you can replace with real projects
const projects = [
  {
    title: "Album Production",
    description: "Produced a full-length post-metal album with immersive soundscapes.",
    image: album_cover,
  },
  {
    title: "Bass Solo EP",
    description: "Composed and recorded a solo EP highlighting bass techniques.",
    image: solo_cover,
  },
  {
    title: "Live Recording Session",
    description: "Captured the essence of a live band performance with professional mixing.",
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
