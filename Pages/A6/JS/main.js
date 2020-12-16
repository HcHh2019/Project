window.onload = function(){
    var rellac = new Rellax('.rellax',{
        //center: true
        callback: function(position) {
            // 回调每个头寸变化
            console.log(position);
        }
    });
}