import Link from 'next/link';
import layout from './layout';
import './page.css';

const researchTools = [
  {
    id: 1,
    title: "AI Powered Ipad Calculator",
    description: "Get AI-powered research summaries and insights",
    icon: "🔍",
    link: "http://localhost:5173/",
    color: "primary"
  },
  {
    id: 2,
    title: "Hidden-link-detector",
    description: "Automated literature analysis and citation management",
    icon: "📚",
    link: "https://hidden-image-tool-6ql9.vercel.app/",
    color: "success"
  },
  {
    id: 3,
    title: "TEST-GENERATOR",
    description: "AI-powered data analysis and visualization",
    icon: "📊",
    link: "https://test-generator-v3.vercel.app/",
    color: "info"
  },
  {
    id: 4,
    title: "Paper Summarizer",
    description: "Summarize research papers in seconds",
    icon: "📄",
    link: "/tools/research/summarizer",
    color: "warning"
  },
  {
    id: 5,
    title: "Citation Generator",
    description: "Automatically generate citations in any format",
    icon: "🔗",
    link: "/tools/research/citations",
    color: "secondary"
  },
  {
    id: 6,
    title: "Student Planner",
    description: "Plan and track your daily projects",
    icon: "📅",
    link: "https://weekly-reminder.vercel.app/",
    color: "dark"
  }
];

export default function ResearchTools() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-dark mb-3">
          Research Tools
        </h1>
        <p className="lead text-muted">
          Powerful AI tools to accelerate your research workflow
        </p>
      </div>

      <div className="row g-4">
        {researchTools.map((tool) => (
          <div key={tool.id} className="col-md-6 col-lg-4">
            <Link href={tool.link} className="text-decoration-none">
              <div className={`card h-100 border-0 shadow-sm hover-shadow transition-all`}>
                <div className="card-body text-center p-4">
                  <div className={`text-${tool.color} mb-3`} style={{ fontSize: '3rem' }}>
                    {tool.icon}
                  </div>
                  <h5 className="card-title fw-bold text-dark mb-3">
                    {tool.title}
                  </h5>
                  <p className="card-text text-muted">
                    {tool.description}
                  </p>
                </div>
                <div className="card-footer bg-transparent border-0 pb-4">
                  <span className={`btn btn-${tool.color} px-4`}>
                    Open Tool
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}