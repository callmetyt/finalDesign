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
          <div class="avatar">
            <div class=" w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://img0.baidu.com/it/u=1353920736,1281326498&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" />
            </div>
          </div>
          <span class="text-xl">管理员1号</span>
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
