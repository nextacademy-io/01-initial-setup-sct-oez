"use client";

import Image from "next/image";

export interface ProfilePictureProps {
  diameter?: number;
  profileUrl?: string;

  onClick?: (profileUrl: string) => void;
}
export function ProfilePicture({
  diameter = 100,
  profileUrl = "https://randomuser.me/api/portraits/men/1.jpg",
  onClick,
}: ProfilePictureProps): React.ReactNode {
  return (
    <div
      role="button"
      className="max-w-fit hover:opacity-70 transition-opacity duration-300 hover:cursor-pointer"
      onClick={() => onClick?.(profileUrl)}
    >
      <Image
        className="rounded-full object-cover m-2"
        src={profileUrl}
        width={diameter}
        height={diameter}
        alt="Profile Picture"
      />
    </div>
  );
}
