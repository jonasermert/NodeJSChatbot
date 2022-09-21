import {MAIN_CLIENT} from "./clients";

//Functions
import {answer} from "./functions";

//Triggers
import {BOT_PREFIX} from "./constants";




MAIN_CLIENT.connect();
MAIN_CLIENT.on("message", (channel, userstate, message, self) => {
    if (self) return;

    switch (userstate["message-type"]){
        case "action":
            //Do Something
            break;
        case "chat":
            // Wenn nachricht mit ! beginnt
            if (message.charAt(0) === BOT_PREFIX){
                answer(MAIN_CLIENT, message)
            }

            break;
        case "whisper":
            //Do Something
            break;
        default:
            //Do Something
            break;
    }

});