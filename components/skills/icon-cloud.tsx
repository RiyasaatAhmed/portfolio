"use client";

import React, { useEffect, useState, ReactNode } from "react";
import {
  Cloud,
  renderSimpleIcon,
  fetchSimpleIcons,
  type SimpleIcon,
} from "react-icon-cloud";

interface SimpleIconsResponse {
  simpleIcons: {
    [key: string]: SimpleIcon;
  };
}

const useIcons = (slugs: string[]): ReactNode => {
  const [icons, setIcons] = useState<SimpleIconsResponse | null>(null);

  useEffect(() => {
    fetchSimpleIcons({ slugs }).then(setIcons);
  }, [slugs]);

  if (icons) {
    return Object.values(icons.simpleIcons).map((icon) =>
      renderSimpleIcon({
        icon,
        size: 80,
        aProps: {
          onClick: (e: React.MouseEvent<HTMLAnchorElement>) =>
            e.preventDefault(),
        },
      })
    );
  }

  return <a>Loading</a>;
};

const slugs: string[] = [
  "typescript",
  "javascript",
  "react",
  "nextdotjs",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "mongodb",
  "mongoose",
  "reactrouter",
  "reactbootstrap",
  "reactquery",
  "reactos",
  "reacttable",
  "reacthookform",
  "zod",
  "redux",
  "xstate",
  "recoil",
  "mobx",
  "prisma",
  "postgresql",
  "vercel",
  "testinglibrary",
  "jest",
  "docker",
  "git",
  "jira",
  "github",
  "jest",
  "nestjs",
  "python",
  "styledcomponents",
  "tailwindcss",
  "shadcnui",
  "mui",
  "stackoverflow",
  "graphql",
  "apollographql",
  "langchain",
  "openai",
  "ollama",
  "google",
  "googlegemini",
  "chakraui",
  "claude",
  "amazonecs",
  "linux",
  "fastapi",
  "supabase",
  "llm",
];

export const IconCloud: React.FC = () => {
  const icons = useIcons(slugs);
  const [cloudId, setCloudId] = useState<string | null>(null);

  useEffect(() => {
    setCloudId(`skills-canvas`);
  }, []);

  if (!cloudId) return null;

  return (
    <Cloud
      id={cloudId}
      containerProps={{ className: "flex justify-center" }}
      options={{
        reverse: true,
        depth: 1,
        wheelZoom: false,
        activeCursor: "default",
        initial: [0.1, -0.1],
        tooltipDelay: 0,
        outlineColour: "#0000",
        maxSpeed: 0.04,
        minSpeed: 0.02,
      }}
    >
      <></>
      {icons}
    </Cloud>
  );
};
