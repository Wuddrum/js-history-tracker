!function(){
    var iframeSrc = '//wuddrum.github.io/js-history-tracker/tracker.html';

    var iframeEl = createIframeEl();
    insertIframeEl(iframeEl);    

    function createIframeEl() {
        var iframeEl = document.createElement('iframe');

        iframeEl.onload = onIframeLoad;
        iframeEl.setAttribute('src', iframeSrc);
        iframeEl.setAttribute('style', 'display: none;');

        return iframeEl;
    }

    function insertIframeEl(iframeEl) {
        if (!document.body) {
            window.addEventListener('load', function() {
                document.body.appendChild(iframeEl);
            })
        }
        else {
            document.body.appendChild(iframeEl);
        }
    }

    function onIframeLoad() {
        var data = { origin: window.location.href };
        var dataJson = JSON.stringify(data);
        iframeEl.contentWindow.postMessage(dataJson, '*');
    }
}();