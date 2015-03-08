// to capture if function has run once
var slide1init, slide2init, slide3init, slide4init;

// slideshow
function slideshow(){
	
	// initialize
	slide1();
	// slide2();
	// slide3();
	// slide4();

	// cycle
	$('.slider').cycle({
		fx: 'scrollHorz',
		speed: 500,
		timeout: 0,
		next: '.next',
		prev: '.prev',
		pager: '.pager'
	});
	
	// arrow behavior
	$('.arrow').click(function(){
		var activeSlide = $('.activeSlide').index();
		if (activeSlide<=0) { $('.prev').hide(); } // slide 1
		else if (activeSlide==1) { $('.prev').show(); slide2(); } //slide 2
		else if (activeSlide==2) { $('.next').show(); slide3(); } //slide 3
		else if (activeSlide>=3) { $('.next').hide(); slide4(); } // slide 4
	});
}

// slide 1
function slide1(){

	if(!slide1init){
	
		// update status
		slide1init = true;

		// initialize
		setTimeout(function(){slide1Tween2();},500);
		setTimeout(function(){slide1Tween3();},1500);
		setTimeout(function(){slide1Tween4();},2000);
		setTimeout(function(){slide1Tween1();},2800);
		
		// obama
		function slide1Tween1(){
			$('.slide-1 .tween-1 .frame-2').addClass('show');
			setTimeout(function(){
				$('.slide-1 .tween-1 .frame-2').removeClass('show');
				setTimeout(function(){
					slide1Tween1();
				},6000);
			},200);
		}
		
		// wi-fi
		function slide1Tween2(){
			$('.slide-1 .tween-2 .frame-2').addClass('show');
			setTimeout(function(){
				$('.slide-1 .tween-2 .frame-3').addClass('show');
				setTimeout(function(){
					$('.slide-1 .tween-2 .frame-3').removeClass('show');
					setTimeout(function(){
						$('.slide-1 .tween-2 .frame-2').removeClass('show');
						setTimeout(function(){
							slide1Tween2();
						},550);
					},500);
				},2500);
			},500);
		}
		
		// globe
		function slide1Tween3(){
			$('.slide-1 .tween-3 .frame-1').addClass('show');
			setTimeout(function(){
				$('.slide-1 .tween-3 .frame-2').addClass('show');
				setTimeout(function(){
					$('.slide-1 .tween-3 .frame-3').addClass('show');
				},250);
			},250);
		}
		
		// school bell
		function slide1Tween4(){
			$('.slide-1 .tween-4 .frame-1').removeClass('rotate-right').addClass('rotate-left');
			setTimeout(function(){
				$('.slide-1 .tween-4 .frame-1').addClass('rotate-right');
				setTimeout(function(){
					slide1Tween4();
				},200);
			},200);
		}
	
	}
	
}

// slide 2
function slide2(){

	if(!slide2init){
	
		// update status
		slide2init = true;

		// initialize
		setTimeout(function(){slide2Tween1();},2000);
		setTimeout(function(){slide2Tween2();},1000);
		setTimeout(function(){slide2Tween3();},1300);
		
		// apple
		function slide2Tween1(){
			$('.slide-2 .tween-1 .frame-1').addClass('rotate');
			setTimeout(function(){
				$('.slide-2 .tween-1 .frame-1').removeClass('rotate');
				setTimeout(function(){
					$('.slide-2 .tween-1 .frame-1').addClass('rotate');
					setTimeout(function(){
						$('.slide-2 .tween-1 .frame-1').removeClass('rotate');
						setTimeout(function(){
							slide2Tween1();
						},6000);
					},100);
				},100);
			},100);
		}
		
		// money
		function slide2Tween2(){
			$('.slide-2 .tween-2 .frame-1').addClass('rotate');
			setTimeout(function(){
				$('.slide-2 .tween-2 .frame-2').addClass('rotate');
				setTimeout(function(){
					$('.slide-2 .tween-2 .frame-3').addClass('rotate');
					setTimeout(function(){
						$('.slide-2 .tween-2 .frame-4').addClass('rotate');
					},75);
				},75);
			},75);
		}
		
		// for
		function slide2Tween3(){
			$('.slide-2 .tween-3').addClass('push');
		}
		
	}
	
}

// slide 3
function slide3(){

	if(!slide3init){
	
		// update status
		slide3init = true;

		// initialize
		setTimeout(function(){slide3Tween1();},2200);
		slide3Tween2();
		
		// students
		function slide3Tween1(){
			$('.slide-3 .tween-1 .frame-1').removeClass('show').addClass('animate');
			$('.slide-3 .tween-1 .frame-2').addClass('show');
			setTimeout(function(){
				$('.slide-3 .tween-1 .frame-2').removeClass('show').addClass('animate');
				$('.slide-3 .tween-1 .frame-3').addClass('show');
				setTimeout(function(){
					$('.slide-3 .tween-1 .frame-3').removeClass('show').addClass('animate');
					$('.slide-3 .tween-1 .frame-2').addClass('show');
					setTimeout(function(){
						$('.slide-3 .tween-1 .frame-3').addClass('show');
						$('.slide-3 .tween-1 .frame-2').removeClass('show').addClass('animate');
						setTimeout(function(){
							$('.slide-3 .tween-1 .frame-3').removeClass('show').addClass('animate');
							$('.slide-3 .tween-1 .frame-2').addClass('show');
							setTimeout(function(){
								$('.slide-3 .tween-1 .frame-2,.slide-3 .tween-1 .frame-3').removeClass('show').addClass('animate');
								$('.slide-3 .tween-1 .frame-1').addClass('show');
								setTimeout(function(){
									slide3Tween1();
								},3000);
							},500);
						},150);
					},150);
				},150);
			},150);
		}
		
		// wi-fi
		function slide3Tween2(){
			setTimeout(function(){
				$('.slide-3 .tween-2 .frame-2').addClass('show');
				setTimeout(function(){
					$('.slide-3 .tween-2 .frame-3').addClass('show');
					setTimeout(function(){
						$('.slide-3 .tween-2 .frame-3').removeClass('show');
						setTimeout(function(){
							$('.slide-3 .tween-2 .frame-2').removeClass('show');
							setTimeout(function(){
								slide3Tween2();
							},50);
						},500);
					},2500);
				},500);
			},500);
		}
		
	}

}

// slide 4
function slide4(){

	if(!slide4init){
	
		// update status
		slide4init = true;

		// initialize
		setTimeout(function(){slide4Tween1();},3000);
		connectOptions();
		
		// lightbulb
		function slide4Tween1(){
			$('.slide-4 .tween-1 .frame-1').addClass('show');
			setTimeout(function(){
				$('.slide-4 .tween-1 .frame-1').removeClass('show');
			},5000);
		}
	
		// interactive display
		function connectOptions(){
		
			// set up checkboxes
			$('.connect-options li').prepend('<span class="checkbox"></span>');
			
			// set active slide (if not already assigned)
			if(!$('.connect-options li.active').length){
				$('.connect-details .item:first-child').addClass('active');
				$('.connect-options li:first-child').addClass('active').siblings().removeClass('active').addClass('inactive');
				$('.connect-options li:first-child .checkbox').html('<img src="img/slide-4/check.png" alt="" />');
			}
			
			// toggle details & checkboxes
			$('.connect-options li').click(function(){
				var itemNumber = $(this).index();
				$('.item').eq(itemNumber).addClass('active').siblings().removeClass('active').addClass('inactive');
				$(this).addClass('active').siblings().removeClass('active').addClass('inactive');
				$('.checkbox',this).html('<img src="img/slide-4/check.png" alt="" />');
				$('li:not(.active) .checkbox').empty();
			});
			
		}
		
	}

}

function cta(){
	$('.cta a').click(function(){
		$('html:not(:animated),body:not(:animated)').animate({ scrollTop: 767 }, 500 );
		setTimeout(function(){
			$('.edu .edu-footer').addClass('active');
		},400);
		return false;
	});
}

// form functions

/*
	$('input.red-button').click(function(e){
		e.preventDefault();
	})
*/

	// validate
	function validateForm(){
		var form = $('#contact');
		form.validate({
			rules: {
				name: "required",
				email: {
					required: true,
					email: true
				}
			},
			messages: {
				name: "required",
				email: {
					required: "required",
					email: "please check"
				} 
			},
			submitHandler: function(){	
				if(form.valid()){
					_gaq.push(['_trackEvent', 'Frontier Education Footer Form', 'Submission', 'Form Submission']);
					submitAjax();
				}
			}
		});
	}
	
	// submit
	function submitAjax(){
		var name = $("input[name='name']").val();
		var phone = $("input[name='phone']").val();
		var company = $("input[name='company']").val();
		var email = $("input[name='email']").val();
		var title = $("input[name='title']").val();
		var zip_code = $("input[name='zip_code']").val();
		var valid = "valid";
	
		var server = $.ajax({
			url: 'php/submit.php',
			type: "POST",
			data: {name: name, phone: phone, company: company, email: email, title: title, zip_code: zip_code, valid: valid}	
		});
		
		$('.cta, .step-1').fadeOut(100);
		$('.edu-footer').removeClass('active');
		
		server.done(function(data){
			$('.step-2').fadeIn(100);
		});
		
		server.fail(function(jqXHR, textStatus){
			$('#edu-footer').html('Something went wrong, please refresh your page and try again.');
		});
	}
	
	// track downloads
	$('a.download').click(function(){
		_gaq.push(['_trackEvent', 'Frontier Education Footer Form', 'Download', 'Thanks Download Button']);
	})

$(document).ready(function(){
	slideshow();
	cta();
	validateForm();
	$('input').placeholder();
});

$(window).load(function(){
	$('.fade-in').fadeIn(100);
})