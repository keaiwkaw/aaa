import userList from "./data.js";
import {render, renderLog} from "./template.js";

const tab = document.querySelector(".tab");
const tabItem = document.querySelectorAll(".tab-item");
const usersBox = document.querySelector(".users-box");
const ol = document.querySelector("ol");
const logisticsBox = document.querySelector(".Logistics-box");
const confirmBtn = document.querySelector(".confirm");
let btns = null;
/*
 * tab 点击切换活跃
 */
class ABC {
  static removeClass(tabItem) {
    tabItem.forEach((item) => [item.classList.remove("active")]);
  }
  static addClass(el) {
    el.classList.add("active");
  }
}
/*
 * 筛选出对应的状态
 */
class CDE {
  static all(data) {
    usersBox.innerHTML = "";
    let str = "";
    data.forEach((item) => {
      str += render(item);
    });
    usersBox.innerHTML = str;
    initBtnEvent();
  }
  static audit(data) {
    let res = data.filter((item) => item.state === "待审核");
    CDE.all(res);
  }
  static payment(data) {
    let res = data.filter((item) => item.state === "待付款");
    CDE.all(res);
  }
  static receiving(data) {
    let res = data.filter((item) => item.state === "待收货");
    CDE.all(res);
  }
  static received(data) {
    let res = data.filter((item) => item.state === "已收货");
    CDE.all(res);
  }
}
tab.addEventListener("click", (e) => {
  let state = e.target.getAttribute("data-state");
  if (state) {
    ABC.removeClass(tabItem);
    ABC.addClass(e.target);
    switch (state) {
      case "all":
        CDE.all(userList);
        break;
      case "audit":
        CDE.audit(userList);
        break;
      case "payment":
        CDE.payment(userList);
        break;
      case "receiving":
        CDE.receiving(userList);
        break;
      case "received":
        CDE.received(userList);
        break;
    }
  }
});
/*
 *默认选中全部
 */
CDE.all(userList);
/*
 *初始化查询物流事件
 */
function initBtnEvent() {
  btns = document.getElementsByClassName("checkLog");
  Array.from(btns).forEach((btn) => {
    btn.addEventListener("click", (e) => {
      ol.innerHTML = "";
      let Logistics = JSON.parse(e.target.getAttribute("data-Logistics"));
      addData(Logistics);
      logisticsBox.style.display = "block";
    });
  });
}
/*
 *添加物流信息
 */
function addData(logistics) {
  let str = "";
  if (logistics) {
    logistics.forEach((item) => {
      str += renderLog(item);
    });
  }
  ol.innerHTML = str;
}

confirmBtn.addEventListener("click", (e) => {
  logisticsBox.style.display = "none";
});

console.log(
  "***************\n* 田浩伟小练习 *\n*  2021-06-12 *\n*************** "
);
