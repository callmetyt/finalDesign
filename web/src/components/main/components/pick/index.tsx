import { Component, createRenderEffect, createResource, For } from "solid-js";

import { getPickInfo } from "../../../../api/getPickInfo";
import { getTeaInfo } from "../../../../api/getTeaInfo";
import { formatTimeToDate } from "../../../../utils";
import Pagination, { createPagination } from "../pagination";
import TableHeader from "../tableHeader";
import pickHeader from "./pick";

const [data, { refetch }] = createResource(getTeaInfo);

const Pick: Component = () => {
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
  } = createPagination(data(), 7);

  return (
    <section class="overflow-x-auto flex-1">
      <TableHeader mutate={resetAllData} apiFunction={getPickInfo} />

      <table class="table w-full">
        <thead>
          <tr>
            <For
              each={pickHeader}
              fallback={<div class="pt-4 font-bold text-xl">暂无数据</div>}
            >
              {(title) => <th class="text-center">{title}</th>}
            </For>
          </tr>
        </thead>

        <tbody>
          <For each={activeListData()}>
            {(item) => {
              const { pick, tid } = item;
              const { num, time } = pick;
              return (
                <tr class="hover">
                  <td class="text-center">{tid}</td>
                  <td class="text-center">{num}</td>
                  <td class="text-center">{formatTimeToDate(time)}</td>
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

export default Pick;
