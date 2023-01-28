import { Component, createRenderEffect, createResource, For } from "solid-js";
import { getGardenInfo } from "../../../../api/getGardenInfo";
import { getTeaInfo } from "../../../../api/getTeaInfo";
import TableHeader from "../tableHeader";
import { gardenHeader } from "./garden";

const [data, { mutate, refetch }] = createResource(getTeaInfo);

const Garden: Component = () => {
  createRenderEffect(() => {
    refetch();
  });

  return (
    <section class="overflow-x-auto flex-1">
      <TableHeader mutate={mutate} apiFunction={getGardenInfo} />

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
            each={data()}
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
                    <button class="btn">查看溯源二维码</button>
                  </td>
                </tr>
              );
            }}
          </For>
        </tbody>
      </table>
    </section>
  );
};

export default Garden;
