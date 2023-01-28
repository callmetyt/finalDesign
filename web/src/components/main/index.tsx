import { Component, Match, Setter, Switch } from "solid-js";

import Home from "./components/home";
import Garden from "./components/garden";
import Pick from "./components/pick";
import Sale from "./components/sale";
import VaildChain from "./components/vaildChain";

interface MainProps {
  activeView: () => string;
  setActiveView: Setter<string>;
}

const Main: Component<MainProps> = ({ activeView, setActiveView }) => {
  return (
    <main class="flex justify-center p-8">
      <Switch fallback={<section>Not Found</section>}>
        <Match when={activeView() === "home"}>
          <Home setActiveView={setActiveView} />
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
        <Match when={activeView() === "vaildChain"}>
          <VaildChain />
        </Match>
      </Switch>
    </main>
  );
};

export default Main;
