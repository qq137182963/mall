import Toast from "./Toast.vue"
var obj = {};
obj.install = function(Vue) {
    const toastConstrutor = Vue.extend(Toast);
    const toast = new toastConstrutor();
    toast.$mount(document.createElement("div"));
    document.body.appendChild(toast.$el);
    Vue.prototype.$toast = toast;
}
export default obj;

// import Toast from "./Toast"
// const obj = {}
// obj.install = function(Vue) {
//     //创建组件构造器
//     const toastConstrustor = Vue.extend(Toast);
//     //new方式,根据组件构造器，可以创建出来一个组件对象
//     const toast = new toastConstrustor();
//     //将组件对象，手动挂载到一个元素上
//     toast.$mount(document.createElement("div"))
//         //toast.$el对应的就是div
//     document.body.appendChild(toast.$el);
//     Vue.prototype.$toast = toast
// }
// export default obj;
