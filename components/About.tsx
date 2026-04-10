import Image from "next/image";
import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-16 sm:flex-row">
        <FadeIn delay={0}>
          <div className="flex-shrink-0">
            <Image
              src="/images/profile.jpeg"
              alt="Johnson Lu"
              width={220}
              height={220}
              className="rounded-2xl object-cover"
            />
          </div>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-blue-500">
              About
            </p>
            <h2 className="mb-6 text-2xl font-semibold leading-snug text-white">
              I bridge the gap between software and infrastructure.
            </h2>
            <p className="leading-relaxed text-zinc-400">
              I&apos;m a DevOps Engineer at D3 Security with a background in full-stack software
              development. My focus is on the infrastructure layer — designing CI/CD pipelines, IaC
              platforms, and GitOps workflows that reduce friction between development and operations.
              I care about translating complex systems into reliable, reproducible processes that let
              engineering teams move faster. I hold a B.Sc. in Computer Science from UBC.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
