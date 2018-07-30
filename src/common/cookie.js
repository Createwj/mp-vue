export function getCookie(e) {
    let r, i = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
    return (r = document.cookie.match(i)) ? unescape(r[2]) : null
}
export function setCookie(e, r) {
    let i = 30, n = new Date;
    n.setTime(n.getTime() + 24 * i * 60 * 60 * 1e3), document.cookie = e + "=" + escape(r) + ";expires=" + n.toGMTString() + ";path=/"
}
export function clearCookie() {
    let e = document.cookie.match(/[^ =;]+(?=\=)/g);
    if (e) {
        let r = new Date;
        r.setTime(r.getTime() - 1e4);
        for (let i = 0; i < e.length; i++)document.cookie = e[i] + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/"
    }
}
