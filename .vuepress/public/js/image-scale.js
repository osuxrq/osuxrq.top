(function () {
    let scale = (k, updateTime) => {
        let images2 = document.querySelectorAll("main img");
        let iterationUpdated = false;
        for (let i = 0; i < images2.length; i++) {
            let current = images2[i];
            try {
                let path = decodeURIComponent(new URL(current.src).pathname);
                let match = /-((?=\d|\.\d)\d*\.?\d*)x(?:-[0-9a-f]{7,})?\.[0-9a-z]+$/i.exec(path);
                if (match == null) {
                    continue;
                }
                if (current.onload == null) {
                    iterationUpdated = true;
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
        if (iterationUpdated) {
            updateTime += 1;
        }
        if (updateTime < 2 && k > 0 && k <= 5)
            setTimeout(() => scale(k - 1, updateTime), 100);
        // 需要确保缩放两次，因为此脚本的执行可能先于页面内容更新，因此，获取到的图片可能是前一页面的。
    };
    scale(5, 0);
})();