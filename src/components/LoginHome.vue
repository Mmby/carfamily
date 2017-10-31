<template>
	<div class="login_home">
		<router-view></router-view>
	</div>
</template>

<script>
	import Login from "./login/Login"
	import Mobilever from "./login/Mobilever"
	export default {
		name:"loginHome",
		components: {
				Login,
				Mobilever

		},
		data(){
			return {

			}
		}
	}
</script>

<style>
	.login_home{
		padding-top: 20px;
		padding-bottom: 45px;
	}
</style>