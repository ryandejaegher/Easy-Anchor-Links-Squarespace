// Add Section IDs for anchor links
(function(){

	window.addEventListener('DOMContentLoaded', function() {
	var sections = document.querySelectorAll('section');
    var windowPath = window.location.pathname;
    // If page is set to homepage then set the anchor to home. i.e. #home-1
    if (windowPath === '/') {
        windowPath = 'home';
    }
	var anchorID = windowPath.replace('/','');
	
sections.forEach((section,i) => {
  section.id = `${anchorID}-${i+1}`;
})
console.log('yo')
})

})()
