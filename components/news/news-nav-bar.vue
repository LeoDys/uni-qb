<template>
	<view>
		<uni-nav-bar fixed="true" :statusBar="true" @clickLeft="signIn" @clickRight="publish" :border="false">
			<block slot="left">
				<view class="nav-bar-left u-f-ajc">
					<view class="icon iconfont icon-qiandao "></view>
				</view>
			</block>
			<view class="nav-bar-center u-f-ajc">
				<block v-for="(tab,index) in tabs" :key="index">
					<view class="nav-bar-tab u-f-ajc" :class="{'active':tabIndex == index}" @tap="changTabs(index)">
						{{tab}}
						<view v-if="(tabIndex == index)" class="nav-bar-underline"></view>
					</view>
				</block>
			</view>
			<block slot="right">
				<view class="nav-bar-right u-f-ajc">
					<view class="icon iconfont icon-bianji1"></view>
				</view>
			</block>
		</uni-nav-bar>
	</view>
</template>

<script>
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
	
	export default {
		components: {
			uniNavBar
		},
		data() {
			return {
			}
		},
		props: {
			tabs: Array,
			tabIndex:Number
		},
		methods: {
			changTabs(index) {
				this.$emit("changTab", index);
			},
			publish() {
				let url = '../publish/publish';
				this.$navTo.togo(url)
			},
			signIn() {

			}
		},
	}
</script>

<style>
	.nav-bar-left>view {
		font-size: 35upx;
		color: #8A6DE9;
		margin-left: 16upx;
	}

	.nav-bar-right>view {
		font-size: 35upx;
		color: #00FF00;
	}

	.nav-bar-right {
		width: 100%;
		padding: 0 25upx;
	}

	.nav-bar-underline {
		height: 8upx;
		background-color: #00FF00;
		border-radius: 20upx;
		width: 60upx;
		position: absolute;
		bottom: 0upx;
	}

	.nav-bar-center {
		width: 100%;
		height: 100%;
		margin-left: -20upx;
		position: relative;
	}

	.active {
		color: #007AFF;
	}

	.nav-bar-center>view {
		font-size: 30upx;
		padding: 0 10upx;
	}
</style>
