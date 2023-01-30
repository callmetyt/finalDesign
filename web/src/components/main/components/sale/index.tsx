import { Component, createRenderEffect, createResource, For } from "solid-js";

import { getSaleInfo } from "../../../../api/getSaleInfo";
import { getTeaInfo } from "../../../../api/getTeaInfo";
import { formatTimeToDate } from "../../../../utils";
import Pagination, { createPagination } from "../pagination";
import TableHeader from "../tableHeader";
import saleHeader from "./sale";

const [data, { refetch }] = createResource(getTeaInfo);

const Sale: Component = () => {
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
      <TableHeader mutate={resetAllData} apiFunction={getSaleInfo} />

      <table class="table w-full">
        <thead>
          <tr>
            <For each={saleHeader}>
              {(title) => <th class="text-center">{title}</th>}
            </For>
          </tr>
        </thead>

        <tbody>
          <For each={activeListData()}>
            {(item) => {
              const { sale, tid } = item;
              const { transport, time, shop } = sale;
              return (
                <tr class="hover">
                  <td class="text-center">{tid}</td>
                  <td class="text-center">{transport}</td>
                  <td class="text-center">{formatTimeToDate(time)}</td>
                  <td class="text-center">{shop}</td>
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

export default Sale;
