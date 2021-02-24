import Vue from 'vue'
import App from './App.vue'
import { firebase } from '@firebase/app'

import router from './routes'

let configOptions = {
    apiKey: "AIzaSyCb_FwxM_0zPExlHDWcHdgCzXMSHQc5f1Y",
    authDomain: "admin-2069e.firebaseapp.com",
    projectId: "admin-2069e",
    storageBucket: "admin-2069e.appspot.com",
    messagingSenderId: "1004095315086",
    appId: "1:1004095315086:web:625ca4d0a8917ffd667ddf",
    measurementId: "G-5XZMZS8ZR3"
};

firebase.initializeApp(configOptions);

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')