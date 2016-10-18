/**
 * Created by ztf on 2016/9/13.
 */
/*$(function () {
    $('#ad-carousel').carousel();
    $('#demo-navbar .dropdown-menu a').click(function (e) {
        var href = $(this).attr('href');
        var tabId = $(this).attr('data-tab');
        if ('#' !== href) {
            e.preventDefault();
            $(document).scrollTop($(href).offset().top - 70);
            if (tabId) {
                $('#tab-list a[href=#' + tabId + ']').tab('show');
            }
        }
    });
});*/
$(document).ready(function(){
    $('#demo-navbar .dropdown-menu a').click(function(){
        var href = $(this).attr('href');
        $("#tab-list a[href='" + href + "']").tab('show');/*这句话怎么理解单双引号的拼接？*/
    });
});