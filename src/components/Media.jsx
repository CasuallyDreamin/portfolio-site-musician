import "../styles/media.css";
import useFadeIn from "../hooks/useFadeIn";

function Media() {
  const [ref, isVisible] = useFadeIn();

  // Placeholder media URLs
  const mediaItems = [
    { type: "image", src: "https://picsum.photos/300/180?random=1", alt: "Placeholder 1" },
    { type: "image", src: "https://picsum.photos/300/180?random=2", alt: "Placeholder 2" },
    { type: "image", src: "https://picsum.photos/300/180?random=3", alt: "Placeholder 3" },
    { type: "video", src: "https://media.tenor.com/images/5d8e5dc2c8c0f88f4e4cf2b0e7d5f9d6/tenor.gif", alt: "Placeholder GIF" }
  ];

  return (
    <section
      id="media"
      ref={ref}
      className={`media ${isVisible ? "fade-in" : "fade-out"}`}
    >
      <h1>Media</h1>
      <div className="media-content">
        {mediaItems.map((item, index) => (
          item.type === "image" ? (
            <img key={index} src={item.src} alt={item.alt} />
          ) : (
            <img key={index} src={item.src} alt={item.alt} />
          )
        ))}
      </div>
    </section>
  );
}

export default Media;
