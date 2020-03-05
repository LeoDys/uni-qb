<template>
	<view>

		<swiper-tab-header :tabBars="tabBars" :tabIndex="tabIndex" @clickTitleBarItemPar="tabtap"></swiper-tab-header>

		<!-- 下面两行是fragment的包裹 -->
		<view class="uni-tab-bar">
			<swiper class="swiper-box" :style="{height:swiperheight+'px'}" :current="tabIndex" @change="tabChange">
				<!-- 遍历外层list -->
				<swiper-item v-for="(items,indexPage) in newslist" :key="indexPage">
					<!-- fragment滑到底部的的时候加载更多  把list行项目列表传到fragment中 -->
					<scroll-view scroll-y class="list" @scrolltolower="loadmore(indexPage)">
						<!-- 判断传进来的行项目列表list是否有数据 -->
						<template v-if="items.list.length > 0">
							<!-- 有数据的话遍历列表赋值 -->
							<block v-for="(item,indexItem) in items.list" :key="indexItem">
								<!-- 行项目组件  传值赋值操作 -->
								<index-list :item="item" :index="indexItem" @guanzhu="guanzhu" @caidingIndex="caidingIndex"></index-list>
							</block>
							<!-- 上拉加载... -->
							<load-more :loadText="items.loadText"></load-more>
						</template>
						<template v-else>
							<!-- 无内容 -->
							<nothing></nothing>
						</template>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	/* 1 引入自定义的组件 */
	import indexList from "../../components/index/index_list.vue";
	import swiperTabHeader from '../../components/index/swiper-tab-header.vue';
	import loadMore from '../../components/common/load_more.vue';
	import nothing from '../../components/common/nothing.vue';

	export default {
		/* 2 组件声明 */
		/* 3 在template中引用组件 */
		components: {
			indexList,
			swiperTabHeader,
			loadMore,
			nothing
		},
		/* 数据源 */
		data() {
			return {
				swiperheight: 500,
				tabIndex: 0,
				tabBars: [{
						name: "关注",
						id: "guanzhu"
					},
					{
						name: "推荐",
						id: "tuijian"
					},
					{
						name: "体育",
						id: "tiyu"
					},
					{
						name: "热点",
						id: "redian"
					},
					{
						name: "财经",
						id: "caijing"
					},
					{
						name: "娱乐",
						id: "yule"
					},
				],
				newslist: [{
						loadText: "上拉加载更多",
						list: [{
								userpic: "../../static/demo/userpic/12.jpg",
								username: "昵称",
								isguanzhu: false,
								title: "我是标题",
								type: "img", // img:图文,video:视频
								titlepic: "http://www.33lc.com/article/UploadPic/2012-7/201272713565163040.jpg",
								infonum: {
									index: 0, //0:没有操作，1:顶,2:踩；
									dingnum: 11,
									cainum: 11,
								},
								commentnum: 10,
								sharenum: 10,
							},
							{
								userpic: "../../static/demo/userpic/12.jpg",
								username: "昵称",
								isguanzhu: true,
								title: "我是标题",
								type: "video", // img:图文,video:视频
								titlepic: "http://attach.bbs.miui.com/forum/201407/13/160855nvpsvs198psa6zss.jpg",
								playnum: "20w",
								long: "2:47",
								infonum: {
									index: 1, //0:没有操作，1:顶,2:踩；
									dingnum: 11,
									cainum: 11,
								},
								commentnum: 10,
								sharenum: 10,
							}
						]
					},
					{
						loadText: "上拉加载更多",
						list: [{
								userpic: "../../static/demo/userpic/12.jpg",
								username: "昵称",
								isguanzhu: false,
								title: "我是标题",
								type: "img", // img:图文,video:视频
								titlepic: "http://attach.bbs.miui.com/forum/201407/13/160855nvpsvs198psa6zss.jpg",
								infonum: {
									index: 0, //0:没有操作，1:顶,2:踩；
									dingnum: 11,
									cainum: 11,
								},
								commentnum: 10,
								sharenum: 10,
							},
							{
								userpic: "../../static/demo/userpic/12.jpg",
								username: "昵称",
								isguanzhu: true,
								title: "我是标题",
								type: "video", // img:图文,video:视频
								titlepic: "http://gss0.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/b17eca8065380cd718874c1fa444ad34588281a3.jpg",
								playnum: "20w",
								long: "2:47",
								infonum: {
									index: 1, //0:没有操作，1:顶,2:踩；
									dingnum: 11,
									cainum: 11,
								},
								commentnum: 10,
								sharenum: 10,
							},
							{
								userpic: "../../static/demo/userpic/12.jpg",
								username: "昵称",
								isguanzhu: false,
								title: "我是标题",
								type: "img", // img:图文,video:视频
								titlepic: "../../static/demo/datapic/11.jpg",
								infonum: {
									index: 0, //0:没有操作，1:顶,2:踩；
									dingnum: 11,
									cainum: 11,
								},
								commentnum: 10,
								sharenum: 10,
							},
							{
								userpic: "../../static/demo/userpic/12.jpg",
								username: "昵称",
								isguanzhu: true,
								title: "我是标题",
								type: "video", // img:图文,video:视频
								titlepic: "http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1212/10/c1/16491670_1355126816487.jpg",
								playnum: "20w",
								long: "2:47",
								infonum: {
									index: 1, //0:没有操作，1:顶,2:踩；
									dingnum: 11,
									cainum: 11,
								},
								commentnum: 10,
								sharenum: 10,
							}
						]
					},
					{
						loadText: "上拉加载更多",
						list: [{
								userpic: "../../static/demo/userpic/12.jpg",
								username: "昵称",
								isguanzhu: false,
								title: "我是标题",
								type: "img", // img:图文,video:视频
								titlepic: "../../static/demo/datapic/11.jpg",
								infonum: {
									index: 0, //0:没有操作，1:顶,2:踩；
									dingnum: 11,
									cainum: 11,
								},
								commentnum: 10,
								sharenum: 10,
							},
							{
								userpic: "../../static/demo/userpic/12.jpg",
								username: "昵称",
								isguanzhu: true,
								title: "我是标题",
								type: "video", // img:图文,video:视频
								titlepic: "../../static/demo/datapic/11.jpg",
								playnum: "20w",
								long: "2:47",
								infonum: {
									index: 1, //0:没有操作，1:顶,2:踩；
									dingnum: 11,
									cainum: 11,
								},
								commentnum: 10,
								sharenum: 10,
							},
							{
								userpic: "../../static/demo/userpic/12.jpg",
								username: "昵称",
								isguanzhu: false,
								title: "我是标题",
								type: "img", // img:图文,video:视频
								titlepic: "../../static/demo/datapic/11.jpg",
								infonum: {
									index: 0, //0:没有操作，1:顶,2:踩；
									dingnum: 11,
									cainum: 11,
								},
								commentnum: 10,
								sharenum: 10,
							},
							{
								userpic: "../../static/demo/userpic/12.jpg",
								username: "昵称",
								isguanzhu: true,
								title: "我是标题",
								type: "video", // img:图文,video:视频
								titlepic: "../../static/demo/datapic/11.jpg",
								playnum: "20w",
								long: "2:47",
								infonum: {
									index: 1, //0:没有操作，1:顶,2:踩；
									dingnum: 11,
									cainum: 11,
								},
								commentnum: 10,
								sharenum: 10,
							}
						]
					},
					{
						loadText: "上拉加载更多",
						list: []
					},
					{
						loadText: "上拉加载更多",
						list: []
					},
					{
						loadText: "上拉加载更多",
						list: []
					}
				],
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success: (res) => {
					let height = res.windowHeight - uni.upx2px(100);
					this.swiperheight = height;
				}
			});
		},
		onNavigationBarSearchInputClicked() {
			let url = '../index-search/index-search'
			let param = {
				type: 1,
				name: 'YanGo'
			}
			this.$navTo.togo(url, param)
		},
		onNavigationBarButtonTap(e) {
			switch (e.index) {
				case 1:
					this.$navTo.togo("../publish/publish", null);
					break
				case 0:
					this.$navTo.togo("../pda_scan/pda_scan", null);
					break
			}
		},
		methods: {
			guanzhu(index) {
				this.newslist[this.tabIndex].list[index].isguanzhu = true;
				uni.showToast({
					title: 'success'
				});
			},
			caidingIndex(obj) {
				/* 组件赋值 深层不能自动绑定机制 需要手动更新 */
				this.$set(this.newslist[this.tabIndex].list, obj.index, obj.item)
			},
			/* 下面两个方法是相呼应的  */
			// tabbar点击事件
			tabtap(index) {
				this.tabIndex = index;
			},
			// viewpager 滑动事件
			tabChange(event) {
				this.tabIndex = event.detail.current;
			},
			loadmore(index) {
				if (this.newslist[index].loadText != "上拉加载更多") {
					return;
				}
				this.newslist[index].loadText = "加载中...";
				setTimeout(() => {
					let itemObj = {
						userpic: "../../static/demo/userpic/12.jpg",
						username: "昵称",
						isguanzhu: true,
						title: "我是标题",
						type: "video", // img:图文,video:视频
						titlepic: "../../static/demo/datapic/11.jpg",
						playnum: "20w",
						long: "2:47",
						infonum: {
							index: 1, //0:没有操作，1:顶,2:踩；
							dingnum: 11,
							cainum: 11,
						},
						commentnum: 10,
						sharenum: 10,
					};
					this.newslist[index].list.push(itemObj);
					this.newslist[index].loadText = "上拉加载更多";
				}, 2000);
			}
		},
	}
</script>

<style>
	.uni-swiper-tab {
		border-bottom: 1upx solid #EEEEEE;
	}

	.swiper-tab-list {
		color: #969696;
		font-weight: bold;
	}

	.uni-tab-bar .active {
		color: #343434;
	}

	.active .swiper-tab-line {
		border-bottom: 6upx solid #FEDE33;
		width: 70upx;
		margin: auto;
		border-top: 6upx solid #FEDE33;
		border-radius: 20upx;
	}
</style>
