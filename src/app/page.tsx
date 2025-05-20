"use client";

import React from "react";

import { Hello } from "@/components/hello";
import { ProfilePicture } from "@/components/profile-picture";
import { Counter } from "@/components/counter";

export default function Home() {
  const onClickFct = (profileUrl: string) => console.log(profileUrl);

  return (
    <main className="p-24">
      <Hello />
      <div className="flex">
        <ProfilePicture diameter={80} onClick={onClickFct} />
        <ProfilePicture
          diameter={150}
          profileUrl="https://randomuser.me/api/portraits/women/6.jpg"
          onClick={onClickFct}
        />
        <ProfilePicture
          profileUrl="https://randomuser.me/api/portraits/women/3.jpg"
          onClick={onClickFct}
        />
      </div>

      <Counter />
    </main>
  );
}
