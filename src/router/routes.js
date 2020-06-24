/*
 * @Descripttion: 文件说明
 * @version: 0.0.1
 * @Author: gaojiapeng
 * @Date: 2020-06-22 10:50:46
 * @LastEditors: gaojiapeng
 * @LastEditTime: 2020-06-24 10:18:38
 */
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "demo",
    component: () => import("@/views/demo1")
  },
  {
    path: "/demo2",
    name: "demo",
    component: () => import("@/views/demo2")
  }
];

export default routes;
