const names = ["Youtube", "facbook", "Instagram", "Netflix", "Amazon"];

for (const name of names) {
   console.log(name);
}
/* return:- Youtube
            facbook
            Instagram
            Netflix
            Amazon
*/

const symbols = {
   yt: "Youtube",
   ig: "Instagram",
   fb: "Facebook",
   lco: "LearnCodeOnline.in",
};

for (const symbol in symbols) {
   console.log(symbol);
}
/* return:- yt
            ig
            fb
            lco
*/

for (const symbol in symbols) {
   console.log(symbols[symbol]);
}
/* return:- Youtube
            Instagram
            Facebook
            LearnCodeOnline.in
*/

for (const symbol in symbols) {
   console.log(`Key is: ${symbol}, and the symbols is: ${symbols[symbol]}`);
}
/* return:- Key is: yt, and the symbols is: Youtube
            Key is: ig, and the symbols is: Instagram
            Key is: fb, and the symbols is: Facebook
            Key is: lco, and the symbols is: LearnCodeOnline.in
*/
