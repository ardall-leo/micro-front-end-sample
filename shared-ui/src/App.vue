<template>
  <div id="navbar-app">
    <v-app>
        <v-navigation-drawer
          v-model="drawer"
          :mini-variant.sync="mini"
          permanent
         app>
          <v-list-item>
            <v-btn
              icon
              @click.stop="mini = !mini"
            >
              <v-icon>mdi-menu</v-icon>
            </v-btn>
          </v-list-item>

          <v-divider></v-divider>

          <v-list dense>
            <span v-for="item in items" :key="item.title">
              <v-list-item
                v-if="item.link"
                :to="item.link"
              >
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </span>
          </v-list>
        </v-navigation-drawer>

      <v-app-bar app class="elevation-2">
        <v-toolbar-title>
          <v-img src="https://loopup.com/app/themes/LoopUp2017/images/loopup-logo-white.svg" contain :max-width="116" :max-height="32" />
        </v-toolbar-title>
        <v-spacer />
      </v-app-bar>

      <v-content>
        <v-container fluid>
          <v-card>
            <div class="micro-app">
              <v-progress-linear v-if="loading"
                color="primary accent-4"
                indeterminate
                rounded
                height="6"
              ></v-progress-linear>
              <div id="artemis"></div>
              <div id="otherMicroApp"></div>
              <div id="cygnus"></div>
              <router-view/>
            </div>
          </v-card>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>
<style>
@import url("https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css");

body{
  --primary: red;
}

.micro-app iframe{
  border: 0;
}
</style>

<script>
  export default {
    data: () => ({
        drawer: true,
        items: [
          { title: 'Search', icon: 'icon-home', link: '/Search' },
          { title: 'Account List', icon: 'icon-account', link: '/Account/List' },
          { title: 'Account New Feature ', icon: 'icon-tools', link: '/Account/NewFeature' },
          { title: 'Bulk Provisioning', icon: 'mdi-account-group-outline', link: '/Account/BulkProvisioning' },
        ],
        mini: true,
        loading: true
    }),
    created() {
       // show loading indicator
       window.addEventListener('single-spa:app-change', (e) => {
        console.log(e);
        this.loading = true;
        setTimeout(() => (this.loading = false), 1000)
      });
    },
  }
</script>