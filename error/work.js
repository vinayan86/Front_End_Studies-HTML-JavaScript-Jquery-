console.log("Find Area");
$('#register').on('submit',function (e) {
	e.preventDefault();
	
	var w=$('#w').val();
	var l=$('#l').val();

	console.group("Values Are");
	console.info(w);
	console.info(l);
	console.groupEnd();


var ar={
	"area":{"width":w,
"length":l}
};
console.table(ar);


	var area=w*l;
	console.error(area);
	debugger;
	try
	{
		if(!isNaN(area))
		{
			console.log("Area is "+area);

			$('#area').html(area);
		}
		else
		{

			throw new console.error("Difficulty to Calculate Area");


		}

	}
	catch(e)
	{
		$('#area').html("Difficulty to Calculate Area");

	}
	finally
	{
			$('#area').append("<br>Thank you For using me....!");
	}

});
$('form  input[type="text"]').on('blur',function (e) {

	if(!isNaN(this.value))
	{
			console.assert(this.value==1,"Width or  Heigh may be characters or strings...! ");
		console.warn(this.value);

	}

});