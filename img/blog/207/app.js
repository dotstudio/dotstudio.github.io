'use strict';

const url = `https://script.googleusercontent.com/macros/echo?user_content_key=BR_0LuPcdwJGGmPEDd-HMoHv1tqImpIOWD0S1hAtxftfy2kWQieRQTH2QaspNy7ro2vRaWaz-_6d1MT5-yY1TW_Ppcim1pKZm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNXu_iNdaPUcWOO456lfIgzRf8RCpEf847UzBO4P95a0JXNQzblr5WCZPMDfhjECoqOIp7sEUsJ2&
lib=MqQQYj2lvm1Zbwq95kUM0TmW2HWMm7k8g`;

const eventGet = async (url) => {
    try{
        const res = await axios.get(url);
        const items = res.data;
        return items;
    }catch(e){
        return e;
    }
}

const main = async () => {
    const itemsList = await eventGet(url);
    console.log(itemsList);

    for(let i = 0, len = itemsList.length; i<len; i++){
        const event = {};
        // event.url = await eventGet(itemsList[i].url);
        // event.photo_album = await eventGet(itemsList[i].photo_album);
        event.toggeter = await eventGet(itemsList[i].toggeter);
        console.log(event);
    }
}
main();