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
      <h1>Media</h1>
      <div className="media-content">
        
      </div>
    </section>
  );
}

export default Media;
