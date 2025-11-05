import { getProjectBySlug, getAllProjects } from "@/lib/contentful";

type Project = {
  id: string;
  title: string;
  description: string;
  slug: string;
};

type ProjectPageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  try {
    const projects = await getAllProjects();
    return projects.map((p) => ({ slug: p.slug }));
  } catch (error) {
    console.error("Error generating static params for projects:", error);
    return [];
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = (await getProjectBySlug(slug)) as Project;
  if (!project) return <p>Project not found</p>;

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">{project.title}</h1>
      <p className="mt-2 text-gray-600">{project.description}</p>
    </main>
  );
}
