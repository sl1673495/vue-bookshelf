<template>
  <section class="wrap">
    <span v-if="loading">正在加载中...</span>
    <article v-else class="content">
      <Book v-for="book in books" :key="book.id" :book="book" />
    </article>
    <slot name="tips"></slot>
  </section>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api';
import Book from './Book.vue';
import { Books } from '../types';

export default createComponent({
  name: 'books',
  props: {
    books: {
      type: Array,
      default: () => [],
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Book,
  },
});
</script>

<style>
.content {
  max-width: 700px;
  margin: auto;
}
</style>
