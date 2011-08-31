$(document).ready(function() {
    $('#langFr').click(function() {
        location.href = changeLanguage('fr');
    });

    $('#langEn').click(function() {
        location.href = changeLanguage('en');
    });

    var colorboxParam = { top: "10%", loop: false };
    $("a[rel='java']").colorbox(colorboxParam);
    $("a[rel='mobility']").colorbox(colorboxParam);
    $("a[rel='agile']").colorbox(colorboxParam);
    $("a[rel='microsoft']").colorbox(colorboxParam);
    $("a[rel='incubator']").colorbox(colorboxParam);
    $("a[rel='speakers']").colorbox();
    
    var params = location.search.substring(1).split(/&/);
    var sessionParam = params[0].split('=');
    $("a#"+sessionParam[1]).click();
});


function changeLanguage(lang) {
    return window.location.href.replace(/(https?:\/\/[^/]+)\/?([^/]*)(.*)/gi, '$1/' + lang + '$3');
}