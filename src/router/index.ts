import Vue from "vue"
import VueRouter from "vue-router"
import AllBooks from "@/views/AllBooks.vue"
import FinishedBooks from "@/views/FinishedBooks.vue"

Vue.use(VueRouter)

export const routeMaps = {
  all: {
    name: "all",
    path: "/"
  },
  finished: {
    name: "finished",
    path: "/finished"
  }
}

const routes = [
  {
    ...routeMaps.all,
    component: AllBooks
  },
  {
    ...routeMaps.finished,
    component: FinishedBooks
  }
]

// @ts-ignore
const router = new VueRouter({
  routes
})

export default router
