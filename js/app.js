'use strict'

// h2,h3までの目次divを作る
function tableOfContents($domlist){
    var $ol = document.createElement('ol');
    var $liList = [];

    for(var i = 0,len=$domlist.length; i < len; i++){
        if($domlist[i].id === '')continue;
        if($domlist[i].tagName === 'H2'){
            /*H2目次を生成*/
            //リンク生成
            var $a = document.createElement('a');
            $a.href = '#'+$domlist[i].id;
            $a.innerHTML = $domlist[i].textContent;
            //リスト生成
            var $li = document.createElement('li');
            $li.appendChild($a);
            $ol.appendChild($li);
        }else if($domlist[i].tagName === 'H3'){
            //H3がある場合
            var $_li = document.createElement('li');
            $_li.textContent = $domlist[i].textContent;
            if($domlist[i-1].tagName !== 'H3'){
                var $ul = document.createElement('ul');
                $ul.appendChild($_li);
                $ol.lastElementChild.appendChild($ul);
            }else{
                //h3が続く場合
                $ul.appendChild($_li);
            }
        }
    }
    return $ol;
}

//blogページで目次をつける
function appendToc(){
    var $elem = document.querySelectorAll('.blog-single--content > h2,h3');
    if($elem.length === 0)return;
    // console.log($elem);
    var $toc = tableOfContents($elem);
    var $firstHeader = document.querySelector('.blog-single--content h2');
    var $div = document.createElement('div');
    $div.className = 'blog-single--toc';
    $div.id = 'mokuji';
    $div.appendChild($toc);

    $firstHeader.parentNode.insertBefore($div,$firstHeader);
}

//blogページにGoogle Adsenseを挿入
function appendGoogleAds(){
    var $firstHeader = document.querySelector('.blog-single--content h2');

    if ($firstHeader !== null) {
      var $div = document.createElement('div');
      $div.className = 'ads-wide';

      // create script tag
      var $adsScr = document.createElement('script');
      $adsScr.async = true;
      $adsScr.src = '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';

      // create ins tag
      var $adsIns = document.createElement('ins');
      $adsIns.className = 'adsbygoogle';
      $adsIns.style.display = 'inline-block';
      $adsIns.style.width = '728px';
      $adsIns.style.height = '90px';
      $adsIns.dataset.adClient = 'ca-pub-5922216421588455';
      $adsIns.dataset.adSlot = '8463856924';
      $adsIns.dataset.adFormat = 'auto';

      // create script tag
      var $adsGgl = document.createElement('script');
      $adsGgl.text = '(adsbygoogle = window.adsbygoogle || []).push({});';

      $div.appendChild($adsScr);
      $div.appendChild($adsIns);
      $div.appendChild($adsGgl);

      $firstHeader.parentNode.insertBefore($div,$firstHeader);
    }
}

(function(){
    appendToc();
    appendGoogleAds();
})();
