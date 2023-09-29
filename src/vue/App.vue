<template>

      <div>
        <h3>Vue Click Count: {{ count }}</h3>

        <button @click="increment">Increment Count</button>
      </div>
</template>

<script>
import store from "../main";

export default {
  data() {
    return {
      count:store.count,
    }
  },
  methods: {
    increment() {
      store.increment()
    },
  },
  mounted() {
    store.subscribe(() => {
      this.count = store.count
    })
  },
}
</script>
