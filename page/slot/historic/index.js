const logger = DeviceRuntimeCore.HmLogger.getLogger("Ramzard");

Page({
    build() {
        const dataList = [
            { date: '00/00/00', time: "00:00:00", value: 1, icon: "assets/diceIcon.png" },
            { date: '00/00/00', time: "00:00:00", value: 2, icon: "assets/coinIcon.png" },
            { date: '00/00/00', time: "00:00:00", value: 3, icon: "assets/slotIcon.png" },
            { date: '00/00/00', time: "00:00:00", value: 4, icon: "assets/codeIcon.png" },
            { date: '00/00/00', time: "00:00:00", value: 5, icon: "assets/confIcon.png" },
        ]

        hmUI.createWidget(hmUI.widget.SCROLL_LIST, {
            x: 20,
            y: 20,
            h: 454,
            w: 100,
            item_space: 10,
            item_config: [
                {
                    text_view: [{ x: 15, y: 30, w: 100, h: 100, key: 'value', color: 0xffffff, text_size: 40 }],
                    text_view_count: 1,
                    image_view_count: 1,
                    item_height: 130
                }
            ],
            item_config_count: 1,
            data_array: dataList,
            data_count: dataList.length
        })
    }
})