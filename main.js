var slider = {
	slides:['fruits/fr1.jpg','fruits/fr2.jpg','fruits/fr3.jpg','fruits/fr4.jpg','fruits/fr5.jpg','fruits/fr6.jpg'],
	frame: 0, 
	set: function(image) {
		document.getElementById("scr").style.backgroundImage = "url("+image+")";
	},
	init: function() {
		this.set(this.slides[this.frame]);
	},
	left: function() {
		this.frame--;
		if(this.frame < 0) {
			this.frame = this.slides.length-1;
			document.getElementsByClassName("aphorism")[0].style.zIndex = -1;
		} else document.getElementsByClassName("aphorism")[this.frame+1].style.zIndex = -1;
		this.set(this.slides[this.frame]);
		document.getElementsByName("radio1")[this.frame].checked = true;
		document.getElementsByClassName("aphorism")[this.frame].style.zIndex = 0;
	},
	right: function() { 
		this.frame++;
		if(this.frame == this.slides.length) {
			this.frame = 0;
			document.getElementsByClassName("aphorism")[this.slides.length-1].style.zIndex = -1;
		} else {document.getElementsByClassName("aphorism")[this.frame-1].style.zIndex = -1;}
		this.set(this.slides[this.frame]);	
		document.getElementsByName("radio1")[this.frame].checked = true;
		document.getElementsByClassName("aphorism")[this.frame].style.zIndex = 0;
	},
	choice: function(slide_number) {
		document.getElementsByClassName("aphorism")[this.frame].style.zIndex = -1;
		this.frame = slide_number;
		this.set(this.slides[this.frame]);
		document.getElementsByClassName("aphorism")[this.frame].style.zIndex = 0;
	}
};

window.onload = function() { 

	var scrollUp = document.getElementById('scrollUp');

	scrollUp.onmouseover = function() {
		scrollUp.style.opacity= 1;
		scrollUp.style.color= '#606066';
	};

	scrollUp.onmouseout = function() { 
		scrollUp.style.opacity = 0.6;
		scrollUp.style.color= '#d1d3d1';
	};

	scrollUp.onclick = function() { 
		window.scrollTo(0,0);
	};

	window.onscroll = function () {
		if ( window.pageYOffset > 0 ) {
			scrollUp.style.display = 'block';
		} else {
			scrollUp.style.display = 'none';
		}
	};
	
	slider.init();
	setInterval(function() {
		slider.right();
	}, 1000 * 60 * 1);
};