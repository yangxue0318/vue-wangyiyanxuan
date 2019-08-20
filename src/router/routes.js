import Home from '../pages/Home/Home.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Shop from '../pages/Shop/Shop.vue'
import Sort from '../pages/Sort/Sort.vue'
import Find from '../components/Find/Find.vue'
import Login from '../components/Login/Login.vue'
export default[
        {
					path:'/home',
                    component:Home,
                    meta:{
                        showFooter:true
                    },
                   
                       
        } ,
        {
					path:'/sort',
                    component:Sort,
                    meta:{
                        showFooter:true
                    }
        } ,
        {
					path:'/shop',
                    component:Shop,
                    meta:{
                        showFooter:true
                    }
        } ,
        {
					path:'/search',
                    component:Search,
                    meta:{
                        showFooter:true
                    }
        } ,
        {
					path:'/profile',
					component:Profile
        } ,
        {
					path:'/',
					redirect:'/home'
        },
        {
            path:'/find',
            component:Find
    },
    {
        path:'/login',
        component:Login
    }
   
    ]