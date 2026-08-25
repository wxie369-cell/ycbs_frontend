const { defineConfig } = require('@vue/cli-service')

const page = (entry, title, description) => ({
  entry,
  title,
  description,
})

module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  configureWebpack: {
    optimization: {
      splitChunks: {
        cacheGroups: {
          legacyUi: {
            test: /[\\/]node_modules[\\/](?:vuetify|@fortawesome)[\\/]/,
            name: 'legacy-ui',
            chunks: 'all',
            priority: 30,
            enforce: true,
          },
          legacyMotion: {
            test: /[\\/]node_modules[\\/]animejs[\\/]/,
            name: 'legacy-motion',
            chunks: 'all',
            priority: 25,
            enforce: true,
          },
        },
      },
    },
  },
  pages: {
    index: page(
      'src/index/main.js',
      'YCBS｜生技青年創業營',
      'YCBS 生技青年創業營串連科學、產業與創業實作，陪伴青年建立跨域視野並完成團隊提案。'
    ),
    about: page(
      'src/about/main.js',
      '關於 YCBS｜生技青年創業營',
      '認識 YCBS 的營隊宗旨、學習模組，以及由不同專業背景組成的青年團隊。'
    ),
    event: page(
      'src/event/main.js',
      '活動資訊｜YCBS 生技青年創業營',
      '查看 YCBS 生技青年創業營的活動日期、地點與營隊資訊。'
    ),
    old: page(
      'src/old/main.js',
      '歷年活動｜YCBS 生技青年創業營',
      '瀏覽 YCBS 生技青年創業營的歷年活動與相關資訊。'
    ),
    register: page(
      'src/register/main.js',
      '報名資訊｜YCBS 生技青年創業營',
      '查看 YCBS 生技青年創業營的活動與官方報名資訊。'
    ),
    progress: page(
      'src/progress/main.js',
      '網站進度｜YCBS 生技青年創業營',
      '查看 YCBS 官方網站的開發進度與公開修改紀錄。'
    ),
  }
})
