
const globalData = getApp()._options.globalData;

Page({
  build() {

    const text = hmUI.createWidget(hmUI.widget.TEXT, {
      x: 18,
      y: 30,
      w: 150,
      h: 46,
      color: 0xffffff,
      text_size: 36,
      align_h: hmUI.align.CENTER_H,
      align_v: hmUI.align.CENTER_V,
      text_style: hmUI.text_style.NONE,
      text: 'Sides'
    })

    const radioGroup = hmUI.createWidget(hmUI.widget.RADIO_GROUP, {
      x: 0,
      y: 0,
      w: 150,
      h: 64,
      select_src: 'misc/selected.png',
      unselect_src: 'misc/unselected.png',
      check_func: (group, index, checked) => {
        console.log('index', index)
        console.log('checked', checked)
      }
    })

    const radio0 = radioGroup.createWidget(hmUI.widget.STATE_BUTTON, {
      x: 30,
      y: 90,
      w: 70,
      h: 70
    })
    const radio1 = radioGroup.createWidget(hmUI.widget.STATE_BUTTON, {
      x: 115,
      y: 90,
      w: 70,
      h: 70
    })

    const radios = [radio0, radio1]

    const currentPage = 'dice'
    console.log('antes for')
    //DESCOBRIR COMO INCIAR CHECKADO O QUE VEM NA CONFIG E DESCOBRIR PQ BATE AQUI VARIAS VEZES
    for (let radio = 0; radio <= radios.length; radio++ ) {
      console.log("inicio for", globalData.data[currentPage].conf)
      const propType = globalData.data[currentPage].conf === radio ? hmUI.prop.CHECKED : hmUI.prop.INIT
      console.log('propType', propType)
      radioGroup.setProperty(propType, radios[radio])
    }

    const text2 = hmUI.createWidget(hmUI.widget.TEXT, {
      x: 25,
      y: 120,
      w: 50,
      h: 50,
      color: 0xffffff,
      text_size: 36,
      align_h: 150,
      align_v: 150,
      text_style: hmUI.text_style.NONE,
      text: '6'
    })

    const text3 = hmUI.createWidget(hmUI.widget.TEXT, {
      x: 111,
      y: 120,
      w: 50,
      h: 50,
      color: 0xffffff,
      text_size: 36,
      align_h: 150,
      align_v: 150,
      text_style: hmUI.text_style.NONE,
      text: '20'
    })

    hmUI.createWidget(hmUI.widget.BUTTON, {
      x: 20,
      y: 210,
      w: 150,
      h: 70,
      normal_src: 'misc/buttonLine.png',
      press_src: 'misc/buttonLinePress.png',
      text: 'Clean',
      text_size: 36,
      click_func: (button_widget) => {
        console.log('button click')
        hmUI.showToast({
          text: 'Historic\nCleaned'
        })
      }
    })

    hmUI.createWidget(hmUI.widget.BUTTON, {
      x: 20,
      y: 330,
      w: 150,
      h: 70,
      normal_src: 'misc/buttonLine.png',
      press_src: 'misc/buttonLinePress.png',
      text: 'Start',
      text_size: 36,
      click_func: (button_widget) => {
        hmApp.gotoPage({ url: "page/dice/play/index"})
      }
    })
  }
})