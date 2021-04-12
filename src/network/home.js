import { request } from "./request";

//对首页数据发送请求
export function getHomeMultidata() {
    return request({
        url: '/home/multidata'
    })
}
//对商品列表数据发送请求
export function getHomeData(type, page) {
    return request({
        url: "/home/data",
        params: {
            type,
            page
        }
    })
}