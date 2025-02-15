import { defineClientConfig } from "vuepress/client";
import { scaleImage } from "./scripts/image-scale";

export default defineClientConfig({
  enhance({ router }) {
    router.beforeEach((to) => {
        // console.log('before navigation')
    });

    router.afterEach((to) => {
        setTimeout(() => {
            scaleImage();
            // console.log('after navigation');
        }, 500); // wait for the page to be fully rendered
    });
  },
});
