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
        <a class="grid grid-rows-2 grid-cols-2">
          <img src="" alt="头像" />
          <span>username</span>
          <div class="text-green-400">在线</div>
          <button class="text-red-400">注销</button>
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
