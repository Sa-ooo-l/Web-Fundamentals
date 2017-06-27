
$(document).ready(function(){
	alert("jQuery is working!");



	$("#hide").click(function(){
	$("#image").hide();
	});


	$("#show").click(function(){
	$("#image").show();
	});
	$("#toggle").click(function(){
	$("#image").toggle("explode" );
	});

 
});