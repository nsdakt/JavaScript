// メイン部分
let alertString;
alertString = addString("WebCamp");

// 作成した関数を呼び出す
alert(alertString);

// 作成した関数
function addString(strA){
  let addStr = "Hello " + strA;
  return addStr;
}

// 決められた回数内で繰り返し処理を行いたい場合に使う
for ( 初期値; 条件式; 増減値 ){
  繰り返し処理
}


// 条件式のtrue／falseに関わらず、最初の1回だけは必ず処理
do{
  最低1回は行われる処理
}while(条件式);


// 条件1を満たすときは処理1、条件2を満たすときは処理2、どちらも満たさないときは処理3
if(条件1){
  処理1
} else if(条件2){
  処理2
} else{
  処理3
}


// // 引数の条件がtrueの間、波括弧内部の処理が繰り返される。
while(条件){
  処理
 }


// 整数を代入する
// let int1 = 1;

// 負数を代入する
// let int2 = -10;

// 小数点を代入する
// let float1 = 3.14;

// 文字列を代入する
// let str1 = 'JavaScriptを学ぼう'

// 足し算
// alert(4 + 3);

// 引き算
// alert(8 - 5);

// 掛け算
// alert(2 * 6);

// 割り算
// alert(10 / 2);

