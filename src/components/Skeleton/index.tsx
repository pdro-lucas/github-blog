export function ProfileCardSkeleton() {
  return (
    <>
      <div className="rounded-lg w-36 h-36 bg-base-post animate-pulse" />
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div className="w-48 h-6 bg-base-post animate-pulse" />
          <div className="w-16 h-6 bg-base-post animate-pulse" />
        </div>
        <div className="mt-4 space-y-2">
          <div className="w-full h-4 bg-base-post animate-pulse" />
          <div className="w-full h-4 bg-base-post animate-pulse" />
          <div className="w-3/4 h-4 bg-base-post animate-pulse" />
        </div>
        <div className="mt-4">
          <div className="w-2/4 h-4 bg-base-post animate-pulse" />
        </div>
      </div>
    </>
  );
}
