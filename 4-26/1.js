
    function $(canshu){
        var aa = canshu.substr(0,1);
        if(aa == "#"){
            var aa = document.querySelector(canshu);
        }else{
            var aa = document.querySelectorAll(canshu); 
        }
        return aa;
    }
