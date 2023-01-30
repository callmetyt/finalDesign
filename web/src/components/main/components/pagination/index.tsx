import { Accessor, Component, createSignal } from "solid-js";

import { TeaInfo } from "../../../../types";

interface PaginationProps {
  isStart: Accessor<boolean>;
  isEnd: Accessor<boolean>;
  next: () => void;
  previous: () => void;
  toStart: () => void;
  toEnd: () => void;
}

const Pagination: Component<PaginationProps> = ({
  isStart,
  isEnd,
  next,
  previous,
  toStart,
  toEnd,
}) => {
  return (
    <div class="flex justify-center pt-2">
      <div class="btn-group">
        <button
          class={`btn ${isStart() ? "btn-disabled" : ""}`}
          onClick={() => {
            toStart();
          }}
        >
          «
        </button>
        <button
          class={`btn ${isStart() ? "btn-disabled" : ""}`}
          onClick={() => {
            previous();
          }}
        >
          上一页
        </button>
        <button
          class={`btn ${isEnd() ? "btn-disabled" : ""}`}
          onClick={() => {
            next();
          }}
        >
          下一页
        </button>
        <button
          class={`btn ${isEnd() ? "btn-disabled" : ""}`}
          onClick={() => {
            toEnd();
          }}
        >
          »
        </button>
      </div>
    </div>
  );
};

function createPagination(data: TeaInfo[], size: number) {
  let allData = data;
  let activePageNumber = 0;
  let maxPage = Math.floor(allData.length / size - 0.000001);
  const minPage = 0;
  const [activeListData, setActiveListData] = createSignal(
    allData.slice(0, size)
  );
  const [isEnd, setIsEnd] = createSignal(activePageNumber === maxPage);
  const [isStart, setIsStart] = createSignal(activePageNumber === minPage);

  const resetStatus = (activePageNumber: number) => {
    const curInitialDataNumber = activePageNumber * size;
    setIsEnd(activePageNumber === maxPage);
    setIsStart(activePageNumber === minPage);
    setActiveListData(
      allData.slice(curInitialDataNumber, curInitialDataNumber + size)
    );
  };

  return {
    activeListData,
    isEnd,
    isStart,
    next: () => {
      activePageNumber++;
      resetStatus(activePageNumber);
    },
    previous: () => {
      activePageNumber--;
      resetStatus(activePageNumber);
    },
    toEnd: () => {
      activePageNumber = maxPage;
      resetStatus(activePageNumber);
    },
    toStart: () => {
      activePageNumber = minPage;
      resetStatus(activePageNumber);
    },
    resetAllData: (newData: TeaInfo[]) => {
      allData = newData;
      activePageNumber = 0;
      maxPage = Math.floor(allData.length / size - 0.000001);
      resetStatus(activePageNumber);
    },
  };
}

export { createPagination };
export default Pagination;
