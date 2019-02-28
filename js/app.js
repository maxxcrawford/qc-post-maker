var canvas = document.getElementById("canvas")
var downloadLnk = document.getElementById('download')

var card_preview = new Vue({
	el: '#speaker-wrapper',
	data: {
		image_url: 'https://placehold.it/1000x600.jpg',
		question: 'Lorem ipsum dolor sit amet?'
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
