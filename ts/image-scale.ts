(() => {
    const handleImageScale = (retryCount: number, updateCount: number): void => {
        let images = document.querySelectorAll<HTMLImageElement>("main img");
        let hasNewImages = false;
        images.forEach((img) => {
            try {
                // 解析图片URL路径
                let path = decodeURIComponent(new URL(img.src).pathname);
                let scaleMatch = /-((?=\d|\.\d)\d*\.?\d*)x(?:-[0-9a-f]{7,})?\.[0-9a-z]+$/i.exec(path);

                if (!scaleMatch) {
                    return;
                }

                // 检查是否有新图片
                if (!img.onload) {
                    hasNewImages = true;
                }

                const scale = parseFloat(scaleMatch[1]);
                const width = img.naturalWidth / scale;

                // 设置图片加载事件
                img.onload = (): void => {
                    img.setAttribute("width", width.toString());
                };
                // 设置当前宽度
                if (width > 0) {
                    img.setAttribute("width", width.toString());
                }
            } catch (error) {
                console.error('Image scaling error:', error);
            }
        });

        // 如果有新图片，则再次执行缩放
        if (hasNewImages) {
            updateCount ++;
        }
        if (updateCount < 2 && retryCount > 0 && retryCount <= 5)
            setTimeout(() => handleImageScale(retryCount - 1, updateCount), 100);
        // 需要确保缩放两次，因为此脚本的执行可能先于页面内容更新，因此，获取到的图片可能是前一页面的。
    };

    handleImageScale(5, 0);
})();