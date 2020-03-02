<template>
	<view>
		{{type}}
		{{name}}
	</view>
</template>

<script>
	export default {
		onReady() {
			
		},
		data() {
			return {
				type:'',
				name:'',
			}
		},
		methods: {
			
		},
		onLoad:function(option){
			this.type =  option.type;
			this.name =  option.name;
		}
	}
</script>

<style>

</style>
