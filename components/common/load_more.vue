<template>
	<view class="load-more">{{loadText}}</view>
</template>

<script>
	export default {
		props: {
			loadText:String
		}
	}
</script>

<style>
	.load-more {
		color: #AAAAAA;
		text-align: center;
		font-size: 25upx;
		padding: 10px;
	}
</style>
