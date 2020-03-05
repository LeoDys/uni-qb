<template>
	<view class="uni-uploader-root">
		<view class="uni-uploader-head">
			<view class="uni-uploader-title">点击可预览选好的图片</view>
			<view class="uni-uploader-info">{{imageList.length}}/9</view>
		</view>
		<!-- 方法一 -->
		<!-- <view class="uni-uploader-body">
					<view class="uni-uploader__files">
						<block v-for="(image,index) in imageList" :key="index">
							<view class="uni-uploader__file">
								<view class="icon iconfont icon-shanchu" @tap="delect(index)"></view>
								<image class="uni-uploader__img" :src="image" :data-src="image" @tap="previewImage"></image>
							</view>
						</block>
						<view class="uni-uploader__input-box">
							<view class="uni-uploader__input" @tap="chooseImage"></view>
						</view>
					</view>
				</view> -->

		<!-- 方法二 集成九宫格组件 -->
		<view class="example-body">
			<uni-grid :column="3" :highlight="true" @change="change" :showBorder="flase">
				<template v-if="imageList.length>0">
					<block v-for="(item, index) in imageList" :key="index">
						<template v-if="index==imageList.length-1">
							<uni-grid-item>
								<view class="grid-item-box">
									<view class="icon iconfont icon-shanchu" @tap="delect(index)"></view>
									<image :src="item" class="image" mode="scaleToFill" @tap="previewImage" />
								</view>
							</uni-grid-item>
							<uni-grid-item v-if="isShowAdd">
								<view class="grid-item-box" @tap="chooseImage">
									<image :src="'/static/plus.png'" class="image" mode="scaleToFill" />
								</view>
							</uni-grid-item>
						</template>
						<template v-else>
							<uni-grid-item>
								<view class="grid-item-box">
									<view class="icon iconfont icon-shanchu" @tap="delect(index)"></view>
									<image :src="item" class="image" mode="scaleToFill" @tap="previewImage" />
								</view>
							</uni-grid-item>
						</template>
					</block>
				</template>
				<template v-else>
					<uni-grid-item v-if="isShowAdd">
						<view class="grid-item-box" @tap="chooseImage">
							<image :src="'/static/plus.png'" class="image" mode="scaleToFill" />
						</view>
					</uni-grid-item>
				</template>
			</uni-grid>
		</view>
	</view>
</template>

<script>
	import uniGrid from '@/components/uni-grid/uni-grid.vue';
	import uniGridItem from '@/components/uni-grid-item/uni-grid-item.vue';

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
			uniGrid,
			uniGridItem
		},
		data() {
			return {
				imageList: [],
				sourceTypeIndex: 2,
				sizeTypeIndex: 2,
				countIndex: 8,
				count: [1, 2, 3, 4, 5, 6, 7, 8, 9],
				isShowAdd: true
			}
		},
		methods: {
			chooseImage: async function() {
				if (this.imageList.length === 9) {
					return;
				}
				uni.chooseImage({
					sourceType: sourceType[this.sourceTypeIndex],
					sizeType: sizeType[this.sizeTypeIndex],
					count: this.imageList.length + this.count[this.countIndex] > 9 ? 9 - this.imageList.length : this.count[this.countIndex],
					success: (res) => {
						this.imageList = this.imageList.concat(res.tempFilePaths);
						if (this.imageList.length >= 9) {
							this.isShowAdd = false
						} else {
							this.isShowAdd = true
						}
						this.$emit('uploud', this.imageList)
					}
				})
			},
			previewImage: function(e) {
				var current = e.target.dataset.src
				uni.previewImage({
					current: current,
					urls: this.imageList
				})
			},
			delect(index) {
				uni.showModal({
					title: '提示',
					content: '是否要删除该图片',
					success: (res) => {
						if (res.confirm) {
							this.imageList.splice(index, 1);
							this.$emit('uploud', this.imageList)
						}
					}
				});
			},
			change(e) {
				console.log(e.detail.index)
			}
		}
	}
</script>

<style>
	.uni-uploader-root {
		padding: 22upx 30upx;
		display: flex;
		flex-direction: column;
	}

	.uni-uploader__file {
		position: relative;
	}

	.list-pd {
		margin-top: 50upx;
	}

	.icon-shanchu {
		position: absolute;
		right: 0;
		top: 0;
		background: #333333;
		color: #FFFFFF;
		padding: 2upx 10upx;
		border-radius: 10upx;
		z-index: 100;
	}

	/* 头条小程序组件内不能引入字体 */
	/* #ifdef MP-TOUTIAO */
	@font-face {
		font-family: uniicons;
		font-weight: normal;
		font-style: normal;
		src: url('~@/static/uni.ttf') format('truetype');
	}

	/* #endif */

	/* #ifndef APP-NVUE */

	.example-body {
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		padding: 0;
		font-size: 14px;
		background-color: #ffffff;
	}

	/* #endif */
	.image {
		width: 100%;
		height: 100%;
	}

	.text {
		font-size: 26rpx;
		margin-top: 10rpx;
	}

	.example-body {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
	}

	.grid-item-box {
		flex: 1;
		/* position: relative;
	*/
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 10upx;
		/* padding: 15px 0; */
	}
</style>
