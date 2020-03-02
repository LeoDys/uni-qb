<template>
	<view>
		<!-- <button type="default" @tap="changShow()">change</button>
		<view class="box" v-if="isShow">
			isShow
		</view> -->
		<button type="default" @tap='changAge()'>change</button>
		<view class="box" v-if='age>40'>
			{{age}}
		</view>

	</view>
</template>

<script>
	export default {
		created() {
			// changShow()
		},
		data() {
			return {
				age: 10,
				isShow: true
			}
		},
		methods: {
			changShow: function() {
				this.isShow = !this.isShow
			},
			changAge: function() {
				this.age += 10;
			}
		}
	}
</script>

<style>
	.box {
		display: flex;
		height: 400upx;
		width: 400upx;
		background-color: #00FF00;
		justify-content: center;
		align-items: center;
		color: #FFFFFF;
	}
</style>
