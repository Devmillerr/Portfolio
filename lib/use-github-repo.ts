"use client";

import { useQuery } from "@tanstack/react-query";

export type GithubRepoStats = {
  stars: number;
  forks: number;
  pushedAt: string;
  archived: boolean;
};

async function fetchRepo(repo: string): Promise<GithubRepoStats> {
  const response = await fetch(`https://api.github.com/repos/${repo}`, {
    headers: { Accept: "application/vnd.github+json" },
  });

  if (!response.ok) {
    throw new Error(`GitHub respondió ${response.status} para ${repo}`);
  }

  const data = await response.json();

  return {
    stars: data.stargazers_count ?? 0,
    forks: data.forks_count ?? 0,
    pushedAt: data.pushed_at,
    archived: Boolean(data.archived),
  };
}

export function useGithubRepo(repo: string) {
  return useQuery({
    queryKey: ["github-repo", repo],
    queryFn: () => fetchRepo(repo),
    staleTime: 1000 * 60 * 30,
  });
}

export function formatRelativeDate(iso: string) {
  const date = new Date(iso);
  const days = Math.floor((Date.now() - date.getTime()) / (1000 * 60 * 60 * 24));

  if (days <= 0) return "hoy";
  if (days === 1) return "ayer";
  if (days < 30) return `hace ${days} d`;
  const months = Math.floor(days / 30);
  if (months < 12) return `hace ${months} m`;
  const years = Math.floor(months / 12);
  return `hace ${years} a`;
}
