import { root_url } from "./global";

export  function submitPhoneNumber(obj){
    fetch(`${root_url}sale/send`, {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    })
    .then(function(res){
        return res.json()
    })
    .then(function(json){
        console.log(json);
    })
}