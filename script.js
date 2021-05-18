<!-- Add Section IDs for anchor links -->
(function(){
	window.addEventListener('DOMContentLoaded', function() {
	var sections = document.querySelectorAll('section');
    var windowPath = window.location.pathname;
    if (windowPath === '/') {
        windowPath = 'home';
    }
	var anchorID = windowPath.replace('/','');
	
sections.forEach((section,i) => {
  section.id = `${anchorID}-${i+1}`;
})
})

})()
