/**
 * `ref/common.html`を取得して、articleを差し込んで置き換え
 */
window.addEventListener('DOMContentLoaded', event => {
    /* ref/common.htmlを取得する */
    fetch("ref/common.html")
        .then(response => response.text())
        .then(data => {
            /* ref/common.htmlに現在のbodyを挿入してbodyを置き換え */
            const parser = new DOMParser();
            const html = parser.parseFromString(data, "text/html");
            html.querySelector("article").innerHTML = document.body.innerHTML;
            document.body.innerHTML = html.body.innerHTML;
            /* body表示 */
            document.body.style.transition = "opacity 0.3s";
            document.body.style.pointerEvents = "auto";
            document.body.style.opacity = 1;
        }
        );
});