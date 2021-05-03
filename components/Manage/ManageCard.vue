<template>
    <div class="col-md-6 col-lg-4 sec1-move">
        <div class="card ">
            <h5>{{this.card.titel}}</h5>
            <div v-if="card.search" class="sear">
                <i class="fab fa-sistrix"></i>
                <input type="search" :placeholder="card.searchPlaceholder">
            </div>
            <div class="sta">
                <span v-if="card.icon" :class="card.iconSrc"></span>
                <span v-if="card.img" class="shop"> <img :src="card.imgSrc" :alt="card.alt"></span>
                <strong>{{this.card.num}}</strong>
                
            </div>
            <div class="view">
                <nuxt-link class="btn2 " :to="card.link">تفاصيل </nuxt-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'ManageCard',
    props:[
        'card'
    ],
    
}

</script>