const router = (function (){
    let navigo;

    function init(){
        navigo = new Navigo(null, false);

        navigo.on ('page', function () {
            
        });
    }

    return {
        init
    }
}());