'use strict'

/*バリデート*/
if(!process.argv[2]){
    console.log('引数が足りません');
    return;
}

let path = process.argv[2].split('/');
let dir = path[0];
let num = path[1];

if(!dir || !num){
    console.log('指定がおかしい');
    return;
}

if(dir !== 'blog' && dir !== 'projects'){
    console.log('指定がおかしい2');
    return;
}

//TODO  3文字チェック

/*ここから処理 */
const execSync = require('child_process').execSync;

/*現在の番号を取得 */
let command = "ls content/"+dir;
let result = "" + execSync(command);
let tmp = result.split('\n');
let targetMD = '';
for (var i = 0, len = tmp.length; i < len; i++) {
    if (tmp[i].indexOf(num) != -1) targetMD = tmp[i]
}

/*mdファイル削除*/
command = `rm content/${dir}/${targetMD}`;
result = "" + execSync(command);
console.log(result);

/*画像フォルダ削除*/
command = `rm -rf themes/dotstudio/static/img/${dir}/${num}`;
result = "" + execSync(command);
console.log(result);