export function render(user) {
  let {
    name,
    state,
    gender,
    age,
    date,
    price,
    describe,
    isproxy,
    logistics,
  } = user;
  logistics = JSON.stringify(logistics).replace(/\s/gm, "-");
  return `<div class="user bg-white flex flex-col p-3 mb-2">
    <div class="inf flex boder-b-gray pb-2">
      <div class="col"><img src="./images/avatar.webp" alt="avatar" class="w-5 h-5"></div>
      <div class="col flex-1 flex flex-col jc-between ml-2">
        <div class="row flex jc-between"><div>${name}</div><div class="text-red">${state}</div></div>
        <div class="row flex jc-between"><div class="text-grey">${gender}：${age}</div></div>
        <div class="row flex jc-between"><div >${date}</div><div class="font-medium text-xl">${price}</div></div>
      </div>
    </div>
    <div class="detail">
    <div class="row flex py-2"><div class="col"><div class="w-5">病情描述：</div></div><div class="col"><div>${describe}</div></div></div>
    <div class="row flex py-2"><div class="col"><div class="w-5">是否代煎：</div></div><div class="col"><div>${isproxy}</div></div></div>
    ${
      state === "待收货" || state === "已收货"
        ? `<div class="row flex py-2 jc-end"><div class="col "><button class="w-5 py-2 font-medium checkLog" data-Logistics=${logistics} >查看物流</button></div></div>`
        : ""
    }
    </div>
    </div>`;
}

export function renderLog(list) {
  let {date, state} = list;
  return ` <li class="pb-0  mt-1 pt-half"><div>${date}</div><div>${state}</div></li>`;
}
