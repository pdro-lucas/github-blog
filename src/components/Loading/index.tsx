import { Loader2 } from "lucide-react";

export function Loading() {
  return (
    <div className="flex items-center justify-center mt-12 text-blue">
      <Loader2 size={32} className="animate-spin" />
    </div>
  );
}
