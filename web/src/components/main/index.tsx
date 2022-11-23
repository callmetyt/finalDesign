import { Component, Match, Switch } from "solid-js";
import Home from "./components/home";
import Plant from "./components/plant";

interface MainProps {
  activeView: () => string;
}

const Main: Component<MainProps> = ({ activeView }) => {
  return (
    <main class="ml-4">
      <nav>{activeView()}</nav>
      <Switch fallback={<section>Not Found</section>}>
        <Match when={activeView() === "home"}>
          <Home />
        </Match>
        <Match when={activeView() === "plant"}>
          <Plant />
        </Match>
      </Switch>
    </main>
  );
};

export default Main;
