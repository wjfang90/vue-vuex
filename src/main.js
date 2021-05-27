import Vue from 'vue';
import App from './App.vue'


// vuex 目的
/*
对于问题一，传参的方法对于多层嵌套的组件将会非常繁琐，并且对于兄弟组件间的状态传递无能为力。
对于问题二，我们经常会采用父子组件直接引用或者通过事件来变更和同步状态的多份拷贝。
*/
//1.导入 vuex   npm install vuex --save
import Vuex from 'vuex';
//2.手动安装vuex
Vue.use(Vuex);

Vue.config.productionTip = false


//3.Vuex 创建 store 对象
var store = new Vuex.Store({
  state: {
    //访问state中的数据 使用 $store.state.count，也可以修改值，但不建议这样使用
    count: 0,
  },
  mutations: {
    //组件建议通过 mutations 的方法操作state 中的数据
    //调用 mutations 中的方法使用 this.$store.commit('mutations中的方法名',参数)
    increment(state) {
      state.count++;
    },
    //mutations 中的方法只有两个参数，
    //参数1 是state对象
    //参数2 是调用方法可传的唯一参数
    decrement(state, param) {
      state.count -= param.num;
    }
  }, 
  getters: {
    //就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。
    countFormat: function (state, getters) {
      console.log(getters);
      return "当前count值为:" + state.count;
    }
  }

});

new Vue({
  render: h => h(App),
  //4. vuex 创建的stote对象绑定到 vue 上
  store
}).$mount('#app');
