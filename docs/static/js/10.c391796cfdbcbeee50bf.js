webpackJsonp([10],{"0Be2":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("Dd8w"),a=s.n(n),i=s("7t+N"),o=s.n(i),r=s("NYxO"),c=s("UzLt"),l=s("S8yE"),u={name:"create",components:{vHeader:c.a,vAlert:l.a},data:function(){return{show:!1,message:"",title:"",tab:"share",content:""}},computed:a()({},Object(r.b)(["user"])),methods:{sendIssue:function(){var t=this;if(this.title.length<=10)this.tip("标题字数10字以上");else if(this.content.length){o.a.post("https://cnodejs.org/api/v1/topics",{accesstoken:this.user.accessToken,title:this.title,tab:this.tab,content:this.content}).then(function(e){e.success&&(t.tip("主题发布成功"),setTimeout(function(){t.$router.push("/?tab="+t.tab)},2e3))}).catch(function(){t.tip("主题发布失败,请重新发布!")})}else this.tip("主题内容不能为空")},tip:function(t){var e=this,s=null;clearTimeout(s),this.message=t,this.show=!0,s=setTimeout(function(){e.show=!1},2e3)}}},v={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"create"},[s("v-header",{attrs:{head:"新建主题"}}),t._v(" "),s("div",{staticClass:"line"},[s("span",[t._v("选择分类: ")]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.tab,expression:"tab"}],attrs:{id:"select-tab"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.tab=e.target.multiple?s:s[0]}}},[s("option",{attrs:{value:"share"}},[t._v("分享")]),t._v(" "),s("option",{attrs:{value:"ask"}},[t._v("问答")]),t._v(" "),s("option",{attrs:{value:"job"}},[t._v("招聘")]),t._v(" "),s("option",{attrs:{value:"dev"}},[t._v("测试")])]),t._v(" "),s("button",{attrs:{id:"issue"},on:{click:t.sendIssue}},[t._v("发布")])]),t._v(" "),s("div",{staticClass:"title"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",placeholder:"标题,字数10字以上"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"content"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],attrs:{placeholder:"支持Markdown语法,请注意标记代码"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}})]),t._v(" "),s("v-alert",{attrs:{show:t.show,text:t.message}})],1)},staticRenderFns:[]};var p=s("VU/8")(u,v,!1,function(t){s("NYLU")},null,null);e.default=p.exports},NYLU:function(t,e){}});
//# sourceMappingURL=10.c391796cfdbcbeee50bf.js.map