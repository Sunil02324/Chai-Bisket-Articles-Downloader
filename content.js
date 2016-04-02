$(document).ready(function() {
	var url = window.location.href;
	var but = url.split('/');
	var main_div, download_button, db;
	if(but[2] == 'chaibisket.com' ){
		main_div = $('.entry-header.entry-meta')[0];
	}
	
	download_button = document.createElement('div');
	download_button.setAttribute("class", "meta-author1");
	db = document.createElement('a');
	db.setAttribute("id", "download");
	db.style.float = "right";

	db.href = "#";
	db.innerHTML = "Download";
	download_button.appendChild(db);
	document.getElementsByTagName('header')[1].appendChild(download_button);
	
	db.onclick = function(e){
		window.print();
	}
});