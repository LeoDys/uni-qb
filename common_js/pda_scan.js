// AUTOID9扫码广播
const SCAN_ACTION_AUTOID9 = "inossem.scanner"
// AUTOID9扫码内容的key
const SCAN_EXTRA_VALUE_AUTOID9 = "scannerdata"

var main, receiver, filter;

function initScan(fn) {
	/* #ifdef APP-PLUS */
	//获取activity
	main = plus.android.runtimeMainActivity();
	/* var context = plus.android.importClass('android.content.Context'); */
	var IntentFilter = plus.android.importClass('android.content.IntentFilter');
	/* var Intent = plus.android.importClass('android.content.Intent'); */
	filter = new IntentFilter();
	filter.addAction(SCAN_ACTION_AUTOID9);
	receiver = plus.android.implements('io.dcloud.feature.internal.reflect.BroadcastReceiver', {
		onReceive: function(context, intent) {
			plus.android.importClass(intent);
			fn(intent.getStringExtra(SCAN_EXTRA_VALUE_AUTOID9));
		}
	})
	
	// 启动广播监听
	if (main)
		main.registerReceiver(receiver, filter);
	
	/* #endif */
}
/**
 * 解绑广播
 */
function stopScan() {
	/* #ifdef APP-PLUS */
	if (main)
		main.unregisterReceiver(receiver);
	/* #endif */
}

const pdaScan = {
	initScan: initScan,
	stopScan: stopScan
}

module.exports = pdaScan

