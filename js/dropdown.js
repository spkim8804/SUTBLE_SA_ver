let subToggle=true;
$(".features_menu").click(()=>{
    if(subToggle){
        $(".features_menu_sub").slideDown(200);
    }else{
        $(".features_menu_sub").slideUp(100);
    }
    subToggle=!subToggle;
});