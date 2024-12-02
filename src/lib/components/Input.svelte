<script lang="ts">
	import { inputController } from "$lib/form/input-controller.svelte";

  let { name, formController } = $props();

</script>

<input type="text" name={name} use:inputController={formController} />
