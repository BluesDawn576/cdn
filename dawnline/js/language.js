var arrLang = {
  "en": {
    "Title": "Pass Status",
    "Download": "Download",
    "Video": "Video",
    "baidu": "Baidu NetDisk",
    "System": "Operating Requirements: ",
    "win": "Windows7 32bit or later",
    "adr": "Android4.1 or later and Snapdragon 635+",
    "p1": "A Dancing Line fanmade, completely free!",
    "p2": "Latest Version: v1.1.4",
    "p3": "Last Updated: July 21, 2020",
    "comments": "Comments & Feedback",
    "closed": "(The number of link downloads this month has reached the maximum limit.)"
  },
  "zh": {
    "Title": "通关情况",
    "Download": "下载",
    "Video": "视频",
    "baidu": "百度网盘",
    "System": "运行环境要求：",
    "win": "Windows7 32位及以上",
    "adr": "Android4.1或以上，建议骁龙635起步",
    "p1": "跳舞的线同人作品，内容完全免费。",
    "p2": "最新版本：v1.1.4",
    "p3": "最后更新：2020年7月21日",
    "comments": "评论与反馈",
    "closed": "（本月流量已达上限，请选择其他方式下载）"
  },
  "zhtw": {
    "Title": "通關情况",
    "Download": "下載",
    "Video": "影片",
    "baidu": "百度網盤",
    "System": "運行要求：",
    "win": "Windows7 32位元及以上",
    "adr": "Android4.1或以上，建議Snapdragon™635起步",
    "p1": "跳舞的線同人作品，內容完全免費。",
    "p2": "最新版本：v1.1.4",
    "p3": "最後更新：2020年7月21日",
    "comments": "討論",
    "closed": "（本月流量已達上限）"
  }
};

// The default language is English
var lang = "en";
// Check for localStorage support
if('localStorage' in window){
   var lang = localStorage.getItem('lang') || navigator.language.slice(0, 2);
   if (!Object.keys(arrLang).includes(lang)) lang = 'en';
}

$(document).ready(function() {
  $(".lang").each(function(index, element) {
    $(this).text(arrLang[lang][$(this).attr("key")]);
  });
});

// get/set the selected language
$(".translate").click(function() {
  var lang = $(this).attr("id");

  // update localStorage key
  if('localStorage' in window){
    localStorage.setItem('lang', lang);
  }

  $(".lang").each(function(index, element) {
    $(this).text(arrLang[lang][$(this).attr("key")]);
  });
});

var valine = new Valine();
        valine.init({
            el: '.comment',
            app_id: 'tbegP56PMplGWgfwiu4GYCvQ-gzGzoHsz',
            app_key: 'JR52USnirA2hmpKvNdIhwd23',
            placeholder: '可以在这反馈问题，评论支持markdown\nYou can make your suggestion.',
            path: window.location.pathname,
            avatar:'mm', 
            lang:lang
            // 1.1.7 新增(mm/identicon/monsterid/wavatar/retro)
            // guest_info: ['nick'] // 默认 ['nick', 'mail', 'link']
})