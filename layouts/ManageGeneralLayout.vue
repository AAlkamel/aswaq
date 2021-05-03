<template>
  <div class="manage">
    <MGSB></MGSB>
    <ManageNav></ManageNav>
    <main class="iner">
         <Nuxt />
    </main>
  </div>
</template>
<script>
import ManageNav from '../components/Manage/ManageNav.vue'
import MGSB from '../components/Manage/MGSB.vue'

export default {
  components: { ManageNav , MGSB},
}
</script>