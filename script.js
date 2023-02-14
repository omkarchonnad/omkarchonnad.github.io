$(document).ready(function(){
    $(document).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }
    })
})