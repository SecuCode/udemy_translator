import Image from 'next/image';

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
  useSvg?: boolean;
}

export default function Logo({
  width = 40,
  height = 22,
  className,
  useSvg = false,
}: LogoProps) {
  const src = useSvg
    ? '/images/logo/logo-original.svg'
    : '/images/logo/logo-original.png';

  return (
    <Image
      src={src}
      alt="메타자산운용 로고"
      width={width}
      height={height}
      className={className}
      priority
      style={{ objectFit: 'contain' }}
      unoptimized={useSvg}
    />
  );
}
