import "../styles/discography.css";
import useFadeIn from "../hooks/useFadeIn";
import { link } from "framer-motion/client";

function Discography() {
  const [ref, isVisible] = useFadeIn();

  const works = [
    {
      category: "Solo Works",
      items: [
        { title: "Cold Rain Place", type: "Single", year: 2025, link: "https://open.spotify.com/track/6yk99I4VYB72cN9723A7k4?si=f85718552a544c9a" },
        { title: "Howzar", type: "Single", year: 2024, link: "https://open.spotify.com/track/6ygfoBrBWGNJSM1lFE4jiu?si=e7af0f48844747ff" },
        { title: "Codeine", type: "Single", year: 2023, link: "https://open.spotify.com/track/0HGvVssLM8DXlrElbuAFm2?si=b5f0523aea894451" },
        { title: "Inja Hame Khaban", type: "Single", year: 2022, link: "https://open.spotify.com/track/6Lm9aZjU2Xw9Au1sTG8cmL?si=02f6c1f6d7b345f8"},
        { title: "East Wind", type: "Single", year: 2020, link: "https://open.spotify.com/track/2O7iAGAsmf9djTJXbjhaWq?si=cc13d7af87fe4c9c" },
        { title: "Inevitable Elusive", type: "EP", year: 2020, link: "https://open.spotify.com/album/4rxmLfFy5PXHNnT2pcIMOL?si=vSm2zSVwQLGo3jtPXwuJJg" },
        { title: "The Days That Die", type: "EP", year: 2020 , link: "https://open.spotify.com/album/63qig8BHPJdNjlI3hHAHgZ?si=4LSaPCLNRmWrq0PiIphNCg" },
      ],
    },
    {
      category: "Route71",
      items: [
        { title: "Vertical Axis", type: "Album", year: 2025, link: "https://open.spotify.com/track/5xDnH2h9EBDUl3f9lCxPvj?si=ecebcbd88b624bfc" },
        { title: "Tidal Waves", type: "Single", year: 2024, link: "https://open.spotify.com/track/3qISNXS6KyLeZBgLLvLBSt?si=ed4ec0eaafbf4e1a" },
        { title: "Reverse Fantasy", type: "Single", year: 2023, link: "https://open.spotify.com/track/0eABYHboGczZLqEgSH5nKr?si=f0b2ba96b5754ef7" },
        { title: "Stuck Between Two Skies", type: "Single", year: 2020, link: "https://soundcloud.com/route71/stuck-between-two-skies?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { title: "Journey Without Me", type: "Single", year: 2020, link: "https://soundcloud.com/route71/route71-journey-without-me?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { title: "Cosmic-Self", type: "Single", year: 2020, link: "https://soundcloud.com/route71/cosmic-self?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { title: "Rusted Route", type: "Album", year: 2019, link: "https://soundcloud.com/route71/sets/rusted-route?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { title: "A Man; Waiting for sunset", type: "Single", year: 2018, link: "https://soundcloud.com/route71/a-man-waiting-for-sunset?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
      ],
    },
    {
      category: "Jalboat",
      items: [
        { title: "Gal a no", type: "Single", year: 2015, link: "https://soundcloud.com/user-998950645/gal-a-no?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
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
                  <a 
                  className="title"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.link}>
                    {item.title}
                  </a>
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
