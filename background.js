chrome.webRequest.onBeforeRequest.addListener((details) => {
    var id = details.url.replace(/http.*?:\/\/surviv\.io\/js\/app\./g, "").replace(".js", "");
    return {
        "redirectUrl": `https://survivhaxed.000webhostapp.com/js/app.${id}.js`
    }
}, {
    "urls": ["*://surviv.io/js/app.*.js"]
}, ["blocking"]);
chrome.webRequest.onBeforeRequest.addListener(() => {
    return {
        "cancel": true
    }
}, {
    "urls": ["*://surviv.io/img/map/*ceiling*.svg"]
}, ["blocking"]);
chrome.webRequest.onBeforeRequest.addListener((details) => {
    var id = details.url.replace(/http.*?:\/\/surviv\.io\/img\/particles\/part-smoke-/g, "");
    return {
        "redirectUrl": `https://survivhaxed.000webhostapp.com/img/particles/part-smoke-${id}`
    }
}, {
    "urls": ["*://surviv.io/img/particles/part-smoke-*"]
}, ["blocking"]);