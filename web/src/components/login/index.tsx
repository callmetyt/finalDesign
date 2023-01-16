import { Component, Setter } from "solid-js";

interface LoginProps {
  setPageView: Setter<string>;
}

const Login: Component<LoginProps> = ({ setPageView }) => {
  function handler() {
    setPageView("home");
  }

  return (
    <section class="flex flex-col justify-center items-center h-full">
      <input
        type="text"
        class="input input-bordered m-4"
        placeholder="用户名"
      />
      <input
        type="password"
        class="input input-bordered m-4"
        placeholder="密码"
      />
      <button class="btn m-4" onClick={handler}>
        登录
      </button>
    </section>
  );
};

export default Login;
