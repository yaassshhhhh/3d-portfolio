// Components
import TeamCarousel from "../TeamCarousel";

// Sections content data
const sectionsContentData = [
  {
    key: "about",
    title: "About us",
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <p>
          We’re not just a team — we’re a collective of curious minds who love turning ideas into digital reality.
        </p>
        <p>
          From clean UI designs to powerful backend systems, we build products that are fast, functional, and future-ready.
        </p>
        <p>
          We believe in learning, experimenting, and pushing limits — together.
        </p>
      </div>
    ),
  },
  { key: "team", title: "Our team", content: <TeamCarousel /> },
  {
    key: "credits",
    title: "Credits",
    content: (
      <ul className="credits">
        <li>
          <a href="https://www.chingu.io/">YASH MAHAJAN</a>
        </li>
        <li>
          <a href="https://threejs-journey.com/">PRANAV ARUN JADHAV</a>
        </li>
        <li>
          <a href="https://poly.pizza">ARYAN PATIL</a>
        </li>
        <li>
          <a href="https://www.syntystudios.com">HASSAN KAZI</a>
        </li>

        <li>
          <a href="https://t.me/tech_overflow">
            More Credits
          </a>
        </li>
      </ul>
    ),
  },
];

export default sectionsContentData;
