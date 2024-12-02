<script lang="ts">
  import Input from '$lib/components/Input.svelte';
  import { createForm } from '$lib/form/create-form.svelte';
  const formController = createForm({
    initialData: { name: { value: 'test' }, name3: { value: 'test3' } }
  });
</script>


<h1>Inputs</h1>
<Input name="name" {formController} />
<Input name="name2" {formController} />
<Input name="name3" {formController} />

<h1>Result</h1>
<div>
  {formController.getValue['name']?.value}
</div>
<div>
  {formController.getValue['name2']?.value}
</div>
<div>
  {formController.getValue['name3']?.value}
</div>
