// var canvas = document.getElementById("canvas")
var downloadLnk = document.getElementById('download');
var closeBtn = document.getElementById('close');
// var domtoimage = require('dom-to-image');

var card_preview = new Vue({
  el: '#speaker-wrapper',
  data: {
    image_url: 'https://placehold.it/1000x600.jpg',
    question: 'Lorem ipsum dolor sit amet?'
  }
});

function preview () {
  console.log('preview');
  // var html_container = document.getElementById('getElementById'), html = html_container.innerHTML;

	var node = document.getElementById('card');

	domtoimage.toJpeg(node, { quality: 0.95 })
	    .then(function (dataUrl) {
	        var img = new Image();
	        img.src = dataUrl;
					document.getElementById('lightbox').href=dataUrl;
					document.getElementById('lightbox').appendChild(img);
					var element = document.getElementById("lightboxWrapper");
  				element.classList.remove("disabled");

	    })
	    .catch(function (error) {
	        console.error('oops, something went wrong!', error);
	    });

  // html2canvas(document.getElementById('cardDisplay'), {allowTaint: true}).then(canvas => {
	// 	    document.body.appendChild(canvas)
  // });


	// rasterizeHTML.drawHTML(html, canvas, {
	// 	executeJs: true
	// }).then(function success(renderResult) {
	// 	var dt = canvas.toDataURL()
	// 	location = dt
	// })
}

function previewClose(){
	var element = document.getElementById("lightboxWrapper");
	element.classList.add("disabled");
	document.getElementById('lightbox').innerHTML = "";
}

downloadLnk.addEventListener('click', preview, false);

closeBtn.addEventListener('click', previewClose, false);
