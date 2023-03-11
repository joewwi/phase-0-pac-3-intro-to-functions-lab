const expect = require("expect/lib");
const { spyOn } = require("expect/lib");
function shout(string) {
    return string.toUpperCase();
  }
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
      console.log(string.toUpperCase());
}
function logWhisper(string) {
    console.log(string.toLowerCase());
}
function sayHiToHeadphonedRoommate(string) {
    const msg = 'I can\'t hear you!';
    const msg1 = 'YES INDEED!';
    const msg2 = 'I would love to!';
    if(string === string.toLowerCase()) {
        return msg;
    }else if(string === string.toUpperCase()) {
        return msg1;
    }else{
        string === 'Let\'s have dinner together'
        return msg2;
    }
}