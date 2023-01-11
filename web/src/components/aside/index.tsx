import { Component, For, Setter } from "solid-js";

import asideList from "./asideList";

interface AsdieProps {
  activeView: () => string;
  setActiveView: Setter<string>;
}

const Asdie: Component<AsdieProps> = ({ activeView, setActiveView }) => {
  return (
    <ul class="menu bg-base-200">
      <li class="menu-title mt-4">
        <span>用户</span>
      </li>
      <li>
        <a class="flex flex-col">
          <img src="" alt="头像" />
          <span>username</span>
        </a>
      </li>

      <li class="menu-title mt-4">
        <span>功能</span>
      </li>
      <For each={asideList}>
        {({ key, title }) => (
          <li class={`${activeView() === key ? "bordered" : ""}`}>
            <a
              onClick={() => {
                setActiveView(key);
              }}
            >
              {title}
            </a>
          </li>
        )}
      </For>
    </ul>
  );
};

export default Asdie;
