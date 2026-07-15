"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";

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

      <section className="contactList">
        <a
          className="contactCard"
          href="https://www.linkedin.com/in/annikasachdeva"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <p className="contactLabel">linkedin</p>
            <h2>Connect with me on LinkedIn</h2>
          </div>

          <span aria-hidden="true">↗</span>
        </a>

        <button
          type="button"
          className="contactCard emailRevealButton"
          onClick={() => setShowEmail(true)}
          disabled={showEmail}
        >
          <div>
            <p className="contactLabel">email</p>

            <h2>
              {showEmail
                ? "asach29 [at] mit [dot] edu"
                : "click to reveal email"}
            </h2>
          </div>

          <span aria-hidden="true">{showEmail ? "✓" : "+"}</span>
        </button>
      </section>

      <footer>© {new Date().getFullYear()} Annika Sachdeva</footer>
    </main>
  );
}