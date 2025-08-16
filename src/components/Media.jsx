import "../styles/media.css";
import useFadeIn from "../hooks/useFadeIn";

function Media() {
  const [ref, isVisible] = useFadeIn();

  return (
    <section
      id="media"
      ref={ref}
      className={`media ${isVisible ? "fade-in" : "fade-out"}`}
    >
      <h1>Hello, I am the Media section!</h1>
    </section>
  );
}

export default Media;
