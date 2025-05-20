"use client";

import React from "react";

import { Hello } from "@/components/hello";

export default function Home() {
  // const helloText = React.createElement(
  //   "h1",
  //   { className: "text-3xl font-bold underline" },
  //   "Hello, Workshop"
  // );

  // const nav = React.createElement(
  //   "nav",
  //   null,
  //   React.createElement("ul", null, [
  //     React.createElement("li", { key: "123" }, "Clashes"),
  //     React.createElement("li", { key: "456" }, "Peers"),
  //   ])
  // );

  return (
    <main className="p-24">
      <Hello />
    </main>
  );
}
