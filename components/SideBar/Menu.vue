<template>
  <ul>
    <li>
      <nuxt-link to="/">الرئيسية <i class="fas fa-home"></i></nuxt-link>
    </li>
    <li>
      <nuxt-link to="/manage/marketing">التسويق<i class="fas fa-bullhorn"></i></nuxt-link>
    </li>
    <li>
      <nuxt-link to="#"
        >خدمات أسواق إلكترونية<i class="fas fa-concierge-bell"></i
      ></nuxt-link>
    </li>
    <li>
      <nuxt-link to="/manage/public-settings">اللإعدادات العامة <i class="fas fa-cog"></i></nuxt-link>
    </li>
    <li>
      <nuxt-link to="#">
        API إعدادات الربط التقني<i class="fas fa-link"></i
      ></nuxt-link>
    </li>
    <li>
      <nuxt-link to="#">
        تصميم المتجر<i class="fas fa-ruler-combined"></i
      ></nuxt-link>
    </li>
    <li>
      <nuxt-link to="#"
        >إدارة فريق العمل<i class="fas fa-users-cog"></i
      ></nuxt-link>
    </li>
    <li>
      <nuxt-link to="#">رصيد محفظتك<i class="fas fa-wallet"></i></nuxt-link>
    </li>
    <li>
      <nuxt-link to="#">صفحة المتجر <i class="fas fa-globe"></i></nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
    name:'Menu'
}
</script>