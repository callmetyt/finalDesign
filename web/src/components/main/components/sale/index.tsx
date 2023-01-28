import { Component, createRenderEffect, createResource, For } from "solid-js";
import { getTeaInfo } from "../../../../api/getTeaInfo";

import saleHeader from "./sale";

const [data, { refetch }] = createResource(getTeaInfo);

const Sale: Component = () => {
  createRenderEffect(() => {
    refetch();
  });

  return (
    <section class="overflow-x-auto flex-1">
      <table class="table w-full">
        <thead>
          <tr>
            <For each={saleHeader}>
              {(title) => <th class="text-center">{title}</th>}
            </For>
          </tr>
        </thead>

        <tbody>
          <For each={data()}>
            {(item) => {
              const { sale, tid } = item;
              const { transport, time, shop } = sale;
              return (
                <tr class="hover">
                  <td class="text-center">{tid}</td>
                  <td class="text-center">{transport}</td>
                  <td class="text-center">{time}</td>
                  <td class="text-center">{shop}</td>
                </tr>
              );
            }}
          </For>
        </tbody>
      </table>
    </section>
  );
};

export default Sale;
