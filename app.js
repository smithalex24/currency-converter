 var currency_converter_endpoint = "http://data.fixer.io/api/latest?access_key=b3ffdfa631c71a95b30028637171c2a7";


$.get(currency_converter_endpoint, (response)=>{
      console.log(response);
    $("#eur").click(function() {
    	console.log("clicked");
    	let convert = $("#converted").val() * response.rates.EUR;
    	console.log(convert);
	});
	 $("#gbp").click(function() {
    	console.log("clicked");
    	let convert = $("#converted").val() * response.rates.GBP;
    	console.log(convert);
    });
	 $("#cny").click(function() {
    	console.log("clicked");
    	let convert = $("#converted").val() * response.rates.CNY;
    	console.log(convert);
    });
	 $("#jpy").click(function() {
    	console.log("clicked");
    	let convert = $("#converted").val() * response.rates.JPY;
    	console.log(convert);


});
});



