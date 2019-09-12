<template>
  <div id="app">
    <md-toolbar color="primary" class="expanded-toolbar">
      <span class="branding">
        <md-button>
          <router-link to="/">{{ title }}</router-link>
        </md-button>
        <md-button>
          <router-link to="/"><md-icon>home</md-icon></router-link>
        </md-button>
      </span>
      <md-menu md-direction="bottom-start">
        <md-button md-menu-trigger><md-icon>menu</md-icon></md-button>
        <md-menu-content>
          <md-menu-item><router-link to="/">Home</router-link></md-menu-item>
          <md-menu-item><router-link to="/search">Search</router-link></md-menu-item>
        </md-menu-content>
      </md-menu>
    </md-toolbar>
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default class App extends Vue {
  title = "EIMS";
}
</script>

<style>
#app {
  font-family: "Ubuntu", sans-serif;
}

.branding {
  flex: 1;
  text-align: left;
}

h1 {
  text-align: center;
}
</style>
