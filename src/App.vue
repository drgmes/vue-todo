<template>
	<v-app>
		<v-main>
			<v-container fluid>
				<v-card class="app__card" elevation="2">
					<v-card-title>Todo App</v-card-title>

					<v-card-text>
						<v-text-field v-model="task.text" label="Task description" />
						<v-select v-model="task.color" label="Task color" :items="colors" />

						<p>Preview:</p>
						<TodoItem :text="task.text" :color="task.color" />
					</v-card-text>

					<v-card-actions class="mr-2 d-flex justify-end">
						<v-btn ref="button">Save task</v-btn>
					</v-card-actions>
				</v-card>

				<TodoList v-if="loaded" ref="todoList" class="mt-2" />
			</v-container>
		</v-main>
	</v-app>
</template>

<script>
	import TodoList from '@/components/TodoList.vue';
	import TodoItem from '@/components/TodoItem.vue';

	export default {
		name: 'App',

		components: {
			TodoList,
			TodoItem
		},

		data: () => ({
			todoListRef: null,
			loaded: false,
			task: {},

			colors: [
				{ text: 'White', value: '#ffffff' },
				{ text: 'Red', value: '#b53333' },
				{ text: 'Blue', value: '#4040a9' },
				{ text: 'Green', value: '#417941' }
			]
		}),

		mounted() {
			this.loaded = true;
			this.todoListRef = this.$refs.todoList;

			this.addListeners();
			this.reset();
		},

		methods: {
			addListeners() {
				this.$refs.button.$el.addEventListener('click', () => {
					this.saveTask();
				});
			},

			reset() {
				this.task.text = '';
				this.task.color = null;
			},

			saveTask() {
				this.$store.commit('addTask', { ...this.task });
				this.todoListRef.show();
				this.reset();
			}
		}
	};
</script>

<style scoped>
	#app-wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		background: #eeeeee;
	}

	#app {
		background: inherit;
	}

	.app__card {
		width: 648px;
	}
</style>
