(function(){
  addClassSelecet();
  spHack();
})();

//メニューのカレント状態切り替え
function addClassSelecet(){
  var tmp = location.href.split('/');
  var url = tmp[0]+'//'+tmp[1]+tmp[2]+'/'+tmp[3]+'/';
  var $current;

  //プロジェクトページ
  if (url.indexOf('/projects/') != -1 || url == location.href+'/' && url.indexOf('/404.html/') == -1){
    $current = $('a[data-type="projects"]');
    $current.attr('class', 'sub_text_selected');
    //sp
    $current = $('p[data-type="sp-nuv-main"] a');
    $current.text('PROJECTS');
    $current.attr('href', '/');
    $current = $('p[data-type="sp-nuv-sub"] a');
    $current.text('BLOG');
    $current.attr('href', '/blog/');
  }
  //ブログページ
  else if(url.indexOf('/blog/') != -1){
    $current = $('a[data-type="blog"]');
    $current.attr('class', 'sub_text_selected');
    //sp
    $current = $('p[data-type="sp-nuv-main"] a');
    $current.text('BLOG');
    $current.attr('href', '/blog/');
    $current = $('p[data-type="sp-nuv-sub"] a');
    $current.text('PROJECTS');
    $current.attr('href', '/');
  }
}

//ユーザーエージェントチェック
function _uaCheck(){
  var ua = 'pc';
  if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
    ua = 'sp';
  }
  return ua;
}

//だーてぃーはっく
function spHack(){
  var ua = _uaCheck();
  if(ua !== 'sp')return;

  $('.projectsContent-title').css({'width':'100%','font-size':'20px'});
  $('.row3').css('width','100%');
  $('.projectsContent-txt').css({'width':'100%','font-size':'14px'});
  $('.projectsContent-headImg').css('width','100%');
}
