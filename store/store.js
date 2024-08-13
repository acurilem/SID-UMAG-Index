import json from '@/configText.json'

export const state = () => ({
  configText: json,
  loading: false,
})

export const mutations = {
  setConfigText(state, payload) {
    state.configText = payload.configText
  },
  START_LOADING(state) {
    console.log("start loading")
    state.loading = true;
  },
  STOP_LOADING(state) {
    console.log("STOP LOADING")

    state.loading = false;
  },
}

export const getters = {
	getConfigText(state) {
    	return state.configText
  	}
}