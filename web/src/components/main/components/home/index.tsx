import { Component, Setter } from "solid-js";

interface HomeProps {
  setActiveView: Setter<string>;
}

const Home: Component<HomeProps> = ({ setActiveView }) => {
  const handler = () => {
    setActiveView("vaildChain");
  };

  return (
    <section class="grid grid-cols-1 grid-rows-3">
      <div class="m-auto text-2xl">欢迎您: 管理员1号</div>

      <button
        class="btn btn-circle btn-info w-32 h-32 m-auto relative"
        onClick={handler}
      >
        <span
          aria-hidden
          class="absolute left-2 top-2 w-28 h-28 border rounded-full border-solid border-blue-500 animate-ping"
        ></span>
        <span class="text-xl text-white">茶叶信息验证</span>
      </button>

      <div>
        <div class="text-center">距离上次信息验证已过:</div>
        <div class="text-center font-bold">1小时3分钟22秒</div>
      </div>
    </section>
  );
};

export default Home;
