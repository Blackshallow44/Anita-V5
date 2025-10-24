require('dotenv').config({"noiseKey":{"private":{"type":"Buffer","data":"IChxyCxbC8KVC9QoMJWfHs3fGdzr172uy18QT0fH5X0="},"public":{"type":"Buffer","data":"JveyA2WaG7kiQLe0j1R2DMESR5/ABjzSWpTafAXUD14="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"2Hs+00om5cvqu/ARVbW1UhZ1iAEoR9LhVdtT8jcPVlM="},"public":{"type":"Buffer","data":"EfJnVIJF767M+2mxpPhXAxx3/3sjN8wjqo67SrRNO24="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"sJWneWHd9tTM6bYYoBBwCDGUp/Oy2ZJc9HdUk5Ha3Ww="},"public":{"type":"Buffer","data":"wmRuJ19Md/oliZ2POFKZJQKG0tliX6dk7Y7akqAsRDg="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"WFljQY4MqIXmwSmW34Uq7mae0mQMiNyrk9PaX5ZpmUQ="},"public":{"type":"Buffer","data":"9fvP6CyjnrxGF9TABQ4BUBfAOxdz8/V7E0O3+ZsJul0="}},"signature":{"type":"Buffer","data":"iNMXDKOaufa/V2sfUrQa4xwsad6QM3nsaiB8szwMUoEIYSt+wjo6nfg1stdiun3hCUSCIZs8gUQn4fbIAT+SgQ=="},"keyId":1},"registrationId":162,"advSecretKey":"rQV31tzxvtEZaCi+zekk1gAo4bS98AhBiqjQQBV3L04=","processedHistoryMessages":[{"key":{"remoteJid":"2348123715258@s.whatsapp.net","fromMe":true,"id":"ACA68ABAF3E5B8F3026B279B0A85D78F"},"messageTimestamp":1761339184}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"qyL1ZjdySTChflkjFxfxWw","phoneId":"b72b7bbb-e882-4abe-8690-a1291fc2320e","identityId":{"type":"Buffer","data":"pi5jXm0/GKqODwc2FnmVtUKp1a8="},"registered":true,"backupToken":{"type":"Buffer","data":"LehoOUdHGnBzibjOB6L4dKgLcTo="},"registration":{},"pairingCode":"CYRILDEV","me":{"id":"2348123715258:79@s.whatsapp.net","lid":"235433447395329:79@lid"},"account":{"details":"COqf+ggQpM7vxwYYBCAAKAA=","accountSignatureKey":"yWN5tMO5pP6PDBTtF/aL3tc+Od/ODrPa8Dx/s87p9Cw=","accountSignature":"YBIQH97K3tyKZC0S6xOYUKKsu1UPBRO1NfrNLB415fNYjjcD3hwxKcBqx/MG0KFCN6W122UWR+SFPiQDiqDFBw==","deviceSignature":"pDM4/6j8ZnAW/dyne+QEewY51luMT4fo7mEjIuSMGRT3UMbZgkrDgQmAs8Dgc1KH4BwHOqLydeu+/YaoMzWrgQ=="},"signalIdentities":[{"identifier":{"name":"2348123715258:79@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BcljebTDuaT+jwwU7Rf2i97XPjnfzg6z2vA8f7PO6fQs"}}],"platform":"android","routingInfo":{"type":"Buffer","data":"CA0IAg=="},"lastAccountSyncTimestamp":1761339180,"lastPropHash":"3gPUJk","myAppStateKeyId":"AAAAAOlx","preKeys":{"private":{"type":"Buffer","data":"8CfqoOl0umeYrFaezfOIRvdnWsYdgHm392s/sNmLXGk="},"public":{"type":"Buffer","data":"buQj3FZyXbtBQOsn9foqaozyUyx+GUbJ7C7g5v4Suxw="}},"senderKeys":{},"timestamp":"2025-10-24T20:53:06.103Z"});
const fs = require('fs');
const { color } = require('./lib/myfunc');

const toBool = (value) => value === "true";


global.owner = process.env.+2348123715258;
global.nomerowner = process.env.+2348123715258;

global.menu_image = process.env.MENU_IMAGE;

global.ANTI_TEMU = toBool(process.env.ANTI_TEMU);
global.ANTI_TAG = toBool(process.env.ANTI_TAG);

global.bot_name = process.env.BLackshallow;

global.public = toBool(process.env.PRIVATE);


global.packname = process.env.PACK_NAME;
global.author = process.env.AUTHOR;
global.ANTI_DELETE = toBool(process.env.ANTI_DELETE);
global.ANTI_CALL = toBool(process.env.ANTI_CALL);


global.unavailable = toBool(process.env.UNAVAILABLE);
global.available = toBool(process.env.AVAILABLE);
global.autoreadmessages = toBool(process.env.AUTO_READ_MESSAGES);
global.chatbot = toBool(process.env.CHATBOT);
global.autoreact = toBool(process.env.AUTO_REACT);
global.autoTyping = toBool(process.env.AUTO_TYPING);
global.autoViewStatus = toBool(process.env.AUTO_STATUS_VIEW);
global.autoStatusReact = toBool(process.env.AUTO_STATUS_REACT);
global.welcome = toBool(process.env.WELCOME);
global.anticall = toBool(process.env.ANTI_CALL);
global.autobio = toBool(process.env.AUTO_BIO);


global.prefix = process.env.PREFIX;


let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(color(`Update '${__filename}'`));
    delete require.cache[file];
    require(file);
});
