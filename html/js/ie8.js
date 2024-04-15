jQuery(document).ready(function($){
    $(".input-chk").on("change", function () {
        if($(this).is(":checked"))
            $(this).siblings(".iUncheck").addClass("active");
        else
            $(this).siblings(".iUncheck").removeClass("active");
    });

    document.createElement('header');
    document.createElement('nav');
    document.createElement('section');
    document.createElement('article');
    document.createElement('aside');
    document.createElement('footer');
});
