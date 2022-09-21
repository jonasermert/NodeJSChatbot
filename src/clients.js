import tmi from "tmi.js";


const options0 = {
    options: {
        debug: true
    },
    connection: {
        cluster: 'aws',
        reconnect: true
    },
    identity: {
        username: "nodechat",
        password: "oauth:ttwtxdwtytfxi83p05e8haw4c5gnpy"
    },
    channels: ["nodeappstreaming"]
}
const client0 = new tmi.client(options0);
export const MAIN_CLIENT = client0;
