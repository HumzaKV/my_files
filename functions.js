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
let base_url = window.location.origin,//https://example.com 
    host = window.location.host,//example.com
    pathArray = window.location.pathname.split( '/' ),//returns object ['', 'test', ''] 
    urlParams = new URLSearchParams(window.location.search),
    hasParam = urlParams.has('post'), // true
    getValue = urlParams.get('action'), // "edit"
    getAll = urlParams.getAll('action'), // ["edit"]
    getParamString = urlParams.toString(), // "?post=1234&action=edit"
console.log(urlParams.append('active', '1')); // "?
}
document.body.innerHTML = document.body.innerHTML.replace('<<', '<?php');
document.body.innerHTML = document.body.innerHTML.replace('<<<', '<?php echo');
document.body.innerHTML = document.body.innerHTML.replace('>>', '?>');
