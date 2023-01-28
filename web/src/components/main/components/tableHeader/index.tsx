import { Component, createSignal, Setter } from "solid-js";

import { TeaInfo } from "../../../../types";

interface TableHeaderProps {
  // eslint-disable-next-line no-unused-vars
  apiFunction: (key: string) => Promise<TeaInfo[]>;
  mutate: Setter<TeaInfo[]>;
}

const [searchKey, setSearchKey] = createSignal("");

const TableHeader: Component<TableHeaderProps> = ({ apiFunction, mutate }) => {
  return (
    <header class="pt-2 pb-2 pl-1">
      <input
        type="text"
        class="input input-bordered input-sm mr-1 w-32"
        placeholder="输入关键字"
        value={searchKey()}
        onChange={(e) => {
          setSearchKey((e.target as HTMLInputElement).value);
        }}
      />
      <button
        class="btn btn-outline btn-primary btn-sm"
        onClick={async () => {
          const data = await apiFunction(searchKey());
          mutate(data);
          setSearchKey("");
        }}
      >
        搜索
      </button>
    </header>
  );
};

export default TableHeader;
