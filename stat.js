var max=function(data){
    return reduce(
        data, 
        function(a,b){
            return a>b.credit?a:b.credit;
            }
        , 10)
}