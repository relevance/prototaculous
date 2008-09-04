document.observe("dom:loaded", function() {
	(10).times(function() {
		new Effect.Transform([
		  { 't1' : 'font-size:5em;' },
		  { 't2' : 'font-size:10em' }
		],{ duration: 0.5, queue: 'end' }).play(); 
		new Effect.Transform([
		  { 't1' : 'font-size:10em;' },
		  { 't2' : 'font-size:5em' }
		],{ duration: 0.5, queue: 'end' }).play(); 
	})
});