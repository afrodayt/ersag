import './bootstrap';
import Vue from 'vue/dist/vue.common.dev.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;
Vue.config.devtools = false;

import ExampleComponent from '@/components/ExampleComponent.vue';

new Vue({
    el: '#app',
    components: {
        ExampleComponent,
    },
});
