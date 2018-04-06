import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import IndexHeader from '@/components/Header/IndexHeader'
import Index from '@/components/Index/Index'
import Reg from '@/components/Login/Reg'
import Login from '@/components/Login/Login'
import ForgetPwd from '@/components/Login/ForgetPwd'
import ResetPwd from '@/components/Login/ResetPwd'
import InputLogin from '@/components/LittleComponents/InputLogin'
import SinglePic from '@/components/LittleComponents/SinglePic'
import Grapro from '@/components/LittleComponents/Grapro'
import Test from '@/components/LittleComponents/Test'
import BgHead from '@/components/LittleComponents/BgHead'
import PersonalHomePage from '@/components/PersonalHomePage/PersonalHomePage'
import Personal from '@/components/PersonalHomePage/Personal'
import EditPersonalInfo from '@/components/PersonalHomePage/EditPersonalInfo'
import Swiper from '@/components/Swiper/Swiper'
import Home from '@/components/Swiper/Home'
import Search from '@/components/Search/Search'
import Publish from '@/components/Publish/Publish'
import Dynamic from '@/components/Dynamic/Dynamic'
import Admin from '@/components/Admin/AdminIndex'
import UserManage from '@/components/Admin/UserManage'
import ShowCount from '@/components/Admin/ShowCount'
import HandleReport from '@/components/Admin/HandleReport'
import PublishMessage from '@/components/Admin/PublishMessage'
// import TopBar from '@/components/TopBar/TopBar'

Vue.use(Router)
 
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/Reg',
      name: 'Reg',
      component: Reg
    },
    {
      path:'/Admin',
      redirect:'/Admin/ShowCount'
    },
    {
      path: '/Admin',
      name: 'Admin',
      component: Admin,
      children:[
      {path:'/Admin/UserManage',component:UserManage},
      {path:'/Admin/ShowCount',component:ShowCount},
      {path:'/Admin/HandleReport',component:HandleReport},
      {path:'/Admin/PublishMessage',component:PublishMessage}
      ]
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/ForgetPwd',
      name: 'ForgetPwd',
      component: ForgetPwd
    },
    {
      path: '/ResetPwd',
      name: 'ResetPwd',
      component: ResetPwd
    },
    {
      path: '/BgHead',
      name: 'BgHead',
      component: BgHead
    },
    {
      path: '/Test',
      name: 'Test',
      component: Test
    },
    {
      path: '/Personal',
      redirect:'/Personal/Show/Dynamic'
    },
    {
      path: '/Personal',
      name: 'Personal',
      component: Personal,
      children:[
      {path:'/Personal/EditInfo',component:EditPersonalInfo},
      {path:'/Personal/Show',component:PersonalHomePage}
      ]
    },
    {
      path: '/Personal/Show',
      component:PersonalHomePage,
      name:'PersonShow',
      children:[
        {path:'/Personal/Show/Dynamic',component:SinglePic},
        {path:'/Personal/Show/FollwerU',component:SinglePic},
        {path:'/Personal/Show/UFollwer',component:SinglePic}
      ]
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    },
    {
      path: '/Publish',
      name: 'Publish',
      component: Publish
    },
    {
      path: '/Dynamic',
      name: 'Dynamic',
      component: Dynamic
    }
  ]
})
