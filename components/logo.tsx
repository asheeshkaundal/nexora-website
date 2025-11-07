import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <div
      aria-label="Nexora Global logo"
      role="img"
      className="flex items-center gap-2"
    >
      <Image
        src="/images/nexora-final.png"
        alt="Nexora Global crest logo"
        width={150}
        height={150}
        className={`h-24 md:h-32 w-auto scale-150 ${className ?? ""}`}
      />
    </div>
  );
}
