import { Component, Match, Switch } from "solid-js";

import Home from "./components/home";
import Garden from "./components/garden";
import Pick from "./components/pick";
import Sale from "./components/sale";

interface MainProps {
  activeView: () => string;
}

const Main: Component<MainProps> = ({ activeView }) => {
  return (
    <main class="flex justify-center p-4">
      <Switch fallback={<section>Not Found</section>}>
        <Match when={activeView() === "home"}>
          <Home />
        </Match>
        <Match when={activeView() === "garden"}>
          <Garden />
        </Match>
        <Match when={activeView() === "pick"}>
          <Pick />
        </Match>
        <Match when={activeView() === "sale"}>
          <Sale />
        </Match>
      </Switch>
    </main>
  );
};

export default Main;
