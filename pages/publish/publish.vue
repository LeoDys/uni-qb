<template>
	<view>
		<uni-nav-bar left-icon="arrowleft" rightText="发布" fixed="true" :statusBar="true" @clickLeft="back" @clickRight="publish">
			<view class="u-f-ajc u-f-1" @tap.stop="range">
				所有人可见
				<view class="icon iconfont icon-xialazhankai"></view>
			</view>
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

			}
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			publish() {
				console.log("发布")
			},
			range() {
				uni.showActionSheet({
					itemList: ['所有人可见', '朋友可见', '仅自己可见'],
					success: (res) => {
						console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
					}
				});
			}
		}
	}
</script>

<style>

</style>
