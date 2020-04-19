<template>
  <div
    class="book"
    :style="{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      position: 'relative'
    }"
  >
    <a
      :style="{
        flexGrow: 2,
        display: 'grid',
        gridTemplateColumns: '140px 1fr',
        gridGap: 20,
        border: `1px solid ${colors.gray20}`,
        color: colors.text,
        padding: '1.25em',
        borderRadius: '3px'
      }"
    >
      <div
        :style="{
          width: 140
        }"
      >
        <img
          :src="harryCover"
          :alt="`${book.title} book cover`"
          :style="{ maxHeight: '100%', maxWidth: '100%' }"
        />
      </div>
      <div :style="{ flex: 1 }">
        <div :style="{ display: 'flex', justifyContent: 'space-between' }">
          <div :style="{ flex: 1 }">
            <h2
              :style="{
                fontSize: '1.25em',
                margin: '0',
                color: colors.indigo
              }"
            >
              {{ book.title }}
            </h2>
          </div>
          <div :style="{ marginLeft: 10 }">
            <div
              :style="{
                marginTop: '0.4em',
                fontStyle: 'italic',
                fontSize: '0.85em'
              }"
            >
              {{ book.author }}
            </div>
            <small>{{ book.publisher }}</small>
          </div>
        </div>
        <small>{{ book.synopsis.substring(0, 500) }}...</small>
      </div>
    </a>
    <StatusButtons :book="book" />
  </div>
</template>

<script lang="ts">
import { createComponent } from "@vue/composition-api"
// @ts-ignore
import harryCover from "@/assets/harry.png"
import StatusButtons from "./StatusButtons.vue"

export default createComponent({
  setup() {
    return {
      harryCover
    }
  },
  name: "book",
  props: {
    book: {
      type: Object,
      default: () => ({})
    }
  },
  components: {
    StatusButtons
  }
})
</script>

<style lang="sass"></style>
