import AsyncStorage from "@react-native-async-storage/async-storage";

export const store = {
  storeData: async (key: string, value: any) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      // saving error
    }
  },
  getData: async (key: string) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  },
  getString: async (key: string) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : "";
    } catch (e) {
      // error reading value
    }
  },
  deleteKey: async (key: string) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      // remove error
    }

    console.log("Done.");
  },
  clearStorage: async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      // clear error
    }

    console.log("Done.");
  },
};
