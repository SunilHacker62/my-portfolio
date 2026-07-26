import "./Experience.css";

const timeline = [
  {
    year: "2022 - 2024",
    title: "Assistant Systems Engineer",
    company: "Tata Consultancy Services (TCS)",
    description:
      "Worked on enterprise applications while gaining experience with modern web technologies.",
  },
  {
    year: "2024 - 2026",
    title: "Systems Engineer",
    company: "Tata Consultancy Services (TCS)",
    description:
      "Developed responsive React applications using reusable components.",
  },
  {
    year: "2026 - Present",
    title: "Frontend Developer",
    company: "Looking for Opportunities",
    description:
      "Seeking opportunities to build scalable web applications.",
  },
];

function Experience() {
  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>

      <div className="timeline">
        {timeline.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="circle"></div>

            <div className="timeline-content">
              <span>{item.year}</span>
              <h3>{item.title}</h3>
              <h4>{item.company}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;