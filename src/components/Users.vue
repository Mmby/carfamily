<template>
	<div class="users"> 
		<h1>users页</h1>
		<ul>
			<li v-for="(value,key,index) in user">{{value.name}}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name:"users",
		data(){
			return {
				user:{}
			}
		},
		methods:{
			
		},
		created:function(){
			this.$http.get("http://jsonplaceholder.typicode.com/users",{paramas:{str:"timor"}}).then(function(res){
				//console.log(res.data);
				this.user = res.data;
			})
			
		}
	}
</script>

<style scoped>
	.users{
		color: red;
		font-size: 30px;
	}
</style>