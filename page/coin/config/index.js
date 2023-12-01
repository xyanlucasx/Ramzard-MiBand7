Page({
    build() {
      const text = hmUI.createWidget(hmUI.widget.TEXT, {
        x: 20,
        y: 20,
        w: 100,
        h: 46,
        color: 0xffffff,
        text_size: 22,
        align_h: hmUI.align.CENTER_H,
        align_v: hmUI.align.CENTER_V,
        text_style: hmUI.text_style.NONE,
        text: 'COIN CONFIG'
      })

      text.addEventListener(hmUI.event.CLICK_DOWN, (info) => {
        text.setProperty(hmUI.prop.MORE, {
          y: 200
        })
      })

      const next = hmUI.createWidget(hmUI.widget.TEXT, {
        x: 20,
        y: 150,
        w: 100,
        h: 46,
        color: 0xffffff,
        text_size: 36,
        align_h: hmUI.align.CENTER_H,
        align_v: hmUI.align.CENTER_V,
        text_style: hmUI.text_style.NONE,
        text: 'NEXT'
      })

      next.addEventListener(hmUI.event.CLICK_DOWN, (info) => {
        hmApp.gotoPage({ url: "page/coin/play/index"})
      })
    }
  })