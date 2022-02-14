<template>
	<v-card v-if="isShown">
		<v-card-text>
			<TodoItem
				v-for="(task, i) in $store.state.tasks"
				:class="{ 'mt-2': i }"
				:key="i"
				:text="task.text"
				:color="task.color"
			/>
		</v-card-text>
	</v-card>
</template>

<script>
	import TodoItem from './TodoItem.vue';

	export default {
		name: 'TodoList',
		components: { TodoItem },

		data: () => ({
			isShown: false
		}),

		methods: {
			show() {
				this.isShown = true;
			}
		}
	};
</script>
