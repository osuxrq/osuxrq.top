(function () {
    let scale = (k) => {
        let images2 = document.querySelectorAll("main img");
        for (let i = 0; i < images2.length; i++) {
            let current = images2[i];
            try {
                let path = decodeURIComponent(new URL(current.src).pathname);
                let match = /-((?=\d|\.\d)\d*\.?\d*)x(?:-[0-9a-f]{7,})?\.[0-9a-z]+$/i.exec(path);
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
        if (images2.length == 0 && k > 0 && k <= 5)
            setTimeout(() => scale(k - 1), 100);
    };
    scale(5);
})();