import Navbar from "../components/Navbar";

export default function ContactPage() {
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
        <a className="contactCard" href="mailto:asach29@mit.edu">
          <div>
            <p className="contactLabel">email</p>
            <h2>asach29@mit.edu</h2>
          </div>

          <span>↗</span>
        </a>

        <a
          className="contactCard"
          href="https://www.linkedin.com/in/annikasachdeva"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <p className="contactLabel">linkedin</p>
            <h2>Annika Sachdeva</h2>
          </div>

          <span>↗</span>
        </a>

        <a
          className="contactCard"
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <p className="contactLabel">technical résumé</p>
            <h2>View résumé</h2>
          </div>

          <span>↗</span>
        </a>

        <a
          className="contactCard"
          href="/music-resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <p className="contactLabel">music résumé</p>
            <h2>View music résumé</h2>
          </div>

          <span>↗</span>
        </a>
      </section>

      <footer>© {new Date().getFullYear()} Annika Sachdeva</footer>
    </main>
  );
}