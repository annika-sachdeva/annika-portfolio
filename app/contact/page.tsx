"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";

const references = [
  {
    quote:
      "Annika walked in with a proposal built on my own papers and left with a model that outperforms radiologists. In twenty years of mentoring, I've rarely seen a researcher this self-taught, this relentless, and this young. ",
    name: "Odelia Schwartz",
    role: "Research PI · University of Miami",
  },
  
  {
    quote:
      'She took our hardest CV problems at Peckish, from occluded-item detection to high-density counting, and drove them from research spike to production, relentlessly iterating. Outside of just ML, Annika was great innovator to have for our team, always bringing the "what if we tried..." to the table, truly internalizing our vision as a fellow founder. ',
    name: "Sebastien Pradier",
    role: "CTO & Co-Founder · Peckish",
  },
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
            ? "[]"
            : "[]"}
        </button>

        <div className="socialLinks">
          <a
            className="socialLogo"
            href="https://www.linkedin.com/in/annikasachdeva"
            target="_blank"
            rel="noreferrer"
            aria-label="Annika Sachdeva on LinkedIn"
          >
            <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.41a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.1 20.45H3.54V8.98H7.1v11.47ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
            </svg>
          </a>

          <a
            className="socialLogo"
            href="https://github.com/annika-sachdeva"
            target="_blank"
            rel="noreferrer"
            aria-label="Annika Sachdeva on GitHub"
          >
            <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
              <path d="M12 .7C5.7.7.7 5.8.7 12.1c0 5 3.2 9.2 7.6 10.7.6.1.8-.3.8-.6v-2.2c-3.1.7-3.8-1.3-3.8-1.3-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.7 2.6 1.2 3.2.9.1-.7.4-1.2.7-1.5-2.5-.3-5.1-1.3-5.1-5.6 0-1.2.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0C16.9 4.8 18 5.1 18 5.1c.6 1.6.2 2.8.1 3.1.7.8 1.2 1.9 1.2 3.1 0 4.3-2.6 5.3-5.1 5.6.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6a11.5 11.5 0 0 0 7.6-10.7C23.3 5.8 18.3.7 12 .7Z" />
            </svg>
          </a>
        </div>
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

              <p className="referenceQuote">{reference.quote}</p>

              <footer className="referenceAttribution">
                <strong>{reference.name}</strong>
                <span>{reference.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <footer>© {new Date().getFullYear()} Annika Sachdeva</footer>
    </main>
  );
}