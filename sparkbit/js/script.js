$(document).ready(function(){
	
	$('.qbtn').on('click', function(){
		var rng =Math.floor(Math.random()*quotes.length);
		$('.quote').html('<h1>' + quotes[rng][0] + '</h1>');
		
	});
	var quotes= [
	["There are no secrets to success. It is the result of preparation, hard work, and learning from failure"],
	["I love those who can smile in trouble, who can gather strength from distress, and grow brave by reflection. 'Tis the business of little minds to shrink, but they whose heart is firm, and whose conscience approves their conduct, will pursue their principles unto death"],
	["Do not risk your business and your future, work with people who can best explain each of your needs"]
	]; 


	})
