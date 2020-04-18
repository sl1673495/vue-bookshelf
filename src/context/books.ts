import { provide, inject, computed, ref, Ref } from "@vue/composition-api";
import { Book, Books } from "@/types";

type BookContext = {
  books: Ref<Books>;
  setBooks: (value: Books) => void;
  finishedBooks: Ref<Books>;
  addFinishedBooks: (book: Book) => void;
  removeFinishedBooks: (book: Book) => void;
  hasReadedBook: (book: Book) => boolean;
  booksAvaluable: Ref<Books>;
};

const BookSymbol = Symbol();

export const useBookListProvide = () => {
  // 全部图书
  const books = ref<Books>([]);
  const setBooks = (value: Books) => (books.value = value);

  // 已完成图书
  const finishedBooks = ref<Books>([]);
  const addFinishedBooks = (book: Book) => {
    if (!finishedBooks.value.find(({ id }) => id === book.id)) {
      finishedBooks.value.push(book);
    }
  };
  const removeFinishedBooks = (book: Book) => {
    const removeIndex = finishedBooks.value.findIndex(
      ({ id }) => id === book.id
    );
    if (removeIndex !== -1) {
      finishedBooks.value.splice(removeIndex, 1);
    }
  };

  // 可选图书
  const booksAvaluable = computed(() => {
    return books.value.filter(
      book => !finishedBooks.value.find(({ id }) => id === book.id)
    );
  });

  // 是否已阅
  const hasReadedBook = (book: Book) => finishedBooks.value.includes(book);

  provide(BookSymbol, {
    books,
    setBooks,
    finishedBooks,
    addFinishedBooks,
    removeFinishedBooks,
    hasReadedBook,
    booksAvaluable
  });
};

export const useBookListInject = () => {
  const booksContext = inject<BookContext>(BookSymbol);

  if (!booksContext) {
    throw new Error(`useBookListInject must be used after useBookListProvide`);
  }

  return booksContext;
};
