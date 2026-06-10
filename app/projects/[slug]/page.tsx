import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/lib/projects";
import CaseStudy from "@/components/CaseStudy";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getProject(params.slug);
  if (!p) return { title: "Case Study — Rhema Briggs" };
  return {
    title: `${p.title} — Case Study · Rhema Briggs`,
    description: p.sub,
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const p = getProject(params.slug);
  if (!p) notFound();
  return <CaseStudy project={p} />;
}
