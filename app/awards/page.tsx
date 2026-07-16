import Navbar from "../components/Navbar";

const awards = [
  {
    title: "Regeneron Science Talent Search",
    recognition: "Top 300 Scholar",
    year: "2025",
    description:
      "Recognized for research applying weighted normalization and visual-transformer methods to early pancreatic cancer detection.",
  },
  {
    title: "Davidson Fellows Scholarship",
    recognition: "Honorable Mention",
    year: "2024",
    description:
      "Recognized for research in artificial intelligence and early pancreatic cancer detection.",
  },
  {
    title: "IFoRE",
    recognition: "1st Place — Mathematics & Computer Science",
    year: "2023 & 2024",
    description:
      "Awarded first place for machine-learning research.",
  },
  {
    title: "Florida State Science and Engineering Fair",
    recognition: "2nd Place",
    year: "2024 & 2025",
    description:
      "Recognized at the Florida state level for research in computer science and artificial intelligence.",
  },
  {
    title: "MIT Future Makers Create-a-thon",
    recognition: "1st Place",
    year: "2024",
    description:
      "Awarded first place for developing and presenting a technology-driven solution.",
  },
  {
    title: "National Merit Scholarship",
    recognition: "National Merit Scholar",
    year: "2025",
    description:
      "Recognized through the National Merit Scholarship Program.",
  },
];

export default function AwardsPage() {
  return (
    <main className="container">
      <Navbar />

      <header className="pageHeader">
        <p className="eyebrow">academic recognition</p>
        <h1>awards</h1>

        <p>
          Selected recognition for my work across artificial intelligence,
          computer science, healthcare, and research.
        </p>
      </header>

      <section className="section">
        <div className="awardsList">
          {awards.map((award) => (
            <article
              className="awardCard"
              key={`${award.title}-${award.year}`}
            >
              <div className="awardHeader">
                <div>
                  <h2>{award.title}</h2>
                  <p className="awardRecognition">{award.recognition}</p>
                </div>

                <span className="awardYear">{award.year}</span>
              </div>

              <p>{award.description}</p>
            </article>
          ))}
        </div>
      </section>

      <footer>© {new Date().getFullYear()} Annika Sachdeva</footer>
    </main>
  );
}