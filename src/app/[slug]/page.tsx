// import { getPageBySlug, getAllPages, getAllProjects } from "@/lib/contentful";
// import Link from "next/link";

// type Page = {
//   title: string;
//   content: unknown; // Contentful rich text can be complex
//   pageType: string;
//   slug: string;
// };

// type PageProps = { params: Promise<{ slug: string }> };

// // Optional: pre-generate some pages
// export async function generateStaticParams() {
//   const pages = await getAllPages();
//   return pages.map((p) => ({ slug: p.slug }));
// }

// export default async function Page({ params }: PageProps) {
//   const { slug } = await params;
//   const page = (await getPageBySlug(slug)) as Page;

//   if (!page) return <p>Page not found</p>;

//   // Example: render projects differently
//   if (page.pageType === "projects") {
//     const projects = await getAllProjects();
//     return (
//       <main className="p-6">
//         <h1 className="text-2xl font-bold">{page.title}</h1>
//         <ul className="mt-4 space-y-2">
//           {projects.map((project) => (
//             <li key={project.slug}>
//               <Link href={`/projects/${project.slug}`} className="text-blue-600 hover:underline">
//                 {project.title}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </main>
//     );
//   }

//   // Generic page rendering
//   return (
//     <main className="p-6">
//       <h1 className="text-2xl font-bold">{page.title}</h1>
//       <div>{page.content as string}</div>
//     </main>
//   );
// }

import { getAllPages } from "@/lib/contentful"; // Adjust path if needed

// This is a Server Component (runs on the server)
export default async function HomePage() {
  // This call runs 100% on the server, where your .env variables exist
  const pages = await getAllPages();

  return (
    <main>
      <h1>My Pages</h1>
      <ul>
        {pages.map((page) => (
          <li key={page.slug}>{page.title}</li>
        ))}
      </ul>
    </main>
  );
}
