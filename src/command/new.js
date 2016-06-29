'use strict'

/*バリデート*/
if(!process.argv[2]){
    console.log('引数が足りません');
    return;
}

let path = process.argv[2].split('/');
let dir = path[0];
let file = path[1];

if(!dir || !file){
    console.log('指定がおかしい');
    return;
}

if(dir !== 'blog' && dir !== 'projects'){
    console.log('指定がおかしい2');
    return;
}

/*ここから処理 */
const execSync = require('child_process').execSync;

/*現在の番号を取得 */
let command = "ls content/"+dir;
let result = "" + execSync(command);
let tmp = result.split('\n');
let lastfile = tmp[tmp.length-2];
let lastnum = parseInt(lastfile.split('-')[0]);
lastnum++; //インクリメント
let newnum = `00${lastnum}`;

/*ファイル作成*/
command = `hugo new ${dir}/${newnum}-${file}.md`;
result = "" + execSync(command);
console.log(result);

/* 画像フォルダ作成 */
let newImgDir = `themes/dotstudio/static/img/${dir}/${newnum}`;
command = 'mkdir ' + newImgDir;
result = "" + execSync(command);
console.log(result);

/* 画像作成 */
command = `touch ${newImgDir}/_eyecatch.png`;
result = "" + execSync(command);
console.log(result);

command = `touch ${newImgDir}/_thumbnail.png`;
result = "" + execSync(command);
console.log(result);