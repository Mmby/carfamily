<template>
	<div class="server">
		<router-view></router-view>
	</div>
</template>

<script>
//	import Merchantregister from './components/merchant/Merchantregister'
	export default {
		name:"server",
		components:{
//			Merchantregister
		},
		data(){
			return {

			}
		},
		methods:{
			
		},
		mounted(){
//			$(".w_navContL span").eq(1).css("background","#101f4b");
		}
	}
</script>

<style scoped>
	.server{
		width: 977px;
		margin: 0 auto;
	}
</style>