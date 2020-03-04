<template>
	<view>

		<uni-nav-bar fixed="true" :statusBar="true" @clickLeft="signIn" @clickRight="publish">

			<block slot="left">
				<view class="nav-bar-left u-f-ajc">
					<view class="icon iconfont icon-qiandao "></view>
				</view>

			</block>
			<view class="nav-bar-center u-f-ajc">
				<block v-for="(tab,index) in tabs" :key="index">
					<view class="u-f-ajc" :class="{'active':tabIndex == index}" @tap="chang(index)">
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
	import uniNavBar from '../../components/uni-nav-bar/uni-nav-bar.vue';
	export default {
		components: {
			uniNavBar
		},
		data() {
			return {
				tabIndex: 0,
				tabs: ['关注', '话题']
			}
		},
		methods: {
			chang(index) {
				this.tabIndex = index;
			},
			publish() {
				let url = '../publish/publish';
				this.$navTo.togo(url)
			}
		}
	}
</script>

<style>
	.nav-bar-left>view {
		font-size: 35upx;
		color: #8A6DE9;
		margin-left: 16upx;
		border: 1px solid #FF0000;
	}

	.nav-bar-right>view {
		font-size: 35upx;
		color: #00FF00;
		border: 1px solid #FF0000;
	}

	.nav-bar-right {
		width: 100%;
		padding: 0 25upx;
	}

	.nav-bar-underline {
		border-bottom: 4px solid #00FF00;
		border-top: 4px solid #00FF00;
		border-radius: 10upx;
		width: 70upx;
		position: absolute;
		bottom: 0upx;
	}

	.nav-bar-center {
		width: 100%;
		margin-left: -20upx;
		position: relative;
	}

	.active {
		color: #007AFF;
	}

	.nav-bar-center>view {
		font-size: 30upx;
		padding: 0 10upx;
		margin-bottom: 5upx;
	}
</style>
