//检测是否为移动端(参考app.py)
if(navigator.userAgent.toLowerCase().indexOf('micromessenger') != -1){
    alert('请点击右上角，选择在浏览器中打开')
};
if(/mobile/i.test(navigator.userAgent)){}
if((innerWidth/innerHeight)<1.4){}
else{TurnIndex()};
//函数
function TurnIndex(){
    window.location.replace('kokomiserver.github.io/video0');
};
function sleep(d){
    for(var t = Date.now();Date.now() - t <= d;);
};
