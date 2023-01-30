/* @refresh reload */
import "./index.css";
import { render } from "solid-js/web";

import App from "./App";
import Modal from "./components/modal";

render(() => <App />, document.getElementById("root") as HTMLElement);
render(
  () => <Modal />,
  document.getElementById("modal-container") as HTMLDivElement
);
