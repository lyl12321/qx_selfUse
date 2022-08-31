/*
 *
 *

[rewrite_local]
http:\/\/ios\.ipnas\.ltd\/appstore url script-response-body https://raw.githubusercontent.com/lyl12321/qx_selfUse/main/unlock_ipnas_ltd.js

[mitm] 

hostname = ios.ipnas.ltd
*
*
*/


var body = $response.body;
body = '{"code":0,"msg":"解锁码存在!!!!"}';
$done({ 
    body 
});
