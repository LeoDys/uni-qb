<template>
	<view class="content">
		<view class="view1" :class="[age<100?class1:'',name == 'leo'?class2:'']">性别</view>
		<view class="view1" :style="{'color':Color,'font-size':size + 'upx'}">性别</view>
	</view>
</template>

<script>
	// 测试
	export default {
		data() {
			return {
				class1: 'c1',
				class2: "c2",
				age: 20,
				name: "leo",
				isTure: false,
				Color: "#00ff00",
				size: 50
			}
		},
		methods: {},
	}
</script>

<style>
	body {
		height: 100%;
		background-color: #00ff00;
	}

	.content {
		/* background-color: #2C405A; */
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.view1 {
		height: 500upx;
		width: 500upx;
		background-color: #09BB07;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #FFFFFF;
		border-radius: 100%;
		font-size: 20upx;
	}

	.c1 {
		color: #000000;
	}

	.c2 {
		border: 1upx solid #FF3333;
	}
</style>
