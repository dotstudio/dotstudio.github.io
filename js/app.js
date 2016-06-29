(function(){
  addClassSelecet();
})();

//メニューのカレント状態切り替え
function addClassSelecet(){
  var tmp = location.href.split('/');
  var url = tmp[0]+'//'+tmp[1]+tmp[2]+'/'+tmp[3]+'/';
  //ブログページじゃなかったら
  if (url.indexOf('/blog/') == -1) url = location.origin+'/';
  var $current = $('.menu-item a[href="'+url+'"]')
  $current.attr('class', 'sub_text_selected');
}
