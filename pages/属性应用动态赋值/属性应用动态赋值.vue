<template>
	<view>
		<!-- <view class="icon iconfont icon-icon-test" style="color: red; font-size: 30px;">

		</view> -->

		<view class="content">
			<view :class = "changStyle">
				{{username}}
			</view>
			<view class="view_item">
				{{qwer.username}}
			</view>
			<view class="view_item">
				3
			</view>
			<view class="view_item">
				4
			</view>
			<view class="view_item">
				5
			</view>
			<!-- <view class="view_item">
				6
			</view> -->
		</view>

		<button type="primary" @click="changUsername('changUsername')">修改用户名</button>
		<button type="primary" @click="changClass()">修改样式</button>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				username: "123",
				qwer: {
					username: "456"
				},
				changStyle: "view_item"
			}
		},
		methods: {
			changUsername: function(newName) {
				this.username = newName;
			},
			changClass: function() {
				this.changStyle = "changStyle"
			}
		},
	}
</script>


<style>
	.changStyle {
		background-color: #ff0000;
		color: #ffffff;
		margin-top: 50upx;
	}

	.content {
		height: 500upx;
		width: 100%;
		background-color: #3F536E;
		display: flex;
		border: 1upx solid #FF3333;
		/* 水平居中*/
		/* justify-content: center; */
		/* 垂直居中*/
		/* align-items: center; */
		/* flex-direction: column; */
	}

	.view_item:nth-of-type(even) {
		/* height: 200upx; */
		/* flex: 1; */
		/* width: 200upx; */
		/* text-align: center;
		line-height: 200upx; */
		background-color: #007AFF;
		/* display: flex; */
		/* 水平居中*/
		/* justify-content: center; */
		/* 垂直居中*/
		/* align-items: center; */
		color: #ffffff;
	}

	.view_item:nth-of-type(odd) {
		height: 200upx;
		/* flex: 1; */
		/* width: 200upx; */
		/* text-align: center;
		line-height: 200upx; */
		background-color: #09BB07;
	}

	.view_item:nth-of-type(1) {
		flex: 1;
	}

	.view_item:nth-of-type(2) {
		flex: 2;
		/* align-self: stretch; */
	}

	.view_item:nth-of-type(3) {
		flex: 3;
	}

	.view_item:nth-of-type(4) {
		flex: 4;
		/* align-self: stretch; */
	}

	.view_item:nth-of-type(5) {
		flex: 5;
	}

	/* .view_item:first-child {
		flex-shrink: 1;
	} */

	/* .content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	} */
</style>
