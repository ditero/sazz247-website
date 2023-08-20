import { createApp } from 'vue'
import App from './App.vue'
// import Vue from 'vue';
import router from '@/router'; // Import your router configuration

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app');

// createApp(App).mount('#app')
const app = createApp(App);
app.use(router); // Use the router instance
app.mount('#app');
