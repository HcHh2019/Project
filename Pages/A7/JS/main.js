window.onload = function(){
    (function(){
        var responsiveDesign = function() {
            var clientWidth = document.documentElement.clientWidth;
            if (clientWidth < 600) {
                document.documentElement.style.fontSize
                = clientWidth / 750 * 100 + 'px';
            }
            else if (clientWidth < 1024 ) {
                document.documentElement.style.fontSize
                = clientWidth / 1536 * 100 + 'px';
            }
            else {
                document.documentElement.style.fontSize = '50px';
            }
        };
        responsiveDesign();
        //文档视图调整大小时会触发 resize 事件
        window.onresize = function() {
            responsiveDesign();
        };
    }());
}