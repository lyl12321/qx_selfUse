/*
 *
 *
[rewrite_local]
https:\/\/www\.biguotk\.com\/api\/v4\/study\/home url script-response-body https://raw.githubusercontent.com/lyl12321/qx_selfUse/main/biguo_vip_response.js
[mitm]
hostname = www.biguotk.com
*
*
*/

var obj = JSON.parse($response.body);
obj.data.is_vip = 1;
obj.data.is_super_vip = 1;

for (let t of obj.data.tikus) {
    if (t.type === 4) {
        t.user_total = t.total;
    }
}

console.log("脚本修改了笔果的数据！")

$done({body: JSON.stringify(obj)});
