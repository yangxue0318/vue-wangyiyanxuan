import Home from '../pages/Home/Home.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Shop from '../pages/Shop/Shop.vue'
import Sort from '../pages/Sort/Sort.vue'

export default[
        {
					path:'/home',
					component:Home
        } ,
        {
					path:'/sort',
					component:Sort
        } ,
        {
					path:'/shop',
					component:Shop
        } ,
        {
					path:'/search',
					component:Search
        } ,
        {
					path:'/profile',
					component:Profile
        } ,
        {
					path:'/',
					redirect:'/home'
        }
   
    ]