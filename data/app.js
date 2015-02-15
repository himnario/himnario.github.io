/*
 * @author: Israel Montano
 * 
 */

var song = []; // stores an id for every song.
var songId = "";

// this functions loads all the songs available
function showData(){
	var id, list = '<ol>';
	for(var i = 0; i < indice.length; i++){ // get data from array
		id = 'song' + (i + 1);
		song.push(id);
		list += '<li id=' + id + ' onclick="getSong(id)"><a href="#" >' + indice[i].title + '</li>';	
	}
	list += '</a></ol>';
	document.querySelector('.index').innerHTML = list;
}

function getSong(id){
	songId = id;
	window.open("../pages/song.html");
}

// displays song 
function displaySong(num){
	var lyrics, songTitle = '<h1>' + indice[num - 1].title + '</h1>';
	lyrics = '<p>' + indice[num - 1].text + '</p>';
	document.querySelector('.cont').innerHTML = songTitle;
	document.querySelector('.cont').innerHTML += lyrics;
}

var count = 0; // keeps count of the clicks

function incrementCount(){
	count++; // if the next button is click the count variable increments by 1
}

function decrementCount(){
	count--; // if the back button is clicked the count variable decrements by 1
	if (count < 0) count = 1 ;
}

document.querySelector("#next").addEventListener('click',function(){
	incrementCount();
	displaySong(count);
});

document.querySelector("#back").addEventListener('click',function(){
	decrementCount();
	displaySong(count);
});
