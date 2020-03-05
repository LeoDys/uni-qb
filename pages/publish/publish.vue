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
		<uploud-images @uploud="uploud"></uploud-images>
		<!-- 弹出层 -->
		<!-- <uni-popup ref="showpopup" :type="center" @change="change"><text class="popup-content">{{ content }}</text></uni-popup> -->

		<uni-popup ref="showtip" type="center" :mask-click="false" @change="change">
			<view class="uni-tip">
				<text class="uni-tip-title">警告</text>
				<text class="uni-tip-content">这是一个通过自定义 popup，自由扩展的 警告弹窗。点击遮罩不会关闭弹窗。</text>
				<view class="uni-tip-group-button">
					<text class="uni-tip-button" @click="cancel('tip')">取消</text>
					<text class="uni-tip-button" @click="cancel('tip')">确定</text>
				</view>
			</view>
		</uni-popup>


		<!-- <view class="parent">

			<view class="u-f-ajc">1</view>
			<view class="u-f-ajc">2</view>
			<view class="u-f-ajc">3</view>
			<view class="u-f-ajc">4</view>

		</view> -->


		<!-- <view class="parent">
			<block v-for="(item,index) in btnList" :key="index">
				<view class="u-f-ajc">{{item}}</view>
			</block>
			<view class="u-f-ajc">Add</view>
		</view> -->

	</view>
</template>

<script>
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
	import uploudImages from '@/components/common/upload-images.vue';
	import uniPopup from "@/components/popup/uni-popup.vue"
	export default {
		components: {
			uniNavBar,
			uploudImages,
			uniPopup
		},
		data() {
			return {
				isSure: false,
				textareaText: "",
				content: '顶部弹 popup',
				imageList: [],
				btnList: [
					1,
					2,
					3,
					4,
					5,
					6,
					7
				],
				
			}
		},
		onShow() {

		},
		onReady() {

		},
		onBackPress() {
			if (this.isSure) {
				return;
			}

			if (!this.textareaText && this.imageList.length <= 0) {
				return
			}

			uni.showModal({
				content: "是否保存为草稿？",
				confirmText: "保存",
				cancelText: "不保存",
				success: res => {
					if (res.confirm) {

					} else {

					}
					this.isSure = true;
					uni.navigateBack({
						delta: 1
					})
				}
			});
			return true;
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			publish() {
				this.showPop();
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
			},
			showPop() {
				this.$nextTick(() => {
					this.$refs['showtip'].open()
				})
			},
			change(e) {
				console.log('是否打开:' + e.show)
			},
			cancel() {
				this.$nextTick(() => {
					this.$refs['showtip'].c()
				})
			}
		}
	}
</script>

<style>
	.parent {
		display: flex;
		justify-content: center;
		width: 100%;
		height: 100%;
		background-color: #00FF00;
		flex-direction: row;
		flex-wrap: wrap;
		/* justify-content: space-between; */
		justify-content: space-around;
		/* justify-self: start; */
	}

	.parent view {
		width: 30%;
		background-color: #FF0000;
		height:100upx;
		border: 1upx solid #000000;
	}

	.uni-textarea {
		border: 1upx solid #EEEEEE;
	}

	.popup-content {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		background-color: #fff;
		padding: 15px;
		font-size: 14px;
	}

	/* 提示窗口 */
	.uni-tip {
		/* #ifndef APP-NVUE */
		display: flex;
		flex-direction: column;
		/* #endif */
		padding: 15px;
		width: 300px;
		background-color: #fff;
		border-radius: 10px;
	}

	.uni-tip-title {
		margin-bottom: 10px;
		text-align: center;
		font-weight: bold;
		font-size: 16px;
		color: #333;
	}

	.uni-tip-content {
		/* padding: 15px;
	*/
		font-size: 14px;
		color: #666;
	}

	.uni-tip-group-button {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		margin-top: 20px;
	}

	.uni-tip-button {
		flex: 1;
		text-align: center;
		font-size: 14px;
		color: #3b4144;
	}
</style>
