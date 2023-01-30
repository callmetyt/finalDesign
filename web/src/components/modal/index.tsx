import { Component } from "solid-js";

const Modal: Component = () => {
  return (
    <>
      <input type="checkbox" id="my-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box">
          <h3 class="mb-2 font-bold text-lg text-center">茶叶溯源信息二维码</h3>

          <div id="qrcode-container" class="flex justify-center"></div>

          <div class="modal-action">
            <label for="my-modal" class="btn btn-success">
              关闭
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
