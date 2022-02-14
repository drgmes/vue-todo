<template v-show="text && color === undefined">
	<v-card :style="{ background: color }">
		<v-card-text class="d-flex align-center">
			<svg-icon
				class="mr-2"
				type="mdi"
				:path="mdiArrowRightBoldHexagonOutline"
			/>

			<span>{{ text || '{ text... }' }}</span>
		</v-card-text>
	</v-card>
</template>

<script>
	import SvgIcon from '@jamescoyle/vue-icon';
	import { mdiArrowRightBoldHexagonOutline } from '@mdi/js';

	export default {
		mdiArrowRightBoldHexagonOutline,

		name: 'TodoItem',
		components: { SvgIcon },

		props: {
			text: String,
			color: String
		}
	};
</script>
