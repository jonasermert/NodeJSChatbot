import {BRODCAST_CHANNEL, CHAT_TRIGGER} from "./constants";


export function SEND_MESSAGE(client, send_msg){
    client.say(`${BRODCAST_CHANNEL}`, send_msg)
}
//dsa

export function answer(client, message){
    let msg;
    CHAT_TRIGGER.forEach(element => {
        if (element.trigger === message.toLowerCase()){
            msg = element.answer
            SEND_MESSAGE(client, msg);
        }
    })
}