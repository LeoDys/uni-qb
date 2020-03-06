<template>
	<view>
		<news-nav-bar :tabs="tabs" @changTab="changTab" :tabIndex="tabIndex"></news-nav-bar>
		<view class="uni-tab-bar">
			<swiper class="swiper-box" :style="{height:swiperheight+'px'}" :current="tabIndex" @change="tabChange">
				<!-- 遍历外层list -->
				<swiper-item>
					<!-- fragment滑到底部的的时候加载更多  把list行项目列表传到fragment中 -->
					<scroll-view scroll-y class="list" @scrolltolower="loadmore(0,guanzhu)">
						<!-- 判断传进来的行项目列表list是否有数据 -->
						<block v-for="(item,index) in guanzhu.list" :key="index">
							<common-list :item="item" :index="index"></common-list>
						</block>
						<load-more :loadText="guanzhu.loadText"></load-more>
					</scroll-view>
				</swiper-item>
				<swiper-item>
					<!-- fragment滑到底部的的时候加载更多  把list行项目列表传到fragment中 -->
					<scroll-view scroll-y class="list" @scrolltolower="loadmore(1,huati)">
						<!-- 判断传进来的行项目列表list是否有数据 -->
						<block v-for="(item,index) in huati.list" :key="index">
							<common-list :item="item" :index="index"></common-list>
						</block>
						<load-more :loadText="huati.loadText"></load-more>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import commonList from '@/components/common/common-list.vue';
	import newsNavBar from '../../components/news/news-nav-bar.vue';
	import loadMore from '../../components/common/load_more.vue';

	export default {
		components: {
			commonList,
			newsNavBar,
			loadMore,
		},
		data() {
			return {
				swiperheight: 500,
				tabIndex: 0,
				tabs: ['关注', '话题'],
				guanzhu: {
					loadText: "上拉加载更多",
					list: [
						// 文字
						{
							userpic: "../../static/demo/userpic/12.jpg",
							username: "哈哈",
							sex: 0, //0 男 1 女
							age: 25,
							isguanzhu: false,
							title: "我是标题",
							titlepic: "",
							video: false,
							share: false,
							path: "深圳 龙岗",
							sharenum: 20,
							commentnum: 30,
							goodnum: 20
						},
						// 图文
						{
							userpic: "../../static/demo/userpic/12.jpg",
							username: "哈哈",
							sex: 0, //0 男 1 女
							age: 25,
							isguanzhu: false,
							title: "我是标题",
							titlepic: "../../static/demo/datapic/13.jpg",
							video: false,
							share: false,
							path: "深圳 龙岗",
							sharenum: 20,
							commentnum: 30,
							goodnum: 20
						},
						// 视频
						{
							userpic: "../../static/demo/userpic/12.jpg",
							username: "哈哈",
							sex: 0, //0 男 1 女
							age: 25,
							isguanzhu: false,
							title: "我是标题",
							titlepic: "../../static/demo/datapic/13.jpg",
							video: {
								looknum: "20w",
								long: "2:47"
							},
							share: false,
							path: "深圳 龙岗",
							sharenum: 20,
							commentnum: 30,
							goodnum: 20
						},
						// 分享
						{
							userpic: "../../static/demo/userpic/12.jpg",
							username: "哈哈",
							sex: 0, //0 男 1 女
							age: 25,
							isguanzhu: false,
							title: "我是标题",
							titlepic: "",
							video: false,
							share: {
								title: "我是分享的标题",
								titlepic: "../../static/demo/datapic/14.jpg"
							},
							path: "深圳 龙岗",
							sharenum: 20,
							commentnum: 30,
							goodnum: 20
						},
					]
				},
				huati: {
					loadText: "上拉加载更多",
					list: [
						// 文字
						{
							userpic: "../../static/demo/userpic/12.jpg",
							username: "哈哈",
							sex: 0, //0 男 1 女
							age: 25,
							isguanzhu: false,
							title: "我是标题",
							titlepic: "",
							video: false,
							share: false,
							path: "深圳 龙岗",
							sharenum: 20,
							commentnum: 30,
							goodnum: 20
						}
					]
				}
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success: (res) => {
					let height = res.windowHeight - uni.upx2px(110)
					this.swiperheight = height;
				}
			});
		},
		methods: {
			changTab(index) {
				this.tabIndex = index;
			},
			tabChange(e) {
				this.tabIndex = e.detail.current;
			},
			loadmore(loadIndex, item) {
				// console.log(loadIndex);
				// switch (loadIndex) {
				// 	case 0:
				// 		this.load(this.guanzhu,0)
				// 		break;
				// 	case 1:
				// 		this.load(this.huati,1)
				// 		break;
				// 	default:
				// 		console.log("default");
				// 		break;
				// }
				if (item.loadText != "上拉加载更多") {
					return;
				}
				item.loadText = "加载中...";
				setTimeout(() => {
					let itemObj = {
						userpic: "../../static/demo/userpic/12.jpg",
						username: "哈哈",
						sex: 0, //0 男 1 女
						age: 25,
						isguanzhu: false,
						title: "我是标题",
						titlepic: "../../static/demo/datapic/13.jpg",
						video: {
							looknum: "20w",
							long: "2:47"
						},
						share: false,
						path: "深圳 龙岗",
						sharenum: 20,
						commentnum: 30,
						goodnum: 20
					};
					item.list.push(itemObj);
					item.loadText = "上拉加载更多";
				}, 2000);

			},
			// load(obj, index) {
			// 	if (obj.loadText != "上拉加载更多") {
			// 		return;
			// 	}
			// 	obj.loadText = "加载中...";
			// 	setTimeout(() => {
			// 		let itemObj = {
			// 			userpic: "../../static/demo/userpic/12.jpg",
			// 			username: "哈哈",
			// 			sex: 0, //0 男 1 女
			// 			age: 25,
			// 			isguanzhu: false,
			// 			title: "我是标题",
			// 			titlepic: "../../static/demo/datapic/13.jpg",
			// 			video: {
			// 				looknum: "20w",
			// 				long: "2:47"
			// 			},
			// 			share: false,
			// 			path: "深圳 龙岗",
			// 			sharenum: 20,
			// 			commentnum: 30,
			// 			goodnum: 20
			// 		};
			// 		obj.list.push(itemObj);
			// 		obj.loadText = "上拉加载更多";
			// 	}, 2000);

			// 	switch (index) {
			// 		case 0:
			// 			this.guanzhu = obj;
			// 			break;
			// 		case 1:
			// 			this.huati = obj;
			// 			break;
			// 		default:
			// 			break;
			// 	}
			// }
		}
	}
</script>

<style>

</style>
