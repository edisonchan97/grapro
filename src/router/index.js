import Vue from 'vue'
import Router from 'vue-router'
import IndexHeader from '@/components/Header/IndexHeader'
import Reg from '@/components/Login/Reg'
import Login from '@/components/Login/Login'
import InputLogin from '@/components/LittleComponents/InputLogin'
import Grapro from '@/components/LittleComponents/Grapro'
import UpPic from '@/components/LittleComponents/UpPic'
import BgHead from '@/components/LittleComponents/BgHead'
import PersonalHomePage from '@/components/PersonalHomePage/PersonalHomePage'

Vue.use(Router)
 
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexHeader
    },
    {
      path: '/Reg',
      name: 'Reg',
      component: Reg
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/BgHead',
      name: 'BgHead',
      component: BgHead
    },
    {
      path: '/UpPic',
      name: 'UpPic',
      component: UpPic
    },
    {
      path: '/Personal',
      name: 'Personal',
      component: PersonalHomePage
    }
  ]
})
