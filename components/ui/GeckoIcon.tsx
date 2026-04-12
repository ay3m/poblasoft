import Image from "next/image";

interface GeckoIconProps {
  size?: number;
  className?: string;
}

export default function GeckoIcon({ size = 24, className = "" }: GeckoIconProps) {
  return (
    <Image
      src="/images/gecko-icon.png"
      alt="Gekko"
      width={size}
      height={size}
      className={`inline-block ${className}`}
    />
  );
}
