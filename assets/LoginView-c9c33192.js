import{_ as d,o as u,c as p,a as c,d as s,i,j as l,F as m}from"./index-5ab7d4cd.js";const{VITE_APP_URL:_,VITE_APP_PATH:b}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"wweilin",BASE_URL:"/Vue-week6/",MODE:"production",DEV:!1,PROD:!0},f={data(){return{user:{username:"",password:""}}},methods:{login(){this.$http.post(`${_}v2/admin/signin`,this.user).then(t=>{const{token:e,expired:n}=t.data;console.log("token",e,n),document.cookie=`hexToken = ${e};expires=${new Date(n)};path=/`,this.$router.push("/admin/products")}).catch(t=>{alert(t.response.data.message)})}}},h={id:"form",class:"form-signin"},w={class:"form-floating mb-3"},P=s("label",{for:"username"},"Email address",-1),g={class:"form-floating"},V=s("label",{for:"password"},"Password",-1);function x(t,e,n,E,r,a){return u(),p(m,null,[c(" 這是登入畫面 "),s("form",h,[s("div",w,[i(s("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>r.user.username=o),type:"email",class:"form-control",id:"username",placeholder:"name@example.com",required:"",autofocus:""},null,512),[[l,r.user.username]]),P]),s("div",g,[i(s("input",{"onUpdate:modelValue":e[1]||(e[1]=o=>r.user.password=o),type:"password",class:"form-control",id:"password",placeholder:"Password",required:""},null,512),[[l,r.user.password]]),V]),s("button",{class:"btn btn-lg btn-primary w-100 mt-3",type:"button",onClick:e[2]||(e[2]=(...o)=>a.login&&a.login(...o))}," 登入 ")])],64)}const k=d(f,[["render",x]]);export{k as default};
