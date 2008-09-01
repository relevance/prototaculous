$(function() {
  // note that there must be a backgroundColor set to start the morph.
  $("#morph").css({backgroundColor: "#ffffff"})
				     .animate({
						    padding: '3em',
						    border: '5px solid red',
						    margin: '3em',
						    backgroundColor: '#ffdddd'
  					 });
});