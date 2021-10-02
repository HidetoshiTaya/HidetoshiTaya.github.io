function getBrowserName(){
 var aName  = navigator.appName.toUpperCase();
 var uName = navigator.userAgent.toUpperCase();
 if (uName.indexOf("MSIE") >= 0)  return "ie";
 if (uName.indexOf("OPERA") >= 0)  return "opera";
 if (uName.indexOf("FIREFOX") >= 0)  return "ff";
 else return "else";
 return "";
}


browser=getBrowserName();

function check(){
 if (browser == "ie") return '<link rel="stylesheet" href="css/base_ie.css" type="text/css">';
 else return '<link rel="stylesheet" href="css/base.css" type="text/css">';
} 

function kozaiku(){
 if (browser == "ie") return '<div style="margin-bottom:-19"></div>';
 if (browser == "opera") return '<div style="margin-bottom:-19"></div>';
  else return "";
}

function marginbottom(x){
 str='<div style="margin-bottom:' + x + '"></div>';
 if (browser == "ie") return str;
  else return "";
}

function kozaiku2(){
 if (browser == "ff") return '<div style="margin-bottom:-4"></div>';
  else return "";
}