import Image from "next/image";
import Navbar from "../components/Navbar";

const projects = [
  {
    title: "KineX",
    category: "Healthcare · Computer Vision",
    role: "CEO & Co-Founder",
    description:
      "An AI-powered physical-therapy platform for student athletes that uses computer vision to improve mobility and reduce injury risk.",
    result:
      "Selected to pitch on the main stage of the ASU+GSV conference in front of more than 7,000 attendees.",
    tags: ["Computer Vision", "Healthcare", "Product", "Python"],
    mediaType: "video",
    media: "/Kinex.mp4",
  },
  {
    title: "Peckish",
    category: "Computer Vision · Inventory Intelligence",
    role: "Machine Learning Engineer",
    description:
      "Developed video-based computer-vision pipelines for detecting, tracking, and counting high-density inventory.",
    result:
      "Built workflows focused on accurate item counting and preventing duplicate detections across video frames.",
    tags: ["OWLv2", "Object Tracking", "PyTorch", "Python"],
    mediaType: "image",
    media: "/peckish.jpg",
  },
  {
    title: "Pancreatic Cancer Imaging Research",
    category: "Medical Imaging · Deep Learning",
    role: "Researcher",
    description:
      "Developed a visual-transformer architecture using weighted normalization for medical-image classification.",
    result:
      "The research was recognized through the Regeneron Science Talent Search and Davidson Fellows Scholarship.",
    tags: ["Vision Transformers", "Medical Imaging", "Deep Learning"],
    mediaType: "image",
    media: "/pancreatic.jpg",
  },
  {
    title: "Brain MRI Classification System",
    category: "Healthcare AI · Medical Imaging",
    role: "Machine Learning Researcher",
    description:
      "Designed an end-to-end workflow for processing brain MRI scans and generating machine-learning classification reports.",
    result:
      "Created a system architecture covering patient-data handling, image verification, model inference, and report generation.",
    tags: ["MRI", "DenseNet", "Healthcare AI", "Classification"],
    mediaType: "image",
    media: "/brain.jpg",
  },
  {
    title: "Mars Landing-Site Research",
    category: "Planetary Science · Data Analysis",
    role: "NASA Researcher",
    description:
      "Analyzed potential Mars landing trajectories and scientific targets using geographic and mission-planning data.",
    result:
      "Mapped traverses between candidate landing points and high-value geological regions.",
    tags: ["NASA", "Planetary Science", "Geospatial Analysis"],
    mediaType: "image",
    media: "/mars.jpg",
  },
  {
    title: "AI Negotiation Assessment",
    category: "Behavioral AI · Human-Centered AI",
    role: "Artificial Intelligence Researcher",
    description:
      "Building an AI-powered negotiation-skills assessment that models human negotiation dynamics and interpersonal behavior.",
    result:
      "Connects behavioral signals and negotiation patterns to performance outcomes.",
    tags: ["Behavioral AI", "Multimodal AI", "Human-Centered AI"],
    mediaType: "image",
    media: "/sloan.jpg",
  },
  {
    title: "Behavioral Signals",
    category: "Speech AI · Behavioral Analytics",
    role: "Machine Learning Intern",
    description:
      "Worked on machine-learning systems that analyze speech and behavioral signals from human interaction.",
    result:
      "Contributed to applied AI workflows for extracting meaningful behavioral information from conversational data.",
    tags: ["Speech AI", "Behavioral Analytics", "Machine Learning"],
    mediaType: "image",
    media: "/behavioral.jpg",
  },
];

export default function ProjectsPage() {
  return (
    <main className="container">
      <Navbar />

      <header className="pageHeader">
        <p className="eyebrow">selected work</p>

        <h1>ai/ml projects</h1>

        <p>
          A selection of projects across artificial intelligence, computer
          vision, healthcare, behavioral modeling, and scientific research.
        </p>
      </header>

      <section className="projectList">
        {projects.map((project) => (
          <article className="projectCard projectCardWithMedia" key={project.title}>
            <div className="projectText">
              <p className="projectCategory">{project.category}</p>

              <h2>{project.title}</h2>

              <p className="projectRole">{project.role}</p>

              <p>{project.description}</p>

              <p className="projectResult">{project.result}</p>

              <div className="tagList">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div
              className={
                project.mediaType === "video"
                  ? "projectMedia projectMediaVideo"
                  : "projectMedia projectMediaImage"
              }
            >
              {project.mediaType === "video" ? (
                <video
                  className="projectVideo"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label={`${project.title} demonstration`}
                >
                  <source src={project.media} type="video/mp4" />

                  Your browser does not support embedded video.
                </video>
              ) : (
                <Image
                  src={project.media}
                  alt={`${project.title} project visual`}
                  width={1000}
                  height={700}
                  sizes="(max-width: 720px) 100vw, 300px"
                  className="projectImage"
                />
              )}
            </div>
          </article>
        ))}
      </section>

      <footer>© {new Date().getFullYear()} Annika Sachdeva</footer>
    </main>
  );
}