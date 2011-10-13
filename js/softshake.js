$(document).ready(function() {
    $('#langFr').click(function() {
        location.href = changeLanguage('fr');
    });

    $('#langEn').click(function() {
        location.href = changeLanguage('en');
    });

    var colorboxParam = { width: '750px', top: '100px', loop: false };
    $("a[rel='java']").colorbox(colorboxParam);
    $("a[rel='mobility']").colorbox(colorboxParam);
    $("a[rel='agile']").colorbox(colorboxParam);
    $("a[rel='microsoft']").colorbox(colorboxParam);
    $("a[rel='incubator']").colorbox(colorboxParam);
    $("a[rel='keynote']").colorbox(colorboxParam);
    $("a[rel='speakers']").colorbox({ width: '750px', top: '100px' });

    var params = location.search.substring(1).split(/&/);
    var sessionParam = params[0].split('=');
    $("a#" + sessionParam[1]).click();
});


function changeLanguage(lang) {
    return window.location.href.replace(/(https?:\/\/[^/]+)(\/\d+)?\/?([^/]*)(.*)/gi, '$1$2/' + lang + '$4');
}