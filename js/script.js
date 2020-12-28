window.onload=function(){
	getcorona();
}

function getcorona(){
	fetch("https://coronavirus-tracker-api.herokuapp.com/v2/locations/201")		
.then(function(resp) {return resp.json() })
.then(function(data){
	let population=data.location.country_population;
	let update = data.location.last_updated;
	let confirmCases = data.location.latest.confirmed;
	let deaths = data.location.latest.deaths;

	document.getElementById('population').innerHTML=population.toLocaleString('en');
	document.getElementById('update').innerHTML=update.substr(0,10);
	document.getElementById('cases').innerHTML=confirmCases.toLocaleString('en');
	document.getElementById('deaths').innerHTML=deaths.toLocaleString('en');
document.getElementById('percent').innerHTML=((Number(deaths)/Number(confirmCases))*100).toLocaleString('en',{minimumFractionDigits: 2, maximumFractionDigits:2}) * "%";
})
.catch(function(){
	console.log("error");
})
setTimeout(getcorona,4320000);
}