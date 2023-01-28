import { Component, Setter } from "solid-js";

interface LoginProps {
  setPageView: Setter<string>;
}

const Login: Component<LoginProps> = ({ setPageView }) => {
  function handler() {
    setPageView("home");
  }

  return (
    <div class="card-compact m-auto w-96 mt-10 bg-base-200 shadow-2xl">
      <figure>
        <img
          src="https://img0.baidu.com/it/u=597677193,933427262&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
          alt=""
          class="h-48 w-full object-cover"
        />
      </figure>
      <div class="card-body">
        <div class="card-title">
          <button class="btn btn-ghost text-xl m-4">用户登录</button>
        </div>
        <input
          type="text"
          class="input input-bordered m-4"
          placeholder="请输入用户名"
        />
        <input
          type="password"
          class="input input-bordered m-4"
          placeholder="请输入密码"
        />
        <div class="card-actions">
          <button class="btn btn-success m-auto mt-4 w-52" onClick={handler}>
            login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
