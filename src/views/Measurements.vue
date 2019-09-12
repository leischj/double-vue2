<template>
  <h1>Measurements</h1>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    Measurements
  }
})
export default class Measurements extends Vue {
  name: "Measurements";
}
</script>

<style scoped></style>
