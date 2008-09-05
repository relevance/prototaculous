$(function() {
	// could use timer plugin
  setInterval(function() {     
	  $('#messages').load('/jquery/chat');
  }, 5000);
});