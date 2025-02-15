export const scaleImage = () => {
    /**
     * 设置图片宽度
     * @param img - 图片元素
     * @param scale - 缩放比例
     */
    const setImageWidth = (img: HTMLImageElement, scale: number): void => {
        if (img.naturalWidth > 0 && scale > 0) {
            const width = img.naturalWidth / scale;
            img.setAttribute("width", width.toString());
        }
    };

    /**
     * 处理图片缩放
     */
    const handleImageScale = (): void => {
        const images: NodeListOf<HTMLImageElement> = document.querySelectorAll("main img");
        images.forEach((img: HTMLImageElement) => {
            try {
                // 解析图片路径
                const path: string = decodeURIComponent(new URL(img.src).pathname);
                const scaleMatch: RegExpExecArray | null = /-((?=\d|\.\d)\d*\.?\d*)x(?:-[0-9a-f]{7,})?\.[0-9a-z]+$/i.exec(path);

                // 如果文件名中没有缩放比例信息，跳过
                if (!scaleMatch) return;

                const scale: number = parseFloat(scaleMatch[1]);
                if (img.complete) {
                    setImageWidth(img, scale);
                } else {
                    // 监听图片加载事件，确保图片加载完成后设置宽度
                    img.onload = (): void => {
                        setImageWidth(img, scale);
                    };
                }
            } catch (error) {
                console.error('Image scaling error:', error);
            }
        });
    };

    // 初始调用
    handleImageScale();

    // 注册一个 observer , 监听 DOM 变化，重新处理图片
    const observer: MutationObserver = new MutationObserver((mutations: MutationRecord[]) => {
        mutations.forEach((mutation: MutationRecord) => {
            if (mutation.type === 'childList') {
                handleImageScale();
            }
        });
    });

    // 调用 observer 监听 <main> 元素的变化
    const mainElement: HTMLElement | null = document.querySelector('main');
    if (mainElement) {
        observer.observe(mainElement, { childList: true, subtree: true });
    }
};