"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";

const references = [
  {
    quote:
      "Annika's ability to transform a simple idea into full scale output is astounding. She saw potential in her research and was able to expand it over two years for strong results aiding the pancreatic and galbladder cancer studied ongoing. I'm so glad I had the opportnity to work with her, as she really is a pioneer in the field of biotech.",
    name: "Odelia Schwartz",
    role: "Research PI · University of Miami",
  },
  {
    quote:
      "Having Annika on the Peckish team was a game-changer. Her challenge as a computational researcher was to develop models that could solve the high-density counnt problem, something fundamental as an issue. She was able to create something that outperformed my expectations, meticulously researching and testing but also bringing a great conversations to the team. We had a great time bouncing ideas back and forth for general case solving when we expanded our technology this past summer.",
    name: "Sebastien Pradier",
    role: "CTO & Co-Founder · Peckish",
  }
  
];

export default function ContactPage() {
  const [showEmail, setShowEmail] = useState(false);

  return (
    <main className="container">
      <Navbar />

      <header className="pageHeader">
        <p className="eyebrow">get in touch</p>

        <h1>contact</h1>

        <p>
          I&apos;m always interested in meeting people working on ambitious
          ideas across artificial intelligence, healthcare, startups, venture
          capital, and music.
        </p>
      </header>

      <section className="minimalContact">
        <button
          type="button"
          className="emailTextButton"
          onClick={() => setShowEmail((current) => !current)}
          aria-expanded={showEmail}
        >
          {showEmail
            ? "[asach29 [at] mit [dot] edu]"
            : "[click to reveal email]"}
        </button>

        <a
          className="linkedinLogo"
          href="https://www.linkedin.com/in/annikasachdeva"
          target="_blank"
          rel="noreferrer"
          aria-label="Annika Sachdeva on LinkedIn"
        >
          <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.41a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.1 20.45H3.54V8.98H7.1v11.47ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
          </svg>
        </a>
      </section>

      <section className="section referencesSection">
        <p className="eyebrow">what mentors have said</p>

        <h2>references</h2>

        <div className="referencesGrid">
          {references.map((reference) => (
            <blockquote
              className="referenceCard"
              key={`${reference.name}-${reference.role}`}
            >
              <span className="quoteMark" aria-hidden="true">
                “
              </span>

              <p className="referenceQuote">
                {reference.quote}
              </p>

              <footer className="referenceAttribution">
                <strong>{reference.name}</strong>
                <span>{reference.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <footer>
        © {new Date().getFullYear()} Annika Sachdeva
      </footer>
    </main>
  );
}