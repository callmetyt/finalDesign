import { Component } from "solid-js";

const Header: Component = () => {
  return (
    <header class="navbar col-span-2 bg-base-300">
      <div class="navbar-start">
        <a class="btn btn-ghost text-xl">茶叶溯源系统</a>
      </div>
      <div class="navbar-end">
        <a class="btn btn-ghost text-error">注销</a>
      </div>
    </header>
  );
};

export default Header;
