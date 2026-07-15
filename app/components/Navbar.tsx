import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link href="/" className="name">
        annika sachdeva
      </Link>

      <div className="navLinks">
        <Link href="/projects">ai/ml projects</Link>

        <Link href="/music">music</Link>

        <a href="/resume.pdf" target="_blank" rel="noreferrer">
          resume
        </a>

        <Link href="/contact">contact</Link>
      </div>
    </nav>
  );
}