"use strict";
(() => {
    /**
     * 设置图片宽度
     * @param img - 图片元素
     * @param scale - 缩放比例
     */
    const setImageWidth = (img, scale) => {
        if (img.naturalWidth > 0 && scale > 0) {
            const width = img.naturalWidth / scale;
            img.setAttribute("width", width.toString());
        }
    };
    /**
     * 处理图片缩放
     * @param retryCount - 剩余重试次数
     * @param updateCount - 更新次数
     */
    const handleImageScale = (retryCount, updateCount) => {
        const images = document.querySelectorAll("main img");
        let hasNewImages = false;
        images.forEach((img) => {
            try {
                // 解析图片路径
                const path = decodeURIComponent(new URL(img.src).pathname);
                const scaleMatch = /-((?=\d|\.\d)\d*\.?\d*)x(?:-[0-9a-f]{7,})?\.[0-9a-z]+$/i.exec(path);
                // 如果文件名中没有缩放比例信息，跳过
                if (!scaleMatch)
                    return;
                // 检查是否有新图片
                if (!img.onload) {
                    hasNewImages = true;
                }
                const scale = parseFloat(scaleMatch[1]);
                setImageWidth(img, scale); // 设置图片宽度
                // 监听图片加载事件
                img.onload = () => {
                    setImageWidth(img, scale);
                };
            }
            catch (error) {
                console.error('Image scaling error:', error);
            }
        });
        // 如果有新图片且未达到重试上限，则重试
        if (hasNewImages && updateCount < 2 && retryCount > 0) {
            setTimeout(() => handleImageScale(retryCount - 1, updateCount + 1), 100);
        }
    };
    // 初始调用
    handleImageScale(5, 0);
    // 注册一个 observer , 监听 DOM 变化，重新处理图片
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'childList') {
                handleImageScale(5, 0);
            }
        });
    });
    // 调用 observer 监听 <main> 元素的变化
    const mainElement = document.querySelector('main');
    console.log(mainElement);
    if (mainElement) {
        observer.observe(mainElement, { childList: true, subtree: true });
    }
})();
