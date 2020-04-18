import { watch, ref, reactive } from "@vue/composition-api";

export interface PageOption {
  pageSize?: number;
}

export function usePages<T>(watchCallback: () => T[], pageOption?: PageOption) {
  const { pageSize = 10 } = pageOption || {};

  const data = ref<T[]>([]);

  // 提供给el-pagination组件的参数
  const elPagenationBindings = reactive({
    current: 1,
    currentChange: (currnetPage: number) => {}
  });

  // 根据页数切分数据
  const sliceData = (currentData: T[], currentPage: number) => {
    return currentData.slice(
      (currentPage - 1) * pageSize,
      currentPage * pageSize
    );
  };

  watch(watchCallback, values => {
    const currentChange = (currnetPage: number) => {
      elPagenationBindings.current = currnetPage;
      data.value = sliceData(values, currnetPage);
    };
    currentChange(1);
    elPagenationBindings.currentChange = currentChange;
  });

  return {
    data,
    elPagenationBindings
  };
}
