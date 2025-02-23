
import Image from "next/image";
import React from "react";

export const FrontendImageList = () => {
  return (
    <ImageGrid images={[
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg", alt: "HTML5 LOGO" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg", alt: "CSS LOGO" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", alt: "Javascript LOGO" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", alt: "React LOGO" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", alt: "TailwindCSS LOGO" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg", alt: "Bootstrap LOGO" },
    ]} />
  );
};

export const BackendImageList = () => {
  return (
    <ImageGrid images={[
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", alt: "TypeScript LOGO" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg", alt: "Node.js LOGO" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", alt: "Express LOGO" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", alt: "Next.js LOGO" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg", alt: "NestJS LOGO" },
      { src: "https://cloud.githubusercontent.com/assets/149081/10471375/3e6b4c78-71e3-11e5-90c9-77916b5b13de.jpg", alt: "Nunjucks LOGO" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg", alt: "C LOGO" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", alt: "Java LOGO" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original-wordmark.svg", alt: "SQLite LOGO" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sequelize/sequelize-original-wordmark.svg", alt: "Sequelize LOGO" },
    ]} />
  );
};

export const ToolImageList = () => {
  return (
    <ImageGrid images={[
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg", alt: "VSCode LOGO" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", alt: "Git LOGO" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", alt: "GitHub LOGO" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg", alt: "GitLab LOGO" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg", alt: "Linux LOGO" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-original.svg", alt: "Ubuntu LOGO" },
    ]} />
  );
};

export const OtherImageList = () => {
  return (
    <ImageGrid images={[
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-original.svg", alt: "Slack LOGO" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg", alt: "Unity LOGO" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg", alt: "Blender LOGO" },
    ]} />
  );
};

const ImageGrid = ({ images }: { images: { src: string; alt: string }[] }) => {
  return (
    <div className="max-w-3xl w-full mx-auto grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6 p-3">
      {images.map((image, index) => (
        <ImageItem key={index} src={image.src} alt={image.alt} />
      ))}
    </div>
  );
};

const ImageItem = ({ src, alt }: { src: string; alt: string }) => (
  <Image
    width={80}
    height={80}
    className="w-10 h-10 md:w-20 md:h-20 object-contain"
    src={src}
    alt={alt}
  />
);

