import Navbar from "../components/Navbar";

const originalSongs = [
  {
    title: "Tell Me",
    description:
      "A song about not having the right words to express how you feel.",
    link: "https://www.youtube.com/watch?v=VMq8W6hu6jk&list=OLAK5uy_kRNgbuMJ1e8MyN7M1lRQ1dL08Vj_Z9QV0",
  },
  {
    title: "Rewind",
    description:
      "A reflection on wanting to go back and reevaluate a relationship.",
    link: "https://www.youtube.com/watch?v=PTyhywplMwY&list=OLAK5uy_mwdFzqoZssjBNZnhRCZIvDg2UNP4FykKY",
  },
  {
    title: "No One",
    description:
      "A song about the right person arriving at the wrong time.",
    link: "https://www.youtube.com/watch?v=3mC3ifUukZc",
  },
];

const performances = [
  {
    title: "Gone",
    artist: "Lianne La Havas",
    link: "https://www.youtube.com/watch?v=qgS4lxq7GFs",
  },
  {
    title: "Fly Me to the Moon",
    artist: "Frank Sinatra",
    link: "https://www.youtube.com/watch?v=_ZOAm90vqBI",
  },
  {
    title: "Killing Me Softly",
    artist: "Roberta Flack",
    link: "https://www.youtube.com/watch?v=HSTTHMyr6Eo",
  },
  {
    title: "Can’t Help Falling in Love",
    artist: "Elvis Presley",
    link: "https://www.youtube.com/watch?v=IhasF2B3Adg",
  },
  {
    title: "Somewhere Over the Rainbow",
    artist: "Linda Eder",
    link: "https://www.youtube.com/watch?v=zRnI2szvQ6c",
  },
  {
    title: "NYU Steinhardt Final Performance",
    artist: "Contemporary Vocal Performance",
    link: "https://www.youtube.com/watch?v=1aS8fp3uPfM",
  },
  {
    title: "Don’t Know Why",
    artist: "Norah Jones",
    link: "https://www.youtube.com/watch?v=1aS8fp3uPfM",
  },
  {
    title: "Drowning in Sunrise",
    artist: "Original",
    link: "https://www.youtube.com/watch?v=_yxTw23mklk",
  },
  {
    title: "Fly Away Birdie",
    artist: "Sarah Gazarek",
    link: "https://www.youtube.com/watch?v=1aS8fp3uPfM",
  },
  {
    title: "My Favorite Things",
    artist: "Julie Andrews",
    link: "https://www.youtube.com/watch?v=iztOz8E2ocg",
  },
  {
    title: "Someone Like You",
    artist: "Adele",
    link: "https://www.youtube.com/watch?v=tbeIo_CC3sA",
  },
  {
    title: "Ayodhya Vasi Ram",
    artist: "Carnatic Music",
    link: "https://www.youtube.com/watch?v=BZ5YZ_SHyKI",
  },
];

export default function MusicPage() {
  return (
    <main className="container">
      <Navbar />

      <header className="pageHeader musicHeader">
        <p className="eyebrow">vocalist · songwriter · performer</p>

        <h1>music</h1>

        <p>
          I&apos;m a jazz and R&amp;B singer-songwriter influenced by Alicia
          Keys, Frank Sinatra, Tori Kelly, and Billy Joel.
        </p>

        <p>
          My background spans eight years of choir, contemporary vocal
          performance, songwriting, Western jazz and pop, and Carnatic music.
          I currently sing with the MIT Logarhythms.
        </p>
      </header>

      <section className="section">
        <p className="eyebrow">written, composed &amp; performed by me</p>
        <h2>original music</h2>

        <div className="musicGrid">
          {originalSongs.map((song) => (
            <a
              className="musicCard"
              href={song.link}
              target="_blank"
              rel="noreferrer"
              key={song.title}
            >
              <div>
                <h3>{song.title}</h3>
                <p>{song.description}</p>
              </div>

              <span className="arrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">selected recordings</p>
        <h2>performances</h2>

        <div className="performanceList">
          {performances.map((performance) => (
            <a
              className="performanceRow"
              href={performance.link}
              target="_blank"
              rel="noreferrer"
              key={`${performance.title}-${performance.artist}`}
            >
              <div>
                <strong>{performance.title}</strong>
                <span>{performance.artist}</span>
              </div>

              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">training &amp; experience</p>
        <h2>musical background</h2>

        <div className="timeline">
          <article>
            <h3>MIT Logarhythms</h3>
            <p className="timelineDate">2025–present</p>
            <p>
              Vocalist, section leader, and Social Media and Marketing
              Director for MIT&apos;s oldest a cappella group.
            </p>
          </article>

          <article>
            <h3>Pine Crest Select Choir</h3>
            <p className="timelineDate">2017–2024</p>
            <p>
              Eight years of choir, including service as an Upper School
              Officer. Selected for All-State and the American Choral Directors
              Association program.
            </p>
          </article>

          <article>
            <h3>NYU Steinhardt Contemporary Vocal Program</h3>
            <p className="timelineDate">Summer 2022</p>
            <p>
              Selected for intensive contemporary vocal training at NYU
              Steinhardt.
            </p>
          </article>

          <article>
            <h3>Grammy Summer Session</h3>
            <p className="timelineDate">Summer 2022</p>
            <p>
              Selected for a summer music program organized by the Recording
              Academy.
            </p>
          </article>

          <article>
            <h3>Frost School of Music</h3>
            <p className="timelineDate">Summer 2019</p>
            <p>
              Studied advanced songwriting and vocal performance through the
              Frost Young Musicians&apos; Camp.
            </p>
          </article>

          <article>
            <h3>Carnatic Music</h3>
            <p className="timelineDate">2010–2014</p>
            <p>
              Began musical training in Indian classical music and performed
              in temples in Connecticut and New York.
            </p>
          </article>
        </div>
      </section>

      <footer>© {new Date().getFullYear()} Annika Sachdeva</footer>
    </main>
  );
}