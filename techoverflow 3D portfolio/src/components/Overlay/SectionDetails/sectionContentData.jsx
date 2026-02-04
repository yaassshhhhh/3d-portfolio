// Components
import TeamCarousel from "../TeamCarousel";

// Sections content data
const sectionsContentData = [
  {
    key: "about",
    title: "About us",
    content: (
      <p>
        Welcome to our 3D portfolio, created by techoverflows. This experience helped us boost our confidence and develop our
        soft and technical skills, gearing us up for future challenges. Check it
        out and witness the amazing outcome of our teamwork! 📱✨🎉
      </p>
    ),
  },
  { key: "team", title: "Our team", content: <TeamCarousel /> },
  {
    key: "credits",
    title: "Credits",
    content: (
      <ul className="credits">
        <li>
          <a href="https://www.chingu.io/">Member1</a>
        </li>
        <li>
          <a href="https://threejs-journey.com/">Member2</a>
        </li>
        <li>
          <a href="https://poly.pizza">Member3</a>
        </li>
        <li>
          <a href="https://www.syntystudios.com">Memer4</a>
        </li>
        <li>
          <a href="https://streakbyte.com">Member5</a>
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
