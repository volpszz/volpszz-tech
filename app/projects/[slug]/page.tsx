import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "../../content";
import ProjectDetail from "../../project-detail";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return {
    title: `${project.name} | Arthur Volpato`,
    description: project.summary.pt,
    openGraph: {
      title: `${project.name} | Arthur Volpato`,
      description: project.summary.pt,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return <ProjectDetail project={project} />;
}
