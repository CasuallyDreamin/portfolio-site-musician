import "../styles/work.css";
import useFadeIn from "../hooks/useFadeIn";

function Work() {
  const [ref, isVisible] = useFadeIn();

  return (
    <section
      id="work"
      ref={ref}
      className={`work ${isVisible ? "fade-in" : "fade-out"}`}
    >
      <div className="grid">
        <h1>Hello, I am the Work section!</h1>
      </div>
    </section>
  );
}

export default Work;
