"use strict";(self["webpackChunktodo_list"]=self["webpackChunktodo_list"]||[]).push([[443],{1379:function(e,t,l){l.r(t),l.d(t,{default:function(){return se}});var n=l(3396),s=l(4870),o=l(9242),a=l(65);const i={class:"greeting"},c={class:"title"},u=(0,n._)("span",null,"Добро пожаловать,",-1);var r={__name:"Greeting",setup(e){const t=(0,a.oR)(),l=(0,s.iH)(t.getters.GET_NAME);return(0,n.YP)(l,(e=>{localStorage.setItem("name",e)})),(0,n.bv)((()=>{l.value=localStorage.getItem("name")||""})),(e,t)=>((0,n.wg)(),(0,n.iD)("section",i,[(0,n._)("h2",c,[u,(0,n.wy)((0,n._)("input",{type:"text",placeholder:"Введите ваше имя","onUpdate:modelValue":t[0]||(t[0]=e=>l.value=e)},null,512),[[o.nr,l.value]])])]))}};const _=r;var d=_;const m=(0,n._)("h3",{class:"title"},"У вас есть список задач?",-1),v=["onSubmit"],p=(0,n._)("h4",null,"Создать задачу",-1),k=(0,n._)("h4",null,"Выбери категорию",-1),b={class:"options"},g=(0,n._)("span",{class:"bubble business"},null,-1),y=(0,n._)("div",null,"Бизнес",-1),T=(0,n._)("span",{class:"bubble personal"},null,-1),D=(0,n._)("div",null,"Личное",-1),E=(0,n._)("input",{type:"submit",value:"Добавить задачу"},null,-1);var w={__name:"CreateToDo",setup(e){const t=(0,a.oR)(),l=(0,s.iH)(""),i=(0,s.iH)(null),c=()=>t.commit("CREATE_TASK",{content:l.value,category:i.value,done:!1,editTaskDone:!1,createdAt:(new Date).getTime()}),u=()=>t.commit("EDIT_TASK_OFF");return(e,t)=>((0,n.wg)(),(0,n.iD)("section",{class:"create-task",onClick:t[3]||(t[3]=e=>u())},[m,(0,n._)("form",{onSubmit:(0,o.iM)(c,["prevent"])},[p,(0,n.wy)((0,n._)("input",{type:"text",placeholder:"Например: Сходить в магазин за покупками","onUpdate:modelValue":t[0]||(t[0]=e=>l.value=e)},null,512),[[o.nr,l.value,void 0,{trim:!0}]]),k,(0,n._)("div",b,[(0,n._)("label",null,[(0,n.wy)((0,n._)("input",{type:"radio",name:"category",id:"category1",value:"business","onUpdate:modelValue":t[1]||(t[1]=e=>i.value=e)},null,512),[[o.G2,i.value,void 0,{trim:!0}]]),g,y]),(0,n._)("label",null,[(0,n.wy)((0,n._)("input",{type:"radio",name:"category",id:"category2",value:"personal","onUpdate:modelValue":t[2]||(t[2]=e=>i.value=e)},null,512),[[o.G2,i.value,void 0,{trim:!0}]]),T,D])]),E],40,v)]))}};const A=w;var C=A,S=l(7139);const h={class:"list",id:"task-list"},f=["onClick","onUpdate:modelValue"],F={class:"task-content"},K=["onClick"],U=["onUpdate:modelValue","onKeyup"],V={class:"actions"},G=["onClick"],I=(0,n._)("span",{class:"material-symbols-outlined",style:{"line-height":"none","font-size":"17px"}}," border_color ",-1),N=[I],R=["onClick"];var H={__name:"ToDoList",setup(e){const t=(0,a.oR)(),l=(0,n.Fl)((()=>t.getters.PAGINATE_TASKS)),i=e=>t.commit("SAVE_TASK_DONE",e),c=e=>t.commit("EDIT_TASK",e),u=()=>t.commit("EDIT_TASK_OFF"),r=e=>t.commit("REMOVE_TASK",e),_=(0,s.iH)();return(0,n.bv)((()=>{document.addEventListener("click",(e=>{e.target===_.value&&u()}))})),(e,t)=>((0,n.wg)(),(0,n.iD)("section",{class:"task-list",ref_key:"taskContentFocus",ref:_},[(0,n._)("h3",{onClick:t[0]||(t[0]=e=>u())}," Список задач которые необходимо выполнить: "),(0,n._)("div",h,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(l.value,((e,t)=>((0,n.wg)(),(0,n.iD)("div",{key:t,class:(0,S.C_)(`task-item ${e.done&&"done"}`)},[(0,n._)("label",null,[(0,n.wy)((0,n._)("input",{onClick:t=>i(e),type:"checkbox","onUpdate:modelValue":t=>e.done=t},null,8,f),[[o.e8,e.done]]),(0,n._)("span",{class:(0,S.C_)("bubble "+("business"==e.category?"business":"personal"))},null,2)]),(0,n._)("div",F,[e.editTaskDone?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("div",{key:0,onClick:t=>c(e)},(0,S.zw)(e.content),9,K)),e.editTaskDone?(0,n.wy)(((0,n.wg)(),(0,n.iD)("input",{key:1,type:"text","onUpdate:modelValue":t=>e.content=t,onKeyup:(0,o.D2)((t=>c(e)),["enter"])},null,40,U)),[[o.nr,e.content]]):(0,n.kq)("",!0)]),(0,n._)("div",V,[(0,n._)("div",{class:"edit-btn",onClick:t=>c(e)},N,8,G),(0,n._)("button",{class:"delete",onClick:t=>r(e)}," Удалить ",8,R)])],2)))),128))])],512))}};const O=H;var P=O;const L={key:0,class:"task-list-info"},x={class:"task-list-info-btns"},z=["disabled"],M=(0,n._)("span",{class:"material-symbols-outlined"}," chevron_left ",-1),W=[M],q=["disabled"],Y=(0,n._)("span",{class:"material-symbols-outlined",style:{"line-height":"none","font-weight":"700"}}," chevron_right ",-1),B=[Y],X={key:1},$=(0,n._)("h3",null,"Пусто",-1),j=[$];var J={__name:"ToDoListInfo",setup(e){const t=(0,a.oR)(),l=(0,n.Fl)((()=>t.getters.TASKS_LENGTH)),o=(0,n.Fl)((()=>t.getters.DONE_TASKS_LENGTH));let i=(0,n.Fl)((()=>t.getters.PAGE_NUMBER)),c=(0,n.Fl)((()=>t.getters.PAGE_COUNT));const u=()=>t.commit("PREV_PAGE"),r=()=>t.commit("NEXT_PAGE"),_=()=>t.commit("EDIT_TASK_OFF");return(e,t)=>((0,n.wg)(),(0,n.iD)("section",{onClick:t[0]||(t[0]=e=>_())},[l.value>0?((0,n.wg)(),(0,n.iD)("div",L,[(0,n._)("h3",null,"Выполнено задач "+(0,S.zw)(o.value)+" из "+(0,S.zw)(l.value),1),(0,n._)("div",x,[(0,n._)("button",{class:"task-list-info-btn",disabled:0===(0,s.SU)(i),onClick:u},W,8,z),(0,n._)("button",{class:"task-list-info-btn",disabled:(0,s.SU)(i)>=(0,s.SU)(c)-1,onClick:r},B,8,q)])])):((0,n.wg)(),(0,n.iD)("div",X,j))]))}};const Q=J;var Z=Q;const ee={class:"app"},te=(0,n._)("div",{class:"footer"},null,-1);var le={__name:"AboutView",setup(e){const t=(0,a.oR)(),l=()=>t.commit("EDIT_TASK_OFF"),o=(0,s.iH)();return(0,n.bv)((()=>{document.addEventListener("click",(e=>{e.target===o.value&&l()}))})),(e,t)=>((0,n.wg)(),(0,n.iD)("main",{id:"main-app",ref_key:"taskContentFocus",ref:o},[(0,n._)("div",ee,[(0,n.Wm)(d),(0,n.Wm)(C),(0,n.Wm)(P),(0,n.Wm)(Z)]),te],512))}};const ne=le;var se=ne}}]);
//# sourceMappingURL=about.47aae478.js.map