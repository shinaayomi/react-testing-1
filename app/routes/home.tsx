import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Application } from "../components/application/Application";
import { Skills } from "~/components/skills/Skills";
import { Counter } from "~/components/counter/Counter";
import { MuiMode } from "~/components/mui/MuiMode";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  // return <Welcome />;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "px",
        alignItems: "center",
        paddingTop: "20px",
      }}
    >
      <Application />
      <Skills skills={["HTML", "CSS"]} />
      <Counter />
      <MuiMode />
    </div>
  );
}
