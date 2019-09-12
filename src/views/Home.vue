<template>
  <div class="home">
    <div class="buttons">
      <div class="left-buttons">
        <button @click="setLeftContent('Setup')">Setup</button>
        <button @click="setLeftContent('Measurements')">Measurements</button>
        <button @click="setLeftContent('Graphics')">Graphics</button>
        <button @click="setLeftContent('Reporting')">Reporting</button>
      </div>
      <div class="right-buttons">
        <button @click="setRightContent('M')">M</button>
        <button @click="setRightContent('R')">R</button>
      </div>
    </div>
    <div class="content">
      <div id="left" class="left-side">
        <component :is="leftComponent"></component>
      </div>
      <div class="right-side">
        <component :is="rightComponent"></component>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Measurements from "./Measurements";
import Setup from "./Setup";
import Graphics from "./Graphics";
import Reporting from "./Reporting";

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  leftComponent: Component = Setup;
  rightComponent: Component = Measurements;
  reporting: Reporting = Reporting;

  setLeftContent(tab): void {
    switch (tab) {
      default:
      case "Setup":
        this.leftComponent = Setup;
        break;
      case "Measurements":
        this.leftComponent = Measurements;
        break;
      case "Graphics":
        this.leftComponent = Graphics;
        break;
      case "Reporting":
        this.leftComponent = this.reporting;
        break;
    }
  }

  setRightContent(tab): void {
    switch (tab) {
      default:
      case "M":
        this.rightComponent = Measurements;
        break;
      case "R":
        this.rightComponent = this.reporting;
        break;
    }
  }
}
</script>

<style scoped>
  .content {
    display: flex;
    align-items: stretch;
    height: 90vh;
  }
  .left-side {
    flex-grow: 1;
    border: 3px solid #aaa;
  }

  .right-side {
    flex-grow: 1;
    border: 3px solid #aaa;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
  }
</style>
