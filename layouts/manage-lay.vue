<template>
  <div class="manage">
    <MFSB></MFSB>
    <ManageNav></ManageNav>
    <main :class="{'side': this.$store.state.sideFirst.fsb }">
      <Nuxt />
    </main>
    
  </div>
</template>
<script>
import ManageNav from '../components/Manage/ManageNav.vue'
import MFSB from '../components/Manage/MFSB.vue'

export default {
  components: { ManageNav , MFSB},
}
</script>