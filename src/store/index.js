import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		tasks: []
	},

	mutations: {
		addTask(state, task) {
			state.tasks.push(task);
		}
	}
});
