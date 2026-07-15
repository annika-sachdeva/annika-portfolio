import Navbar from "../components/Navbar";

const projects = [
  {
    category: "healthcare ai · computer vision",
    title: "KineX",
    role: "CEO & Co-Founder",
    description:
      "Built an AI-powered physical-therapy application for student athletes. KineX uses computer vision to evaluate movement, improve mobility, and reduce injury and health risks.",
    result:
      "Selected to pitch on the ASU+GSV main stage in front of more than 7,000 attendees.",
    technologies: ["Computer Vision", "AI", "Healthcare", "Product"],
  },
  {
    category: "medical ai research",
    title: "Early Pancreatic Cancer Detection",
    role: "Machine Learning Researcher · University of Miami Brain & AI Lab",
    description:
      "Developed a novel weighted-normalization method with Dr. Odelia Schwartz and applied it to early pancreatic-cancer detection and biomarker discovery.",
    result:
      "Achieved 94% accuracy and received recognition through IFoRE, Davidson Fellows, and Regeneron STS.",
    technologies: [
      "PyTorch",
      "Computer Vision",
      "Weighted Normalization",
      "DINOv2",
    ],
    link: "https://docs.google.com/presentation/d/1dHf-Gm8b6g2M_TnWNMYhcZyPsn8ykyRH/edit?usp=sharing&ouid=106700581379104332488&rtpof=true&sd=true",
    linkLabel: "View research poster",
  },
  {
    category: "planetary science · machine learning",
    title: "Mars Rover Resource Analysis",
    role: "Team Lead & Machine Learning Intern · NASA",
    description:
      "Analyzed mineral presence in the northern latitudes of Mars using JMARS to identify evidence relevant to past life and rover-resource utilization.",
    result:
      "Led mineral-search optimization and served as first author on the resulting publication.",
    technologies: [
      "Machine Learning",
      "JMARS",
      "Planetary Science",
      "Data Analysis",
    ],
    link: "https://ntrs.nasa.gov/citations/20230011739",
    linkLabel: "View NASA publication",
  },
  {
    category: "medical imaging",
    title: "Brain Tumor MRI Classification",
    role: "Machine Learning Researcher & First Author · Florida Atlantic University",
    description:
      "Constructed a convolutional neural network using DenseNet201 to classify MRI images and distinguish white matter in brain-tumor diagnosis.",
    result: "Reached 92% accuracy and published the work through IEEE.",
    technologies: ["CNN", "DenseNet201", "MRI", "TensorFlow"],
    link: "https://ieeexplore.ieee.org/document/10461821",
    linkLabel: "View IEEE publication",
  },
  {
    category: "multimodal ai",
    title: "Negotiation Skills Assessment",
    role: "Artificial Intelligence Researcher · MIT Sloan",
    description:
      "Built an AI-powered negotiation assessment that integrates multimodal behavioral signals to model human interaction and connect interpersonal cues to negotiation outcomes.",
    technologies: [
      "Multimodal AI",
      "Behavioral Modeling",
      "Audio Processing",
      "Machine Learning",
    ],
  },
  {
    category: "computer vision · retail",
    title: "Automated Inventory Monitoring",
    role: "Machine Learning Engineer · Peckish",
    description:
      "Developing computer-vision pipelines that detect and track product inventory from video feeds, enabling automated stock monitoring.",
    technologies: [
      "Computer Vision",
      "Object Tracking",
      "Video Processing",
      "Python",
    ],
  },
  {
    category: "audio ai",
    title: "Tonal Stress Detection",
    role: "Machine Learning Intern · Behavioral Signals",
    description:
      "Developed a tonal-stress detection model using an audio-processing API for applications in medicine and customer service.",
    technologies: [
      "Audio Processing",
      "Speech AI",
      "Behavioral Signals",
      "Python",
    ],
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
          Research and products across medical AI, computer vision, multimodal
          behavior modeling, audio intelligence, and planetary science.
        </p>
      </header>

      <section className="projectList">
        {projects.map((project) => (
          <article className="projectCard" key={project.title}>
            <p className="projectCategory">{project.category}</p>

            <h2>{project.title}</h2>

            <p className="projectRole">{project.role}</p>

            <p>{project.description}</p>

            {project.result && (
              <p className="projectResult">
                <strong>Outcome:</strong> {project.result}
              </p>
            )}

            <div className="tagList">
              {project.technologies.map((technology) => (
                <span className="tag" key={technology}>
                  {technology}
                </span>
              ))}
            </div>

            {project.link && (
              <a
                className="projectLink"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                {project.linkLabel} ↗
              </a>
            )}
          </article>
        ))}
      </section>

      <footer>© {new Date().getFullYear()} Annika Sachdeva</footer>
    </main>
  );
}