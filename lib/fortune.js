
var fortuneCookies = [
    "Conquer your fears",
    "River needs Spring",
    "Do not fear what you don't know",
    "You will have a pleasant surprise",
    "Whenever possible, keep it simple"
];

exports.getFortune = function()
{
    var index = Math.floor(Math.random() * fortuneCookies.length);
    return fortuneCookies[index];
}