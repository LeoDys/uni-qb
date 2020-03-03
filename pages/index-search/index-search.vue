<template>
	<view>
		{{opName}}
	</view>
</template>

<script>
	export default {
		data() {
			return {
				opName: "",
				searchStr: ""
			}
		},
		onNavigationBarButtonTap(e) {
			switch (e.index) {
				case 0:
					// 在C页面内 navigateBack，将返回A页面
					uni.navigateBack({
						delta: 1
					});
					break;
			}
		},
		onNavigationBarSearchInputChanged(e) {
			this.searchStr = e.text;
		},
		onNavigationBarSearchInputConfirmed(e) {
			uni.showToast({
				title:e.text
			})
		},
		methods: {},
		onLoad: function(option) { //option为object类型，会序列化上个页面传递的参数
			console.log(option.type); //打印出上个页面传递的参数。
			console.log(option.name); //打印出上个页面传递的参数。
			this.opName = option.name;
		}

	}
</script>

<style>

</style>
