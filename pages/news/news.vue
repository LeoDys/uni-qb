<template>
	<view>
		
		<news-nav-bar :tabs="tabs" @changTab = "changTab"></news-nav-bar>
		
		<block v-for="(item,index) in list" :key = "index">
			<common-list :item = "item" :index="index"></common-list>
		</block>
	</view>
</template>

<script>
	
	import commonList from '@/components/common/common-list.vue';
	import newsNavBar from '../../components/news/news-nav-bar.vue';
	
	export default {
		components: {
			commonList,
			newsNavBar
		},
		data() {
			return {
				tabIndex: 0,
				tabs: ['关注', '话题'],
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
			}
		},
		methods: {
			changTab(index) {
				this.tabIndex =  index;
				uni.showToast({
					title: index+""
				});
			}
		}
	}
</script>

<style>
	
</style>
