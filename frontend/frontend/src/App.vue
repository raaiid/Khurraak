<template>
  <div id="app">
    <nav class="uk-navbar-container" uk-navbar>
      <div class="uk-navbar-left">
        <ul class="uk-navbar-nav">
          <li class="uk-active"><a href="#">Shop</a></li>
          <li>
            <a href="#">Our Story</a>
          </li>
          <!-- <li><a href="#">Item</a></li> -->
        </ul>
      </div>

      <div class="uk-navbar-center">
        <ul class="uk-navbar-nav">
          <a class="uk-navbar-item uk-logo" href="#">{{ greeting }}</a>
        </ul>
      </div>

      <div class="uk-navbar-right">
        <ul class="uk-navbar-nav">
          <li>
            <a href="#">Cart <span class="uk-badge">3</span></a>
          </li>
          <!-- <li><a href="#">Login</a></li> -->
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import Vue from "vue";
import { Card } from "vuikit/lib/card";
// import { Button, ButtonLink } from "vuikit/lib/button";

// register globally
Vue.component("Card", Card);
UIkit.use(Icons);
export default {
  name: "App",
};
</script>

<style lang="less">
@import "../node_modules/uikit/src/less/uikit.less";
@import "./assets/less/theme.less";
</style>
