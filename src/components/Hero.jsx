import "../styles/hero.css";
import useFadeIn from "../hooks/useFadeIn";

function Hero() {
  const [ref, isVisible] = useFadeIn();

  return (
    <section
      id="hero"
      ref={ref}
      className={`hero ${isVisible ? "fade-in" : "fade-out"}`}
    >
      <h1>Welcome! I Am Ebrahim Zakeri Qeshmi</h1>
    </section>
  );
}

export default Hero;
