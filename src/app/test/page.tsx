"use client";

import * as React from "react";
import { ComboboxInput } from "@/components/Composites/ComboboxInput";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
  {
    value: "gatsby",
    label: "Gatsby",
  },
  {
    value: "angular-universal",
    label: "Angular Universal",
  },
  {
    value: "blitz.js",
    label: "Blitz.js",
  },
  {
    value: "eleventy",
    label: "Eleventy",
  },
  {
    value: "ember.js",
    label: "Ember.js",
  },
  {
    value: "qwik",
    label: "Qwik",
  },
  {
    value: "redwoodjs",
    label: "RedwoodJS",
  },
  {
    value: "hugo",
    label: "Hugo",
  },
  {
    value: "vuepress",
    label: "VuePress",
  },
  {
    value: "jekyll",
    label: "Jekyll",
  },
];

const page = () => {
  return (
    <main>
      <ComboboxInput inputData={frameworks} defaultValue="Prospects..." />
    </main>
  );
};

export default page;
