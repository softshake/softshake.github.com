$(document).ready(function() {
    $('#langFr').click(function() {
        location.href = changeLanguage('fr');
    });

    $('#langEn').click(function() {
        location.href = changeLanguage('en');
    });

    $('#cssdropdown li.headlink').hover(
        function() {
            $('ul', this).css('display', 'block');
        },
        function() {
            $('ul', this).css('display', 'none');
        });
});


function changeLanguage(lang) {
    return window.location.href.replace(/(https?:\/\/[^/]+)\/?([^/]*)(.*)/gi, '$1/' + lang + '$3');
}