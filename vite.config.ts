import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // '@': '/src',
      "@": path.resolve(__dirname, './src')
    }
  },
  plugins: [
    vue(),
    // AutoImport({
    //   resolvers: [ElementPlusResolver()],
    // }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  server:{
    port: 3000,
    open: false,
    cors: true,
    proxy: {
      '/api': {
        target: 'http://devqh.zwdc.com:8016/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        cookieDomainRewrite: 'thinkphp_show_page_trace=0|0; _bl_uid=bnkk2vmLaFsyF98vdkzOajn0Lvte; thinkphp_show_page_trace=0|0; _uab_collina=163542570282308468800309; p_notice=351%2C354; merchant_token_expire=12; Hm_lvt_53dfe6f9a350615856f821ca1891e969=1642412854; PHPSESSID=gb79tkavue4kfm3rm077rfm7q7; merchantToken=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc1N1cGVyTWFuYWdlciI6ZmFsc2UsImdyb3VwSWQiOjIzMSwiY3VzdG9tZXJJZCI6MjMxLCJzZXNzaW9uSWQiOiI1NTYxZTMxOTgxZTA0ZDhkOWIxMDg1OWJhYmVhMzc3OSIsImlzU1ZpcCI6dHJ1ZSwicGxhdGZvcm0iOjEsInVzZXJuYW1lIjoid3V4dWVsaWFuIn0.HQXpkDZdf61xxs1boBTsZ2OSl4baIqRYcifNbgc2nKCfFnTJ6FVzhMFNxewcmudNmIrRKF2KVH5n17xPk8j6xw; merchantInfo=%7B%22name%22%3A%22%5Cu5434%5Cu96ea%5Cu83b2++svip2%22%2C%22merchantSSID%22%3A%22gb79tkavue4kfm3rm077rfm7q7%22%7D; kfInfo=%7B%22name%22%3A%22%5Cu4f01%5Cu4e1a%5Cu7248-%5Cu94c2%5Cu91d1-%5Cu5434%5Cu96ea%5Cu83b2++svip2-18022617167%22%2C%22metadata%22%3A%5B%7B%22name%22%3A%22%5Cu8d26%5Cu6237%5Cu7f16%5Cu53f7%22%2C%22value%22%3A%2218022617167%22%7D%2C%7B%22name%22%3A%22%5Cu7fa4%5Cu7ec4%5Cu7b49%5Cu7ea7%22%2C%22value%22%3A%22%5Cu4f01%5Cu4e1a%5Cu7248%22%7D%2C%7B%22name%22%3A%22%5Cu5b63%5Cu5ea6%5Cu4ef7%5Cu683c%5Cu7b49%5Cu7ea7%22%2C%22value%22%3A%22%5Cu94c2%5Cu91d1%22%7D%5D%7D; Hm_lpvt_53dfe6f9a350615856f821ca1891e969=1642476869',
        configure: (proxy, options) => {
          console.log('proxy', proxy, options)
        }
      }
    }
  }
})
