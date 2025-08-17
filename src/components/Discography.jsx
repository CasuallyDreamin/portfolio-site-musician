import "../styles/discography.css";
import useFadeIn from "../hooks/useFadeIn";

function Discography() {
  const [ref, isVisible] = useFadeIn();

  const works = [
    {
      category: "Solo Works",
      items: [
        { title: "Cold Rain Place", type: "Single", year: 2025 },
        { title: "Howzar", type: "Single", year: 2024 },
        { title: "Codeine", type: "Single", year: 2023 },
        { title: "Inja Hame Khaban", type: "Single", year: 2022 },
        { title: "East Wind", type: "Single", year: 2020 },
        { title: "Inevitable Elusive", type: "EP", year: 2020 },
        { title: "The Days That Die", type: "EP", year: 2020 },
      ],
    },
    {
      category: "Route71",
      items: [
        { title: "Vertical Axis", type: "Album", year: 2025 },
        { title: "Tidal Waves", type: "Single", year: 2024 },
        { title: "Reverse Fantasy", type: "Single", year: 2023 },
        { title: "Stuck Between Two Skies", type: "Single", year: 2020 },
        { title: "Journey Without Me", type: "Single", year: 2020 },
        { title: "Cosmic-Self", type: "Single", year: 2020 },
        { title: "Rusted Route", type: "Album", year: 2019 },
        { title: "A Man; Waiting for sunset", type: "Single", year: 2018 },
      ],
    },
    {
      category: "Jalboat",
      items: [
        { title: "Gal a no", type: "Single", year: 2015 },
      ],
    },
  ];

  return (
    <section
      id="discography"
      ref={ref}
      className={`discography ${isVisible ? "fade-in" : "fade-out"}`}
    >
      <h1>Discography</h1>
      <div className="discography-content">
        {works.map((group, i) => (
          <div key={i} className="discography-group">
            <h2>{group.category}</h2>
            <ul>
              {group.items.map((item, j) => (
                <li key={j}>
                  <span className="title">{item.title}</span>
                  <span className="meta">{item.type} · {item.year}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Discography;
