import { Component, createSignal, Match, Switch } from "solid-js";

import Asdie from "./components/aside";
import Header from "./components/header";
import Login from "./components/login";
import Main from "./components/main";

const [pageView, setPageView] = createSignal("login");
const [activeView, setActiveView] = createSignal("home");

const App: Component = () => {
  return (
    <Switch
      fallback={
        <div class="text-center w-full text-xl">404 Page Not Found</div>
      }
    >
      <Match when={pageView() === "home"}>
        <div class="h-full grid grid-cols-[12rem_1fr] grid-rows-[4rem_1fr]">
          <Header setPageView={setPageView} />
          <Asdie activeView={activeView} setActiveView={setActiveView} />
          <Main activeView={activeView}></Main>
        </div>
      </Match>
      <Match when={pageView() === "login"}>
        <Login setPageView={setPageView} />
      </Match>
    </Switch>
  );
};

export default App;
