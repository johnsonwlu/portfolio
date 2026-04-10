export default function Terminal() {
  return (
    <div className="w-full max-w-md rounded-xl border border-zinc-700 bg-[#141414] overflow-hidden shadow-2xl font-mono text-sm flex-shrink-0">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-zinc-700 bg-[#1a1a1a] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
        <span className="h-3 w-3 rounded-full bg-green-500/80" />
        <span className="ml-2 text-xs text-zinc-500">johnson-lu ~ zsh</span>
      </div>

      {/* Terminal body */}
      <div className="p-5 space-y-4 text-xs leading-relaxed">
        <div>
          <p><span className="text-green-400">~</span> <span className="text-blue-400">$</span> <span className="text-white">whoami</span></p>
          <p className="text-zinc-300 mt-1">johnson-lu</p>
        </div>

        <div>
          <p><span className="text-green-400">~</span> <span className="text-blue-400">$</span> <span className="text-white">cat profile.yaml</span></p>
          <div className="mt-1 space-y-0.5">
            <p><span className="text-blue-400">role</span><span className="text-zinc-500">:</span> <span className="text-green-300">DevOps Engineer</span></p>
            <p><span className="text-blue-400">company</span><span className="text-zinc-500">:</span> <span className="text-green-300">D3 Security</span></p>
            <p><span className="text-blue-400">education</span><span className="text-zinc-500">:</span> <span className="text-green-300">BSc CS @ UBC</span></p>
            <p><span className="text-blue-400">focus</span><span className="text-zinc-500">:</span></p>
            <p className="pl-4"><span className="text-zinc-500">-</span> <span className="text-yellow-300">Infrastructure as Code</span></p>
            <p className="pl-4"><span className="text-zinc-500">-</span> <span className="text-yellow-300">CI/CD Automation</span></p>
            <p className="pl-4"><span className="text-zinc-500">-</span> <span className="text-yellow-300">GitOps & Kubernetes</span></p>
          </div>
        </div>

        <div>
          <p><span className="text-green-400">~</span> <span className="text-blue-400">$</span> <span className="text-white">kubectl get skills</span></p>
          <div className="mt-1 space-y-0.5">
            <p className="text-zinc-500">NAME &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; STATUS &nbsp;&nbsp; AGE</p>
            <p><span className="text-zinc-300">pulumi &nbsp;&nbsp;&nbsp;&nbsp;</span><span className="text-green-400">Running &nbsp;</span><span className="text-zinc-500">1y</span></p>
            <p><span className="text-zinc-300">argo-cd &nbsp;&nbsp;&nbsp;</span><span className="text-green-400">Running &nbsp;</span><span className="text-zinc-500">1y</span></p>
            <p><span className="text-zinc-300">kubernetes &nbsp;</span><span className="text-green-400">Running &nbsp;</span><span className="text-zinc-500">2y</span></p>
            <p><span className="text-zinc-300">python &nbsp;&nbsp;&nbsp;&nbsp;</span><span className="text-green-400">Running &nbsp;</span><span className="text-zinc-500">4y</span></p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <span className="text-green-400">~</span>
          <span className="text-blue-400">$</span>
          <span className="ml-1 inline-block h-3.5 w-2 bg-blue-400 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
