import { ReactElement } from "react";

interface SectionProps {
    id: string;
  children: ReactElement;
  bgColor?: string;
}
export default function Section({ id, children, bgColor}: SectionProps) {
  return (
    <section id={id} className={`w-full flex items-center justify-center flex-wrap py-20 text-center ${bgColor}`} >
        {children}
    </section>
  )
}
