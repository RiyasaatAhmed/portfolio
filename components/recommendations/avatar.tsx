import Image from "next/image";

interface AvatarProps {
  src: string;
  name: string;
}

export function Avatar({ src, name }: AvatarProps) {
  return (
    <div className="w-[100px] h-[100px] relative mx-auto my-2">
      <div className="group relative w-full h-full">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 animate-gradient p-[1px]">
          <div className="w-full h-full rounded-full bg-background">
            <Image
              src={src}
              alt={`${name} Avatar`}
              width={60}
              height={60}
              className="rounded-full w-full h-full object-cover"
              // loading="lazy" is default
            />
          </div>
        </div>
      </div>
    </div>
  );
}
