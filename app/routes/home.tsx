import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Application } from "../components/application/Application";
import { Skills } from "~/components/skills/Skills";
import { Counter } from "~/components/counter/Counter";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  // return <Welcome />;
  return (
    <div>
      <Application />
      <Skills skills={["HTML", "CSS"]} />
      <Counter />
    </div>
  );
}
