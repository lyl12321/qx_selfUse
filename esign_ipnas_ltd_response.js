/*
 *
 *
[rewrite_local]
https:\/\/ios\.ipnas\.ltd\/appstore url script-response-body https://raw.githubusercontent.com/lyl12321/qx_selfUse/main/unlock_ipnas_ltd.js
[mitm] 
hostname = ios.ipnas.ltd
*
*
*/

var obj = JSON.parse($response.body);
obj.apps.forEach(e => {
  e.lock = "0"
});
$done({body: JSON.stringify(obj)});