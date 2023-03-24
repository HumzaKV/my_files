function echo(str)
{
  document.write(str);
}

// start of result function
function result(tag,str)
{

  if (!str) 
  {

   if($(tag).text())
     var check = $(tag).text();

   else if($(tag).val())
    var check = $(tag).val();

  if(!check)
  {

    if($('.'+tag).text())
    {
      tag = '.'+tag;
      var result = confirm('No such tag with the name "'+tag+'" was found but a class matching the name was found. Do you want to use it?');
      if(result)
        $(tag).text();
    } //if($(tag).text())

    else if($('.'+tag).val())
    {
      tag = '.'+tag;
      var result = confirm('No such tag with the name "'+tag+'" was found but a class matching the name was found. Do you want to use it?');
      if(result)
        $(tag).val();
    } //else if($(tag).val())

    else if($('#'.tag).text())
    {
      tag = '#'+tag;
      var result = confirm('No such tag with the name "'+tag+'" was found but an id matching the name was found. Do you want to use it?');
      if(result)
        $(tag).text();
    } //else if($(tag).text())

    else if($('#'+tag).val())
    {
      tag = '#'+tag;
      var result = confirm('No such tag with the name "'+tag+' was found but an id matching the name was found. Do you want to use it?');
      if(result)
        $(tag).val();

    } //else if($(tag).val())

}

  } //  if (!str) 

  if (tag.includes('.'))
  {

   if($(tag).text())
    $(tag).text(str);

   else
    $(tag).val(str);

 } //if (tag.includes('.'))
 
  else if (tag.includes('#'))
 {
   if($(tag).text())

    $(tag).text(str);
  
   else
    $(tag).val(str);

} // else if (tag.includes('#'))

else // start of else 1
{

  if($(tag).text())
    var check = $(tag).text(str);

  else if($(tag).val())
    var check = $(tag).val(str);

  if(!check)
  {

    if($('.'+tag).text())
    {
      tag = '.'+tag;
      var result = confirm('No such tag with the name "'+tag+'" was found but a class matching the name was found. Do you want to use it?');
      if(result)
        $(tag).text(str);
  } //if($(tag).text())

  else if($('.'+tag).val())
  {
    tag = '.'+tag;
    var result = confirm('No such tag with the name "'+tag+'" was found but a class matching the name was found. Do you want to use it?');
    if(result)
      $(tag).val(str);
  } //else if($(tag).val())

  else if($('#'.tag).text())
  {
    tag = '#'+tag;
    var result = confirm('No such tag with the name "'+tag+'" was found but an id matching the name was found. Do you want to use it?');
    if(result)
      $(tag).text(str);
    } //else if($(tag).text())

    else if($('#'+tag).val())
    {
      tag = '#'+tag;
      var result = confirm('No such tag with the name "'+tag+' was found but an id matching the name was found. Do you want to use it?');
      if(result)
        $(tag).val(str);

    } //else if($(tag).val())


} //if(!check)


} //end of else 1

}
//end of result function
function print_r(arr)
{
  let array = JSON.parse(arr);
echo(array);
}

function GetQueryParam(sParam)

{
    var sPageURL = window.location.search.substring(1);

    var sURLVariables = sPageURL.split('&');

    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] == sParam)

        {
            return sParameterName[1];
        }
        else
          console.log('Query Paramaeter not found. Please recheck the spelling.');
    }
}
document.body.innerHTML = document.body.innerHTML.replace('<<', '<?php');
document.body.innerHTML = document.body.innerHTML.replace('<<<', '<?php echo');
document.body.innerHTML = document.body.innerHTML.replace('<<', '?>');
