import { Component, createSignal } from "solid-js";

import Asdie from "./components/aside";
import Main from "./components/main";

const [activeView, setActiveView] = createSignal("home");

const App: Component = () => {
  return (
    <>
      <Asdie activeView={activeView} setActiveView={setActiveView} />
      <Main activeView={activeView}></Main>
    </>
  );
};

export default App;
