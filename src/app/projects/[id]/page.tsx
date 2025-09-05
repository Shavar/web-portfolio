type ProjectPageProps = {
  params: { id: string };
};

export default function ProjectPage({ params }: ProjectPageProps) {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Project {params.id}</h1>
      <p className="mt-2 text-gray-600">
        This is the detail page for project <strong>{params.id}</strong>.
      </p>
    </main>
  );
}
