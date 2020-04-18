import { useBookListProvide, useBookListInject } from "./books";

export { useBookListInject };

export const useProvider = () => {
  useBookListProvide();
};
