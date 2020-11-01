import homepage from "./components/pages/homepage.vue"
import team from "./components/pages/team.vue"
import contact from "./components/pages/contact.vue"
import addQuestion from './components/addQuestion.vue'

export default [
    {path:'/', component:homepage, props:true},
    {path:'/team', component:team } ,
    {path:'/contact', component:contact },
    {path:'/add', component:addQuestion, props:'questions' } 
]