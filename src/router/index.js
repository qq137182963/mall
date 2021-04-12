import Vue from "vue";
import VueRouter from "vue-router";
//解决路由重复点击报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
        return originalPush.call(this, location).catch(err => err)
    }
    //路由懒加载
const Home = () =>
    import ("views/home/Home");
const Category = () =>
    import ("views/category/Category");
const Cart = () =>
    import ("views/cart/Cart");
const Profile = () =>
    import ("views/profile/Profile");
const Detail = () =>
    import ("views/detail/Detail");
Vue.use(VueRouter);
//路由配置
const routes = [{
    path: "/",
    redirect: "/home"
}, {
    path: "/home",
    component: Home
}, {
    path: "/category",
    component: Category
}, {
    path: "/cart",
    component: Cart
}, {
    path: "/profile",
    component: Profile
}, {
    path: "/detail/:iid",
    component: Detail
}]
const router = new VueRouter({
    routes,
    mode: "history"
})
export default router