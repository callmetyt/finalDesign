import { Component, createResource, createSignal, For } from "solid-js";

import { vaildChain } from "../../../../api/vaildChain";
import createInfoList from "./infoList";

const [netSignal, setNetSignal] = createSignal(false);
const [data] = createResource(netSignal, vaildChain);
const [loading, setLoading] = createSignal(false);
const [disable, setDisable] = createSignal(false);
const [btnText, setBtnText] = createSignal("点击进行区块链数据验证");
const [list, setList] = createSignal([]);

const infoList = createInfoList(10);

const VaildChain: Component = () => {
  let scrollRef: HTMLDivElement;
  const scrollToBottom = () => {
    setTimeout(() => {
      scrollRef.scrollTo({
        top: 9999,
        behavior: "smooth",
      });
    }, 0);
  };

  function handler() {
    setLoading(true);
    setDisable(true);
    setNetSignal(true);
    setBtnText("验证中...");
    setList([]);

    let index = 0;
    const addInfo = () => {
      setTimeout(() => {
        if (index === infoList.length) {
          setList((prev) => {
            setBtnText("区块链验证无误√");
            setNetSignal(false);
            setLoading(false);
            setDisable(false);
            scrollToBottom();
            return prev.concat("所有区块链区块检测完毕,信息无误");
          });
        } else {
          setList((prev) => {
            const cur = prev.concat(infoList[index]);
            index++;
            scrollToBottom();
            return cur;
          });
          addInfo();
        }
      }, Math.ceil(Math.random() * 2000));
    };

    addInfo();
  }

  return (
    <section class="flex flex-col justify-between">
      <div class="text-center text-xl font-bold">信息验证</div>
      <button
        class={`btn ${loading() ? "loading" : ""} ${
          data() ? "btn-success" : ""
        }`}
        disabled={disable()}
        onClick={handler}
      >
        {btnText()}
      </button>

      <div
        class="outline outline-1 outline-black h-96 w-96 overflow-y-auto"
        ref={scrollRef}
      >
        <For each={list()}>
          {(str) => {
            return (
              <div class="chat chat-start">
                <div class="chat-bubble">{str}</div>
              </div>
            );
          }}
        </For>
      </div>
    </section>
  );
};

export default VaildChain;
