<template>
    <div :class="{'manage-menu':true,'show': this.$store.state.sideFirst.fsb }">
			<Menu />
		</div>
</template>

<script>
import Menu from '../SideBar/Menu'
export default {
    name:'MFSB',
	components: {
		Menu
	}
}
</script>