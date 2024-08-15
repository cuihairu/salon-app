import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginImp from 'vite-plugin-imp'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        // 可以在这里添加 Less 全局变量或其他 Less 配置
      },
    },
  },
  plugins: [
    react(),
    vitePluginImp({
      libList: [
        {
          libName: '@nutui/nutui-react',
          style: (name) => {
            return `@nutui/nutui-react/dist/esm/${name}/style/css`
          },
          replaceOldImport: false,
          camel2DashComponentName: false,
        }
      ]
    })
  ],
})
