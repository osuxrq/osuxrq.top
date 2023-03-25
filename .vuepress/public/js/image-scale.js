(function () {
    console.log("image scaling");
    console.log(document.readyState);

    let images2 = document.querySelectorAll("main img");
    console.log("Found image count: " + images2.length);
    for (let i = 0; i < images2.length; i++) {
        let current = images2[i];
        console.log(current.src);
        try {
            let path = decodeURIComponent(new URL(current.src).pathname);
            let match = /-((?=\d|\.\d)\d*\.?\d*)x\.[a-z]+$/i.exec(path);
            if (match == null) {
                continue;
            }
            let scale = match[1];
            current.onload = function () {
                let width = current.naturalWidth / scale;
                current.setAttribute("width", width);
            }
            let width = current.naturalWidth / scale;
            if (width == 0)
                continue;
            current.setAttribute("width", width);
        } catch (error) {
        }
    }
})()