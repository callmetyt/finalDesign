import { Component, createRenderEffect, createResource, For } from "solid-js";

import { getTeaInfo } from "../../../../api/getTeaInfo";
import pickHeader from "./pick";

const [data, { refetch }] = createResource(getTeaInfo);

const Pick: Component = () => {
  createRenderEffect(() => {
    refetch();
  });

  return (
    <section class="overflow-x-auto flex-1">
      <table class="table w-full">
        <thead>
          <tr>
            <For each={pickHeader}>{(title) => <th>{title}</th>}</For>
          </tr>
        </thead>

        <tbody>
          <For each={data()}>
            {(item) => {
              const { pick } = item;
              const { num, time } = pick;
              return (
                <tr class="hover">
                  <td>{num}</td>
                  <td>{time}</td>
                </tr>
              );
            }}
          </For>
        </tbody>
      </table>
    </section>
  );
};

export default Pick;
