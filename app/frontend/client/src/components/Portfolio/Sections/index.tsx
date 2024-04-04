import { ReactNode } from "react";

interface SectionProps {
    id: string;
    title: string;
    children: ReactNode;
}
export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="container flex" title={title}>
        {children}
    </section>
  )
}
