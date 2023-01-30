import { Component, createRenderEffect, createResource, For } from "solid-js";

import { getGardenInfo } from "../../../../api/getGardenInfo";
import { getTeaInfo } from "../../../../api/getTeaInfo";
import generateQrcode from "../../../../utils/generateQrcode";
import Pagination, { createPagination } from "../pagination";
import TableHeader from "../tableHeader";
import { gardenHeader } from "./garden";

const [data, { refetch }] = createResource(getTeaInfo);

const Garden: Component = () => {
  createRenderEffect(() => {
    refetch();
  });

  const {
    activeListData,
    isEnd,
    isStart,
    next,
    previous,
    toEnd,
    toStart,
    resetAllData,
  } = createPagination(data(), 5);

  return (
    <section class="overflow-x-auto flex-1">
      <TableHeader mutate={resetAllData} apiFunction={getGardenInfo} />

      <table class="table w-full">
        <thead>
          <tr>
            <For each={gardenHeader}>
              {(title) => <th class="text-center">{title}</th>}
            </For>
          </tr>
        </thead>

        <tbody class="text-center">
          <For
            each={activeListData()}
            fallback={<div class="pt-4 font-bold text-xl">暂无数据</div>}
          >
            {(item) => {
              const { tid, garden } = item;
              const { name, teaType, ph, area, altitude, address } = garden;
              return (
                <tr class="hover">
                  <td>{tid}</td>
                  <td>{name}</td>
                  <td>{teaType}</td>
                  <td>{altitude}</td>
                  <td>{ph}</td>
                  <td>{area}</td>
                  <td>{address}</td>
                  <td>
                    <label
                      for="my-modal"
                      class="btn btn-info"
                      onClick={() => {
                        generateQrcode(`${tid} ${name} ${teaType}`);
                      }}
                    >
                      查看溯源二维码
                    </label>
                  </td>
                </tr>
              );
            }}
          </For>
        </tbody>
      </table>

      <Pagination
        isEnd={isEnd}
        isStart={isStart}
        next={next}
        previous={previous}
        toStart={toStart}
        toEnd={toEnd}
      />
    </section>
  );
};

export default Garden;
