/*
 * @Descripttion: 文件说明
 * @version: 0.0.1
 * @Author: gaojiapeng
 * @Date: 2020-06-22 10:50:46
 * @LastEditors: gaojiapeng
 * @LastEditTime: 2020-06-24 15:12:06
 */

/**
 * 根据路由匹配地址
 * @param {*} data 路由数据
 * @param {*} base 路由前缀
 * @param {*} options 粗略的配置项
 */
function routeMatch(
  data,
  base,
  options = { url: "url", name: "name", id: "id", permissions: "permissions" }
) {
  if (!Array.isArray(data)) return [];
  // 创建路由盒子
  let routerBox = [];

  routerMapFile(data);
  /**
   * @name 路由映射真实视图路径
   */
  function routerMapFile(data) {
    data.forEach(item => {
      if (item[options.url]) {
        let _url = item[options.url].replace(base, "");
        try {
          let routerItem = {
            path: _url, // 路由路径名
            component: () => import(`@/views${_url}/index.vue`) // 路由映射真实视图路径
          };
          routerBox.push(routerItem);
        } catch (err) {
          console.log(err);
        }
      }
      // 处理子集
      if (Array.isArray(item.children)) routerMapFile(item.children);
    });
  }
  return routerBox;
}

export default routeMatch;
