const togo = function(url, data) {
	url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)

	console.log(url)

	uni.navigateTo({
		url,
		animationType: 'pop-in',
		animationDuration: 300
	})
}

const toback = function(url, data) {
	url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)

	uni.navigateBack({
		url,
		animationType: 'pop-out',
		animationDuration:300
	})
}

export function param(data) {
	let url = ''
	for (var k in data) {
		let value = data[k] !== undefined ? data[k] : ''
		url += '&' + k + '=' + encodeURIComponent(value)
	}
	return url ? url.substring(1) : ''
}
export {
	togo,
	toback
};
