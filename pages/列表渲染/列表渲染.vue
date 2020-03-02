<template>
	<view class="content">
		<!-- 监听属性 -->
		<button class="fix" type="primary" @tap="changAge()">{{weight}}</button>

		<block v-for="(item,index) in arr" :key="index">
			<view class="view_item" @tap.stop="click(index)">
				第 {{index}} 个 {{item}}
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				arr: ["first", "second", "three", "second", "three", "second", "three", "second", "three", "second", "three",
					"second", "three", "second", "three", "second", "three", "second", "three", "second", "three", "second", "three",
					"second", "three", "second", "three", "second", "three", "second", "three",
				],
				age: 0
			}
		},
		watch: {
			age: function(val) {
				if (val > 30) {
					uni.showToast({
						title: '121321'
					});
				}
			}
		},
		methods: {
			click: function(index) {
				uni.showToast({
					title: this.arr[index]
				});
			},
			changAge: function() {
				this.arr.push("123");
				console.log(this.arr.length); 
				this.age += 10;
			},
			broadCast:function() {
				plus.android.importClass("")
			}
		},
		computed: {
			weight: function() {
				return this.age > 30 ? "中年" : "少年";
			}
		}
	}
</script>

<style>
	.fix {
		position: fixed;
		width: 100%;
	}

	.view_item {
		font-size: 35rpx;
		width: 100%;
		height: 80rpx;
		display: flex;
		color: #333333;
		align-items: center;
		background-color: #FFFFFF;
		border-bottom: 3rpx solid #BEBEBE;
		padding-left: 20rpx;
	}

	.content>view:nth-of-type(1) {
		border-bottom: 3rpx solid #BEBEBE;
		border-top: 3rpx solid #BEBEBE;
	}
</style>
