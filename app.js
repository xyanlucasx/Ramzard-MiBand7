import LocalStorage from "./utils/storage";

const logger = DeviceRuntimeCore.HmLogger.getLogger("Ramzard");
const fileName = "data.txt";
const initialData = {
  dice: {
    conf: 0,
    historic: []
  },
  coin: {
    conf: 0,
    historic: []
  },
  slot: {
    conf: 0,
    historic: []
  },
  code: {
    conf: 0,
    historic: []
  },
  geral: {
    conf: 0,
    vibration: true
  }
}

App({
  globalData: {
    data: {
      ...initialData
    },
    localStorage: null,
  },
  onCreate() {
    try {
      this.globalData.localStorage = new LocalStorage(fileName);
      const data = this.globalData.localStorage.get();
      this.globalData.data = { ...initialData, ...data }
    } catch (e) {
      logger.log("--->e:", e);
    }
  },

  onDestroy() {
    this.globalData.localStorage.set({
       ...getApp()._options.globalData.data
    });
  },
});
