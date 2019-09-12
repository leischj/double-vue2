<template>
    <div>
        <h1>Reporting</h1>
        <div>
            Counter: {{counter}}
        </div>
        <button @click="increment()">Increment</button>
    </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";

  @Component({
    components: {
      Reporting
    }
  })
  export default class Reporting extends Vue {
    counter: number = 0;

    increment(): void {
      this.counter++;
    }
  }
</script>

<style scoped>

</style>