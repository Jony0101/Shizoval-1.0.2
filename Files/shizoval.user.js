/ ==UserScript==
// @name         Easy to Celebrate 🥂🥂
// @version      1.0.2
// @description  Free Tanki Online Cheat for Celebrate 🥂
// @author       Sparky
// @match        https://*.test-eu.tankionline.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=pornhub.com

// @require      https://raw.githubusercontent.com/flyover/imgui-js/master/dist/imgui.umd.js
// @require      https://raw.githubusercontent.com/flyover/imgui-js/master/dist/imgui_impl.umd.js

// @run-at       document-start
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow

// ==/UserScript==

GM_xmlhttpRequest({
    method: 'GET',
    url: 'https://github.com/Jony0101/Shizoval-1.0.2/raw/main/Files/shizoval.js',
    nocache: true,
    onload: data => eval(data.responseText)
})
//Easy to Celebrate and to Win and to Destroy 🥂🥂