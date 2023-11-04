import { ProfileCard } from "@/components/ProfileCard";

export function Home() {
  return (
    <main className="w-full max-w-4xl px-4 mx-auto">
      <ProfileCard />
      <div className="mt-16 space-y-12">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-lg font-bold text-base-subtitle">
            Publicações
          </span>
          <span className="text-sm text-base-span">6 Publicações</span>
          <input
            type="text"
            className="w-full px-4 py-3 border rounded-md outline-none bg-base-input border-base-border placeholder:text-base-border"
            placeholder="Buscar conteúdo"
          />
        </div>
        <div className="flex flex-wrap gap-8">
          <div className="p-8 bg-base-post rounded-xl w-[416px] space-y-5">
            <div className="flex items-baseline justify-between gap-6">
              <span className="text-xl font-bold text-base-title">
                JavaScript data types and data structures
              </span>
              <span className="text-xs whitespace-nowrap text-base-span">
                Há 1 dia
              </span>
            </div>
            <p className="line-clamp-4">
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
