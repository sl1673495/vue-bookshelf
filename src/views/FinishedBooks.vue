<template>
  <Books :books="finishedBooks">
    <template v-if="isEmpty" #tips>
      暂无已阅读图书
    </template>
  </Books>
</template>

<script lang="ts">
import { createComponent, computed } from "@vue/composition-api"
import Books from "@/components/Books.vue"
import { useBookListInject } from "@/context"

export default createComponent({
  name: "finishedBooks",
  setup() {
    const { finishedBooks } = useBookListInject()
    const isEmpty = computed(() => !finishedBooks.value.length)
    return { finishedBooks, isEmpty }
  },
  components: {
    Books
  }
})
</script>

<style>
.content {
  max-width: 700px;
  margin: auto;
}
</style>
