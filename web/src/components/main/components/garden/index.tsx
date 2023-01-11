import { Component, createRenderEffect, createResource, For } from "solid-js";
import { getTeaInfo } from "../../../../api/getTeaInfo";
import { gardenHeader } from "./garden";

const [data, { refetch }] = createResource(getTeaInfo);

const Garden: Component = () => {
  createRenderEffect(() => {
    refetch();
  });

  return (
    <section class="overflow-x-auto flex-1">
      <table class="table w-full">
        <thead>
          <tr>
            <For each={gardenHeader}>{(title) => <th>{title}</th>}</For>
          </tr>
        </thead>

        <tbody>
          <For each={data()}>
            {(item) => {
              const { garden } = item;
              const { name, teaType, ph, area, altitude, address } = garden;
              return (
                <tr class="hover">
                  <td>{name}</td>
                  <td>{teaType}</td>
                  <td>{altitude}</td>
                  <td>{ph}</td>
                  <td>{area}</td>
                  <td>{address}</td>
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
