/*********************************************
@Zoo
Soul解除送礼私聊限制
日期:2022.04.03
[rewrite_local]
^https:\/\/api-chat\.soulapp\.cn\/chat\/limitInfo url script-response-body https://raw.githubusercontent.com/Crazy-Z7/Scrip/main/Soul.js
hostname = api-chat.soulapp.cn
*********************************************/







































































































var obj = JSON.parse($response.body);obj.data.limit = false;$done({body : JSON.stringify(obj)});