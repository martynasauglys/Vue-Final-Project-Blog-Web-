import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueFinalModal from 'vue-final-modal';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

// Filter to shorten descriptions/titles
Vue.filter('truncate', function(text, length, suffix) {
  if (text.length > length) {
    return text.substring(0, length) + suffix;
  } else {
    return text;
  }
});

// Using to convert timestamp to date
Vue.use(require('vue-moment'));
// Modal npm
Vue.use(VueFinalModal());

//
