"use client";

import { GitFork, Star } from "lucide-react";

import { cn } from "@/lib/utils";
import { formatRelativeDate, useGithubRepo } from "@/lib/use-github-repo";

export default function RepoStats({ repo }: { repo: string }) {
  const { data, isLoading, isError } = useGithubRepo(repo);

  if (isError) {
    return (
      <p className="font-mono text-[10.5px] text-[var(--muted-2)]">
        Estadísticas de GitHub no disponibles ahora mismo.
      </p>
    );
  }

  return (
    <div className="flex items-center gap-4 font-mono text-[11px] text-[var(--muted)]">
      <span className={cn("flex items-center gap-1.5", isLoading && "animate-pulse")}>
        <Star size={12} className="text-[var(--accent)]" />
        {isLoading ? "···" : data?.stars}
      </span>

      <span className={cn("flex items-center gap-1.5", isLoading && "animate-pulse")}>
        <GitFork size={12} />
        {isLoading ? "···" : data?.forks}
      </span>

      {!isLoading && data?.pushedAt && (
        <span className="text-[var(--muted-2)]">
          último commit {formatRelativeDate(data.pushedAt)}
        </span>
      )}
    </div>
  );
}
