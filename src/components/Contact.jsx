import "../styles/contact.css";
import useFadeIn from "../hooks/useFadeIn";

function Contact() {
  const [ref, isVisible] = useFadeIn();

  return (
    <section
      id="contact"
      ref={ref}
      className={`contact ${isVisible ? "fade-in" : "fade-out"}`}
    >
      <h1>Contact Me</h1>
      <p>Get in touch via email or social links...</p>
    </section>
  );
}

export default Contact;
