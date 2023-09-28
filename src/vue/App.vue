<template>

      <div>
        <h3>Vue Click Count: {{ count }}</h3>

        <button @click="increment">Increment Count</button>
      </div>
</template>

<script>
export default {
  data() {
    return {
      count: window.store.count,
    }
  },
  methods: {
    increment() {
      window.store.increment()
    },
  },
  mounted() {
    window.store.subscribe(() => {
      this.count = window.store.count
    })
  },
}
</script>
