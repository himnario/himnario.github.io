/*
 * Chino Montano
 * 02/12/14
 * This program handles the user interaction with the page
 */

var song = []; // stores an id for every song.
var songId = "";

// this functions loads all the songs available
function showData(loc){
	var id, list = '<ol>';
	for(var i = 0; i < indice.length; i++){ // get data from array
		id = 'song' + (i + 1);
		song.push(id);
		list += '<li id=' + id + ' onclick="loadPageSong(id)"><a href="#" >' + indice[i].title + '</li>';	
	}
	list += '</a></ol>';
	document.querySelector(loc).innerHTML = list;
}

// displays song 
function displaySong(num){
	var lyrics, songTitle = '<h1>' + indice[num - 1].title + '</h1>';
	lyrics = '<p>' + indice[num - 1].text + '</p>';
	document.querySelector('.cont').innerHTML = songTitle;
	document.querySelector('.cont').innerHTML += lyrics;
	hideMenu();
}

var count = 1; // keeps count of the clicks

function incrementCount(){
	count++; // if the next button is click the count variable increments by 1
}

function decrementCount(){
	count--; // if the back button is clicked the count variable decrements by 1
	if (count < 0) window.location.href = '../pages/indice.html' ;
}

// when the next button is clicked it redirects to it and scrolls up
function next(){
	incrementCount();
	displaySong(count);
	window.scrollTo(0, -500);
}

// when the back button is clicked it redirects to it and scrolls up
function back(){
	decrementCount();
	displaySong(count);
	window.scrollTo(0, -500);	
}

// this is an ajax funtion that loads the song page to the indice page
function loadPageSong(id){
	count = song.indexOf(id) + 1;
	var rm = document.querySelector('.wrap');
	rm.parentNode.removeChild(rm);
	var xhr = new XMLHttpRequest();
	xhr.open('GET', '../pages/song.html');
	xhr.onreadystatechange = function(){
		if (xhr.readyState === 4 && xhr.status === 200){
			document.querySelector('.load').innerHTML = xhr.responseText;
			displaySong(count);
		}
	}
	xhr.send();
}


// this function is accessed when the user clicks the bars to show the menu
function showMenu(){
	document.getElementsByTagName('body')[0].style.marginLeft = "-280px";
	document.querySelector('.wrap').style.marginLeft = "-280px";
	document.querySelector('.nav').style.marginLeft = "-280px";
	document.querySelector('.nav').id = "smaller-img";
	document.querySelector('.nav').style.backgroundImage = "url('../img/nav-x.png')";
	document.querySelector('.menu').className = "menu";
}

// when the indice button is clicked in the menu it displays all the songs in alphabetical order.
function showIndice(){
	indice.sort(function(a, b){
		var titleA = a.title.toLowerCase(), titleB = b.title.toLowerCase();
		if (titleA < titleB) return -1;
		if (titleA > titleB) return 1;
		return 0;
	});
	showData('.menuIndex');
}

// this functions hides the menu.
function hideMenu(){
	document.getElementsByTagName('body')[0].style.marginLeft = "0";
	document.querySelector('.menu').className += ' hide';
	document.querySelector('.wrap').style.marginLeft = "auto";
	document.querySelector('.wrap').style.fontSize = "1em";
	document.querySelector('.nav').id = "";
	document.querySelector('.nav').style.backgroundImage = "url('../img/nav-bars.png')";
}


var showing = 0;
document.querySelector('.nav').addEventListener('click', function(){
	showing += 1;
	if (showing % 2 !== 0) {
		showMenu();
	} else {
		hideMenu();
	}
});

