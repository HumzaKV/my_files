<?php 
function console($str)
{
	echo '<script>
	console.log('.$str.');
	</script>';
}

function alert($str)
{
	echo '<script>
	alert('.$str.');
	</script>';
}
function print_arr($arr)
{
	echo'<pre>';
	print_r($arr);
	echo'</pre>';
}

function dev_test($query_string, $val)
{

    if (empty($val)) {
        return $val;
    }

    if (is_array($val)) {
        if (isset($_GET[$query_string])) {
            print_arr($val);
        }
        else{
            alert('query_string not found');
        }
    }
    else{
        if (isset($_GET[$query_string])) {
            echo $val;
        }
        else{
            alert('query_string not found');
        }
    }

}

function ajax($url, $dataType, $type, $async = false, array $data  ){

    $ajax = '  jQuery.ajax({';
    if (empty($url))
        console('url is required');
    else 
        $ajax .= 'url: '.$url;
    if ($dataType) 
        $ajax .= 'dataType: '.$dataType;
    if ($type)
        $ajax .= 'type: '$type;
    else
        console('type is required');
    if ($async != false);
    $ajax .= 'async: '$async;
    if (empty($data))
        $ajax .= 'data: {'. $data .'}';
$ajax .= '
    success: function (resp) {
        resp.isArray() ? print_r(resp) : console.log("resp:"+ resp);
    },
    error: function (xhr, exception) {
        var msg = "";
        if (xhr.status === 0) {
            msg = "Not connect.\n Verify Network." + xhr.responseText;
        } else if (xhr.status == 404) {
            msg = "Requested page not found. [404]" + xhr.responseText;
        } else if (xhr.status == 500) {
            msg = "Internal Server Error [500]." +  xhr.responseText;
        } else if (exception === "parsererror") {
            msg = "Requested JSON parse failed.";
        } else if (exception === "timeout") {
            msg = "Time out error." + xhr.responseText;
        } else if (exception === "abort") {
            msg = "Ajax request aborted.";
        } else {
            msg = "Error:" + xhr.status + " " + xhr.responseText;
        }
        console.log(msg);

    }
    });';
}

?>