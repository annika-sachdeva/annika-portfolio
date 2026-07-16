import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="container">
      <Navbar />

      <section className="intro">
        <div className="headshotWrapper">
          <Image
            src="/headshot.JPG"
            alt="Annika Sachdeva"
            width={180}
            height={180}
            className="headshot"
            priority
          />
        </div>

        <div>
          <h1>hey, i&apos;m annika!</h1>

          <p>
            i&apos;m studying artificial
            intelligence and computational biology @ MIT.
          </p>

          <p>
            i&apos;m interested in building technically ambitious products at
            the intersection of AI, healthcare, entrepreneurship, and biotech.
            behavior.
          </p>

          <p>
            outside of technology, i&apos;m a jazz and r&amp;b
            singer-songwriter and a member of the MIT Logarhythms acapella group.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>currently</h2>

        <div className="experienceList">
          <article className="experience">
            <p className="experienceTitle">
              Computational Researcher
              <span>Broad Institute &amp; CSAIL at MIT, Kellis Lab</span>
            </p>

            <p>
              Developing multimodal data cartographies, data-ingestion
              pipelines, and cognitive-mapping workflows for the MantisAI
              platform.
            </p>
          </article>

          <article className="experience">
            <p className="experienceTitle">
              Artificial Intelligence Researcher
              <span>MIT Sloan School of Management</span>
            </p>

            <p>
              Building an AI-powered negotiation-skills assessment that models
              human negotiation dynamics and connects interpersonal behavior to
              outcomes.
            </p>
          </article>

          <article className="experience">
            <p className="experienceTitle">
              VC Fellow and AI Intern
              <span>Link Ventures</span>
            </p>

            <p>
              Building AI systems, preparing investment memos, and scouting
              early technical talent across the MIT ecosystem.
            </p>
          </article>

          <article className="experience">
            <p className="experienceTitle">
              Machine Learning Engineer
              <span>Peckish</span>
            </p>

            <p>
              Developing computer-vision pipelines that detect and track
              inventory levels from video feeds for automated stock monitoring.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <h2>building</h2>

        <article className="featuredBlock">
          <p className="eyebrow">CEO &amp; Founder</p>

          <h3>Stealth</h3>

          <p>
            Healthtech startup in stealth mode, building a platform to optimize the clinical backend. 
          </p>
          <p>
            (coming in late 2026)
          </p>
        </article>

        <article className="featuredBlock">
          <p className="eyebrow">CEO &amp; Co-Founder</p>

          <h3>KineX</h3>

          <p>
            KineX is an AI-powered physical-therapy app for student athletes.
            It uses computer vision to help improve mobility and reduce injury
            and health risks.
          </p>

          <p>
            KineX was selected to pitch on the main stage of the ASU+GSV
            conference in front of more than 7,000 attendees.
          </p>
        </article>
        
      </section>

      <section className="section">
        <h2>research interests</h2>

        <ul>
          <li>Computer vision for medicine and healthcare</li>
          <li>Multimodal AI and behavioral modeling</li>
          <li>Human-centered artificial intelligence</li>
          <li>AI products, startups, and venture capital</li>
          <li>Technology-enabled healthcare access</li>
        </ul>
      </section>

      <section className="section">
        <h2>elsewhere</h2>

        <p>
          I&apos;m also Corporate Relations Director for the MIT Sloan Business
          Club and Event & Concert Coordinator + Social Media Director for
          the MIT Logarhythms.
        </p>
      </section>

      <footer>© {new Date().getFullYear()} Annika Sachdeva</footer>
    </main>
  );
}