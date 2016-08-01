function Loading () {
		marginLeft();
		var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;

		if((!is_chrome)&(window.location.href == "https://www.efbet.com/static/landing/landing_retro.html"))
		{
		   $('h1').css('font-size', '1.7em');
		   $('h2').css('font-size', '1.7em');
		   $('h3').css('font-size', '1.7em');
		}  
		var browserFirefox = navigator.userAgent.search("Firefox");
		
		if ($('body').innerWidth() < 1366) {
				
				if (browserFirefox > -1) {
					document.body.style.MozTransform = "scale(0.75)";
					document.body.style.MozTransformOrigin = "0 0";
					document.body.style.MozTransformOrigin = "0 0";

				}
				else {
					
					document.body.style.zoom="75%";
					if(/chrom(e|ium)/.test(navigator.userAgent.toLowerCase())){
 						$('iframe').addClass('iframe-position-chrome');
					}
					// document.body.style.margin = "auto";
					
				}
		}
		// else {
		// 	$('#background').css('left', '0px');
		// }

		if ($('.my-slider ul li').length < 2) {
 			$('#sport div a').hide();
 			$('#sport div a').hide();
 		};

		function isIE() { return ((navigator.appName == 'Microsoft Internet Explorer') 
			|| ((navigator.appName == 'Netscape') 
				&& (new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})").exec(navigator.userAgent) != null))); }
		if (isIE() && window.location.href == 'https://www.efbet.com/static/landing/landing_retro.html') {
			$('h1').css('font-size', '1.4em');
			$('h2').css('font-size', '1.4em');
			$('h3').css('font-size', '1.4em');
			$('body').css('font-style', 'Arial,sans-serif');
		}

	};

	function marginLeft () {
		var innerW = $('body').innerWidth();
		var leftHeader = document.getElementById("header").style.left;
		var leftContent = document.getElementById("content").style.left;
		var popUp = document.getElementById("text").style.left;
		var bg = document.getElementById("background").style.left;
		
 	    //Bulgarian
		var linksArray = ["<iframe src=\"https://maintenance.efbet.com/banner/CupBanners/HtmlBanners/BannerBGNew.html\" width=\"1073\" height=\"320\" scrolling=\"no\" frameborder=\"0\" onclick=\"window.open('https://www.efbet.com/static/landing/Stoichkov.html');\"></iframe>",
		"<iframe src=\"https://cdn1.efbet.com/efbet/LandingPage/cashout-landing.jpg\" width=\"1073\" scrolling=\"no\" height=\"320\" frameborder=\"0\"></iframe><div style=\"top:0;left:0;width:100%;height:100%;position:absolute;\" onclick=\"location.href = 'https://www.efbet.com/BG/541/help#action=pr_96&page=pr_96&psection=help';\"></div>",
"<iframe src=\"https://cdn1.efbet.com/efbet/images/telefon_1073x320.jpg\" width=\"1073\" scrolling=\"no\" height=\"320\" frameborder=\"0\"></iframe><div style=\"top:0;left:0;width:100%;height:100%;position:absolute;\" onclick=\"location.href = 'https://www.efbet.com/BG/541/homepage#action=homepage';\"></div>",
"<iframe src=\"https://cdn1.efbet.com/efbet/images/banner_site21.jpg\" width=\"1073\" scrolling=\"no\" height=\"320\" frameborder=\"0\"></iframe><div style=\"top:0;left:0;width:100%;height:100%;position:absolute;\" onclick=\"location.href = 'https://www.efbet.com/BG/541/help#action=pr_9&page=pr_9';\"></div>",
"<iframe src=\"https://cdn1.efbet.com/efbet/images/nachalen-1073x320 landing page big.jpg\" width=\"1073\" scrolling=\"no\" height=\"320\" frameborder=\"0\"></iframe><div style=\"top:0;left:0;width:100%;height:100%;position:absolute;\" onclick=\"location.href = 'https://www.efbet.com/BG/541/help#action=pr_185&page=pr_185&psection=help';\"></div>"];
		$("#sport").html(linksArray[Math.floor((Math.random() * linksArray.length) + 1) - 1]);

		//English
		var linksArrayEn = ["<iframe src=\"https://maintenance.efbet.com/banner/CupBanners/HtmlBanners/BannerNewUK.html\" width=\"1073\" height=\"320\" scrolling=\"no\" frameborder=\"0\"></iframe>"];
		$('.pic3-en').css('background-image', "url(" + linksArrayEn[Math.floor((Math.random() * linksArrayEn.length) + 1) - 1] +")");

		//Turkish	
			var linksArrayTr = ["<iframe src=\"https://maintenance.efbet.com/banner/CupBanners/HtmlBanners/BannerNewTR.html\" width=\"1073\" height=\"320\" scrolling=\"no\" frameborder=\"0\"></iframe>"];
		$("#sportTr").html(linksArrayTr[Math.floor((Math.random() * linksArrayTr.length) + 1) - 1]);


		//Bulgaria Retro	
		var linksArrayTr = ["https://media.giphy.com/media/xT9DPEYq4BWiqJgm8E/giphy.gif"];						
		$('.pic3-retro').css('background-image', "url(" + linksArrayTr[Math.floor((Math.random() * linksArrayTr.length) + 1) - 1] +")");

		if (innerW < 1366) {
			leftHeader = (innerW - 1000)/2 + "px";
			leftContent = (innerW - 1000)/2 + "px";
			popUp = (innerW - 1000)/2 + "px";
			bg = ((innerW - 1550)/2) + "px"
			if(/chrom(e|ium)/.test(navigator.userAgent.toLowerCase())){
 						$('iframe').addClass('iframe-position-chrome');
					}
		}
		else {
			leftHeader = (innerW - 1366)/2 + "px";
			leftContent = (innerW - 1366)/2 + "px";
			popUp = (innerW - 1366)/2 + "px";
			bg = ((innerW - 1916)/2) + "px";
		}

		document.getElementById("header").style.left = leftHeader;
		document.getElementById("content").style.left = leftContent;
		document.getElementById("text").style.left = popUp;
		document.getElementById("background").style.left = bg;
		document.body.style.overflowX= "hidden";
	}

	function Hide() {
		var popupEl = document.getElementById('popup');
		popupEl.style.display = 'none';
	}


 jQuery(document).ready(function($) {
			$('.my-slider').unslider({
				autoplay: true,
				arrows: true,
				animation: 'fade',
				nav: false,
				speed: 1000,
				delay: 10000
			});
			$('.my-slider1').unslider({
				autoplay: true,
				arrows: true,
				animation: 'vertical',
				nav: false,
				speed: 1000,
				delay: 5000
			});
			$('.unslider-nav').hide();
			$('.prev').text('<').css({
				fontSize: '32px',
				fontWeight: 'bold',
				color: '#ffd400'
			});
			$('.next').text('>').css({
				fontSize: '32px',
				fontWeight: 'bold',
				color: '#ffd400'
			});
		});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  	ga('create', 'UA-44227647-1', 'auto');
  	ga('send', 'pageview');