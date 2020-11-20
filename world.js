window.onload = function() {
	let seacrhcountry = document.getElementById("country");
    let result = document.getElementById("result");
    let countrybtn = document.getElementById("lookcountries");
    let citybtn = document.getElementById("cities");

    citybtn.addEventListener('click',function(){
        var httpRequest = new XMLHttpRequest();
        let foundinfo = seacrhcountry.value;
        httpRequest.open('GET',"http://localhost/info2180-lab5/world.php?country=" +  foundinfo + "&context=cities");
        httpRequest.send();
        httpRequest.onreadystatechange = function(){
            let searchres = httpRequest.responseText;
            result.innerHTML = searchres;
        }
    });
	
	
    countrybtn.addEventListener('click',function(){
        var httpRequest = new XMLHttpRequest();
        let foundinfo = seacrhcountry.value;
        httpRequest.open('GET',"http://localhost/info2180-lab5/world.php?country=" +  foundinfo + "&context=none" );
        httpRequest.send();
        httpRequest.onreadystatechange = function(){
            let searchres = httpRequest.responseText;
            result.innerHTML = searchres;
        }
    })
}
