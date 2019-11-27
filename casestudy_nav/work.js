$('nav a').on('click', function(e) {                 
  e.preventDefault();                               
  var url = this.href;   

$('nav a.active').removeClass('active');       
  $(this).addClass('active'); 
             

  $('#container').remove();                          
  $('#content').load(url + " #container").hide().fadeIn('slow'); 
});