import Link from "next/link";

const projects = [
  { id: "1", name: "Portfolio Website" },
  { id: "2", name: "Weather App" },
  { id: "3", name: "Car Tracker" },
];

export default function ProjectsPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Projects</h1>
      <ul className="mt-4 space-y-2">
        {projects.map((project) => (
          <li key={project.id}>
            <Link href={`/projects/${project.id}`} className="text-blue-600 hover:underline">
              {project.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
