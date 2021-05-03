<template>
    <div :class="{'manage-menu':true,'m-m-s':true,'collaps': this.$store.state.sideFirst.fsb ,'open': !this.$store.state.sideFirst.fsb }">
			<Menu/>
		</div>
</template>

<script>
import Menu from '../SideBar/Menu'

export default {
    name:'MGSB',
	components: {
		Menu
	}
}
</script>