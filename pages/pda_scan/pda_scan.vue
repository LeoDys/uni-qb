<template>
	<view class="view-root">
		<block v-for="(item,index) in result" :key = "index">
			
			<view class="item-view u-f-ajc">
				{{item}}
			</view>
			
		</block>
	</view>
</template>

<script>
	var main, receiver, filter;
	var _codeQueryTag = false;
	export default {
		data() {
			return {
				result: []
			}
		},
		onShow: function() {
			this.$pdaScan.initScan((result) => {
				this.result = this.result.concat(result)
			})
		},
		onHide: function() {
			this.$pdaScan.stopScan();
		},
		methods: {
			// queryCode: function(code) {
			// 	//防重复  
			// 	if (_codeQueryTag) return false;
			// 	_codeQueryTag = true;
			// 	setTimeout(function() {
			// 		_codeQueryTag = false;
			// 	}, 150);
			// 	//到这里扫描成功了，可以调用自己的业务逻辑，code就是扫描的结果  
			// },
		}
	}
</script>

<style>
	.view-root {
		display: flex;
		flex-direction: column;
	}
	.item-view {
		width: 100%;
		height: 100upx;
		font-size: 30upx;
	}
</style>
