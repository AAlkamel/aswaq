<template>
    <div class="t-nav"> 
					<div class="container">
						<div class="nav-menu">
							<ul>
								<li class="">
									<div class="tm-bx" style="top:2;">
										<span class="x-manage-menu" > <a @click="toggle" href="#"> <i class="fas fa-bars"></i> </a></span>
									</div>
								</li>
								<li class="">
									<div class="tm-bx" style="top:9px;">
										<span > <a class="p-0" href="#"><img class="avatar" src="~/assets/images/pic2.jpg" alt=""> </a></span>
										<div class="m-op">
											<span><a class="text-center" href=""><strong>مرحباٌ بك</strong> </a></span>
											<span class="pr-4"><a href="#"> <i class="ti-user"></i> تعديل الملف الشخصي</a></span>
											<span class="pr-4"><a href="#"> <i class="ti-key"></i>تغيير كلمة المرور</a></span>
											<span class="pr-4"><a href="#"> <i class="ti-world"></i>موقعي</a></span>
											<span class="pr-4"><a href="#"> <i class="ti-power-off"></i>تسجيل الخروج</a></span>
										</div>
									</div>
								</li>
								<li class="">
									<div class="tm-bx">
										<small>3</small>
										<span > <a href="#"><i class="fas fa-envelope"></i></a></span>
										<div class="m-op">
											<span><a class="text-center" href="#">
												<strong>التنبيهات والمحادثات</strong>
											</a></span>
											<span class="pr-4"><a href="#"> <i class="ti-comment-alt"></i>
												رسالة من أحمد
												<small class="time">منذ دقيقة</small>
											</a></span>
											<span class="pr-4"><a href="#"> <i class="ti-microphone-alt"></i>
												تم تعديل سياسة الخصوصية
												<small class="time">منذ 2 شهر</small>
											</a></span>
											<span class="pr-4"><a href="#"> <i class="ti-microphone-alt"></i>
												تم ارسال أرباحك 
												<small class="time">منذ 3 ساعات </small>
											</a></span>
										</div>
									</div>
								</li>
								<li class="">
									<div class="tm-bx">
										<small>3</small>
										<!-- <span > <a class="ti-shopping-cart" href="#"> </a></span> -->
										<span > <a  href="#"><i class="fas fa-shopping-bag"></i></a></span>
										<div class="m-op">
											<span><a class="text-center" href="#">
												<strong>المنتجات</strong>
											</a></span>
											<span class="pr-4"><a href="#"> <i class="ti-shopping-cart"></i>
												المنتج الإلكتروني الأول 
												
												<small class="time">المخزون : 100</small>
												<small class="time">منذ دقيقة</small>
											</a></span>
											<span class="pr-4"><a href="#"> <i class="ti-shopping-cart"></i>
												المنتج الإلكتروني الثاني 
												
												<small class="time">المخزون : 100</small>
												<small class="time">منذ 2 شهر</small>
											</a></span>
											<span class="pr-4"><a href="#"> <i class="ti-shopping-cart"></i>
												المنتج الإلكتروني الثالث 
												
												<small class="time">المخزون : 100</small>
												<small class="time">منذ 20 يوم</small>
											</a></span>
										</div>
									</div>
								</li>
								<li class="">
									<div class="tm-bx">
										<small>1</small>
										<span > <a href="#"><i class="fas fa-shipping-fast"></i></a></span>
										<div class="m-op">
											<span><a class="text-center" href="#">
												<strong>الطلبات</strong>
											</a></span>
											<span class="pr-4"><a href="#"> <i class="ti-receipt"></i>
												لديك طلب جديد
												
												<small class="time">منذ دقيقة</small>
											</a></span>
										</div>
									</div>
								</li>
								<li class="">
									<div class="tm-bx">
										<small>0</small>
										<span > <a href="#"><i class="fas fa-bell"></i></a></span>
										<div class="m-op">
											<!-- <span><a class="text-center" href="#">
												<strong>الطلبات</strong>
											</a></span>
											<span class="pr-4"><a href="#"> <i class="ti-receipt"></i>
												لديك طلب جديد
												
												<small class="time">منذ دقيقة</small>
											</a></span> -->
										</div>
									</div>
								</li>
							</ul>
						</div>
						<div class="nav-logo">
							<nuxt-link to="/" class="d-viwe">
								<img class="l-logo" src="~/assets/images/logo-larg.webp" alt="">
							</nuxt-link>
							<nuxt-link to="/" class="m-viwe">
								<img class="l-logo" src="~/assets/images/logo-small.webp" alt="">
							</nuxt-link>
						</div>
					</div>
				</div>
</template>
<script>

export default {
	name:'ManageNav',
	components: {
	},
	methods: {
		toggle(){
			this.$store.commit('sideFirst/toggle')
		}
	},
};
</script>
<style scoped>
	.nav-menu {
    position: relative;
    top: -7px;
}
</style>