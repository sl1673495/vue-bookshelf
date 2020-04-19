<template>
  <button v-if="hasReaded" @click="removeFinish" class="status-button">
    删
  </button>
  <button v-else @click="handleFinish" class="status-button">阅</button>
</template>

<script lang="ts">
import { createComponent } from "@vue/composition-api"
import { useBookListInject } from "@/context"
import { Book } from "../types"

interface Props {
  book: Book
}
export default createComponent({
  props: {
    book: Object
  },
  setup(props: Props) {
    const { book } = props
    const {
      addFinishedBooks,
      removeFinishedBooks,
      hasReadedBook
    } = useBookListInject()

    const handleFinish = () => {
      addFinishedBooks(book)
    }

    const removeFinish = () => {
      removeFinishedBooks(book)
    }

    return {
      handleFinish,
      removeFinish,
      hasReaded: hasReadedBook(book)
    }
  }
})
</script>

<style scoped>
.status-button {
  position: absolute;
  right: 0;
  top: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  transform: translate(50%, -50%);
  border-radius: 50%;
  border: 1px solid rgb(228, 229, 233);
  background: #fff;
  color: rgb(67, 68, 73);
  cursor: pointer;
}
</style>
