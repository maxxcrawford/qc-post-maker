var canvas = document.getElementById("canvas")
var downloadLnk = document.getElementById('download')

var card_preview = new Vue({
	el: '#speaker-wrapper',
	data: {
		image_url: 'http://placehold.it/270x400.jpg',
		name: 'John Smith',
		topic: 'Speaker Topic'
	}
})

var card_preview = new Vue({
	el: '#sponsor-wrapper',
	data: {
		image_url: 'http://placehold.it/400x400.jpg',
		sponsor: 'Mozilla Dev Group',
		level: '<title>'
	}
})


function preview() {
	console.log('preview');
	var html_container = document.getElementById("card-display"),
		html = html_container.innerHTML

	rasterizeHTML.drawHTML(html, canvas, {
		executeJs: true
	}).then(function success(renderResult) {
		var dt = canvas.toDataURL()
		location = dt
	})
}

downloadLnk.addEventListener('click', preview, false)
