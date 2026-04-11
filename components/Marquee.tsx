const companies = [
  "D3 Security",
  "Eureka DevSecOps",
  "Smile Digital Health",
];

const items = Array(8).fill(companies).flat();

export default function Marquee() {
  return (
    <div className="border-y border-zinc-800 py-10">
      <p className="text-center font-mono text-xs uppercase tracking-widest text-zinc-600 mb-8">
        Built for teams at
      </p>
      <div
        className="relative overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee">
          {items.map((company, i) => (
            <span key={i} className="flex items-center gap-10 px-10 text-xl font-semibold text-zinc-400">
              {company}
              <span className="text-zinc-700">·</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
