<template>
    <div id="team-list" class="m-5 ">
        <transition name="fade">
            <dev-profile v-if="showProfile" :profile="profile" :team="team" :index="index"></dev-profile>
            <!-- team goes here -->
            <div v-else>
                <h1>Our Proud Team</h1>
                <div class=" row mt-5">
                    <div v-for="(dev, index) in team" :key="dev.name" class="col-sm-4 mb-3 text-center">
                        <transition name="team">
                            <div @click="profile(index)" class="card brdr">
                                <div class="card-header ">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <img class="w-75 rounded-circle brdr" :src="dev.imgSrc" alt="" >
                                        </div>
                                        <div class="col-md-8">
                                            <h2>{{dev.name[0].toUpperCase() + dev.name.slice(1, dev.name.length)}}</h2>
                                            <p class="dev-role"><code>{{dev.role}}</code></p>
                                            <a class="profile-btn btn btn-primary"  @click="profile(index)">Profile</a>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </transition>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import dev from './sub-pages/dev-profile.vue'

export default {
    components:{
        'dev-profile':dev
    },
    data(){
        return{
            index:null,
            showProfileBtn:false,
            team:[
                {name:'alazar', imgSrc:require("../../assets/member_1.jpg"), role:'cybersecurity'},
                {name:'kenean', imgSrc: require("../../assets/member_2.jpg"), role:'web developer'},
                {name:'faruq ', imgSrc: require("../../assets/member_3.jpg"), role:'web developer'},
                {name:'yisaq',  imgSrc: require("../../assets/member_4.jpg"), role:'android developer'},
                {name:'minase', imgSrc: require("../../assets/member_5.jpg"), role:'android developer'},
                {name:'Henon',  imgSrc: require("../../assets/member_6.jpg"), role:'android developer'},
                {name:'Imran',  imgSrc: require("../../assets/member_7.jpg"), role:'desktop'},
                {name:'Yabsira',imgSrc: require("../../assets/member_8.jpg"),  role:'Embedded'},
            ],
            showProfile:false
        }
    },
    methods:{
        profile(index){
            this.index =index
            this.showProfile = !this.showProfile
        }
    }
    

}
</script>

<style>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s,;
    }
    .fade-enter, .fade-leave-to  {
        opacity: 0;
    }
    .dev-name{
        font-size: 40px;
    }
    .dev-role{
        font-size: 15px;
    }
    .brdr{
        cursor: pointer;
    }
    .profile-btn{
        opacity: 0;
    }
    .profile-btn:hover{
        opacity: 1;
    }
</style>