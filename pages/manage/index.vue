<template>
    <div>
        <div class="sec1">
				<div class="container">
					<div class="top" style="position: relative;z-index: 2;">
						<div class="">
							<div class="">
								<div class="set set1 sec1-move">
									<a id="btn-s155" class="mr-2"  href="#"><span class="btn2" >مركز المساعدة <i class="ti-comment-alt"></i> </span></a>
									<div class="b-d-1 b-d">
										<span class="btn2 " >إدارة اللإشتراك <i class="ti-medall"></i></span>
										<div class="sub-m sub-m-2">
											<ul>
												<li><a href="#">بيانات الإشتراك</a></li>
												<li><a href="#">ترقية الإشتراك</a></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div class=" text-right">
								<ProgrssStting :progrssStting="ProgrssStting" />
							</div>
						</div>
					</div>
                    <div data-app>
                        <DateRang />
                    </div>
					<div class="row">
						<ManageCard :key="item.title" v-for="item in cardData" :card="item"/>
					</div>
				</div>
			</div>
    </div>
</template>
<script>
import ManageCard from'../../components/Manage/ManageCard' 
import DateRang from'../../components/Manage/DateRang' 
import ProgrssStting from'../../components/Manage/ProgrssStting' 
export default {
    components:{ManageCard,ProgrssStting,DateRang},
    layout: 'manage-lay',
	data: () => {
        return {
			ProgrssStting:{
				value:50,
			},
            cardData:[
            {
                titel:'المنتجات',
                search:true,
                searchPlaceholder:'اسم المنتج - وصف المنتج',
                icon:true,
                iconSrc:'fas fa-box',
                img:false,
                imgSrc:'',
                alt:'',
                num:30,
                link:'/products'
            },
            {
                titel:'الطلبات',
                search:true,
                searchPlaceholder:'رقم الطلب - رقم الشحنة- جوال العميل',
                icon:true,
                iconSrc:'fas fa-truck',
                img:false,
                imgSrc:'/_nuxt/assets/images/logo-small.webp',
                alt:'',
                num:10,
                link:'/products'
            },
            {
                titel:'العملاء والتقييمات',
                search:true,
                searchPlaceholder:'اسم العميل-جوال العميل',
                icon:true,
                iconSrc:'fas fa-users',
                img:false,
                imgSrc:'',
                alt:'',
                num:305,
                link:'/products'
            },
            {
                titel:'الزيارات',
                search:false,
                searchPlaceholder:'اسم المنتج - وصف المنتج',
                icon:true,
                iconSrc:'fas fa-eye',
                img:false,
                imgSrc:'',
                alt:'',
                num:2000,
                link:'/products'
            },
            {
                titel:'المبيعات',
                search:false,
                searchPlaceholder:'اسم المنتج - وصف المنتج',
                icon:true,
                iconSrc:'fas fa-shopping-bag',
                img:false,
                imgSrc:'',
                alt:'',
                num:500,
                link:'/products'
            },
            {
                titel:'إجمالي الأرباح',
                search:false,
                searchPlaceholder:'اسم المنتج - وصف المنتج',
                icon:true,
                iconSrc:'fas fa-coins',
                img:false,
                imgSrc:'',
                alt:'',
                num:300,
                link:'/products'
            }
            ]
        }
    },
}
</script>
<style scoped>
    
	.set.set1 {
		padding: 10px 0 0px;
		flex-direction: row-reverse;
		z-index: 1;
	}
	.datepick .set.set1 {
		padding: 0;
	}
</style>