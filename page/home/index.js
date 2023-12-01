const logger = DeviceRuntimeCore.HmLogger.getLogger("Ramzard");

Page({
    build() {
      hmApp.setScreenKeep(true)

      const dataList = [
        { name: 'Dice', icon: "icons/diceIcon.png", url: "page/dice/config/index" },
        { name: 'Coin', icon: "icons/coinIcon.png", url: "page/coin/config/index" },
        { name: 'Slot', icon: "icons/slotIcon.png", url: "page/slot/config/index" },
        { name: 'Code', icon: "icons/codeIcon.png", url: "page/code/config/index" },
        { name: 'Conf', icon: "icons/confIcon.png", url: "page/conf/index" },
      ]

      hmUI.createWidget(hmUI.widget.SCROLL_LIST, {
        x: 45,
        y: 0,
        h: 490,
        w: 192,
        item_space: 32,
        item_config: [
          {
            type_id: 1,
            text_view: [{ x: 0, y: 80, w: 100, h: 100, key: 'name', color: 0xffffff, text_size: 34 }],
            text_view_count: 1,
            image_view: [{
              x: 0,
              y: 5,
              w: 100,
              h: 100,
              key: "icon"
            }],
            image_view_count: 1,
            item_height: 130
          }
        ],
        item_config_count: 1,
        data_type_config: [],
        data_type_config_count: 0,
        data_array: dataList,
        data_count: dataList.length,
        item_click_func: (list, index) => {
          hmApp.gotoPage({ url: dataList[index].url})
        }
      })
    }
  })