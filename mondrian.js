//Cache color and assign the selected color as it's value
var color = $('.selected').css('background-color');

//When clicking on color switches in the controls
$('.controls').on('click', 'li', function() {
	//Deselect sibling elements
	$(this).siblings().removeClass('selected');
	//Select clicked element
	$(this).addClass('selected');
	//Cache current color
	color = $('.selected').css('background-color');
});

//When clicking on a cell in the mondrial
$('.cell').click(function() {
	//Set background color of cell to selected color
	$(this).css('background-color', color);
});