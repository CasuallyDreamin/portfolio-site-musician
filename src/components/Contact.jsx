import "../styles/contact.css";
import useFadeIn from "../hooks/useFadeIn";
import { FaSpotify, FaSoundcloud, FaApple, FaYoutube, FaInstagram, FaEnvelope } from "react-icons/fa";
import { SiBandcamp } from "react-icons/si";

function Contact() {
  const [ref, isVisible] = useFadeIn();

  const contacts = [
    { name: "Instagram", icon: <FaInstagram />, url: "https://www.instagram.com/ebrahimzakeriqeshmi/", handle: "@ebrahimzakeriqeshmi" },
    { name: "Email", icon: <FaEnvelope />, url: "mailto:ebi.zakeri69@gmail.com", handle: "ebi.zakeri69@gmail.com" },
    { name: "Spotify", icon: <FaSpotify />, url: "https://open.spotify.com/artist/5aCxn3gXbyUlAv05Cc7069" },
    { name: "SoundCloud", icon: <FaSoundcloud />, url: "https://soundcloud.com/ebrahim-zakeri" },
    { name: "Bandcamp", icon: <SiBandcamp />, url: "https://ebrahimzakeriqeshmi.bandcamp.com/" },
    { name: "Apple Music", icon: <FaApple />, url: "https://music.apple.com/nl/artist/ebrahim-zakeri-qeshmi/" },
    { name: "YouTube", icon: <FaYoutube />, url: "https://youtube.com/@ebrahimzakeriqeshmi1" },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className={`contact ${isVisible ? "fade-in" : "fade-out"}`}
    >
      <h1>Contact Me</h1>
      <p>Find me on platforms or reach out directly:</p>

      <div className="contact-links">
        {contacts.map((c, idx) => (
          <a key={idx} href={c.url} target="_blank" rel="noopener noreferrer" className="contact-link">
            <span className="icon">{c.icon}</span>
            <span className="label">{c.name}</span>
            {c.handle && <span className="handle">{c.handle}</span>}
          </a>
        ))}
      </div>
    </section>
  );
}

export default Contact;
