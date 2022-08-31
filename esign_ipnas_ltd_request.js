/*
 *
 *
[rewrite_local]
https:\/\/ios\.ipnas\.ltd\/appstore url script-request-header https://raw.githubusercontent.com/lyl12321/qx_selfUse/main/unlock_ipnas_ltd.js
[mitm] 
hostname = ios.ipnas.ltd
*
*
*/

var modifiedPath = '/appstore?udid=';
let uuid = getUuid();
uuid = uuid.split("-").join("");

console.log(uuid);

let r = uuid.substring(0, 7) + "-" + uuid.substring(8, 23);

modifiedPath = modifiedPath + r;

console.log(modifiedPath);

$done({path: modifiedPath, headers : $request.headers});

function getUuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}