import { ref, onMounted } from "@vue/composition-api";

export const useAsync = (func: () => Promise<any>) => {
  const loading = ref(false);

  onMounted(async () => {
    try {
      loading.value = true;
      await func();
    } catch (error) {
      throw error;
    } finally {
      loading.value = false;
    }
  });

  return loading;
};
