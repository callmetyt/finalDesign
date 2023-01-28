import { Component, Setter } from "solid-js";

interface HeaderProps {
  setPageView: Setter<string>;
}

const Header: Component<HeaderProps> = ({ setPageView }) => {
  return (
    <header class="navbar col-span-2 bg-base-300 shadow-lg">
      <div class="navbar-start">
        <a class="btn btn-ghost text-xl">茶叶溯源系统</a>
      </div>
      <div class="navbar-end">
        <a
          class="btn btn-ghost text-error"
          onClick={() => {
            setPageView("login");
          }}
        >
          注销
        </a>
      </div>
    </header>
  );
};

export default Header;
