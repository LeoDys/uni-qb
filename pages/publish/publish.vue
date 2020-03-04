<template>
	<view>
		<uni-nav-bar left-icon="arrowleft" rightText="发布" fixed="true" :statusBar="true" @clickLeft="back" @clickRight="publish">
			<view class="u-f-ajc u-f-1" @tap.stop="range">
				所有人可见
				<view class="icon iconfont icon-xialazhankai"></view>
			</view>
		</uni-nav-bar>
		<view class="uni-textarea">
			<textarea v-model="textareaText" placeholder="说点啥吧..."></textarea>
		</view>
		<!-- 图片上传 -->
		<uploud-images @uploud = "uploud"></uploud-images>
	</view>
</template>

<script>
	import uniNavBar from '../../components/uni-nav-bar/uni-nav-bar.vue';
	import uploudImages from '../../components/common/uploud-images.vue';
	import permision from "@/common_js/permission.js"
	var sourceType = [
		['camera'],
		['album'],
		['camera', 'album']
	]
	var sizeType = [
		['compressed'],
		['original'],
		['compressed', 'original']
	]
	export default {
		components: {
			uniNavBar,
			uploudImages
		},
		data() {
			return {
				textareaText: "",

				imageList: []
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
			},
			uploud(arr) {
				this.imageList = arr;
			}
		}
	}
</script>

<style>
	.uni-textarea {
		border: 1upx solid #EEEEEE;
	}
</style>
