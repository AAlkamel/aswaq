<template>
    <div class="set v99 sec1-move">
									
									<div class="b-d btn1 v55">
										<span v-click-outside="onClickOutside" @click.stop="dropDownMethode()" style="font-size: 15px;" class=" m-0" > <i class="fas fa-cog"></i> كمل أربع خطوات لتبدأ تجارتك الالكترونية  </span>
										<div  :class="{'sub-m':true,'show':dropDown }">
											<ul>
												<li><nuxt-link to="#">
													
													الإعدادات الأساسية
													<i class="fas fa-check"></i>
													<span>اسم المتجر والرابط - الشعار - معلومات الاتصال - تفاصيل النشاط</span>
												</nuxt-link></li>
												<li><nuxt-link to="#">
													أضف أول منتج
													<i class="fas fa-times"></i>
												</nuxt-link></li>
												<li><nuxt-link to="#">
													خيارات الشحن والتوصيل
													<i class="fas fa-times"></i>
												</nuxt-link></li>
												<li><nuxt-link to="#">
													طرق الدفع
													<i class="fas fa-times"></i>
												</nuxt-link></li>
											</ul>
										</div>
									</div>
									<div class="prog88">
										<div class="progress" style="min-width: 200px; width:auto;">
											<div class="progress-bar" role="progressbar" :style="{width: progrssStting.value+'%'}" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">{{progrssStting.value}}%</div>
										</div>
									</div>
								</div>
</template>

<script>
    export default {
        name:'ProgrssStting',
        data () {
            return {
                dropDown: false
            }
        },
        props:['progrssStting'],
        methods: {
            dropDownMethode:function(){
                this.dropDown=!this.dropDown;
            },
			onClickOutside: function() {
				this.dropDown = false
			},
        },

    }
</script>
<style scoped>
	.b-d::before {
    content: "";
    color: #f5e4f7;
    position: absolute;
    left: 10px;
    top: 12px;
    border-top: 5px dashed;
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
}
.b-d > span {
    margin: 0;
}
	@media only screen and (max-width: 991px) {
		.b-d.v55 {
		border-radius: 5px 5px 0 0;
		width: 100%;
		}
		.prog88 {
			border-radius: 0 0 5px 5px;
			padding: 13px;
			width: 100%;
		}
	}
	
</style>