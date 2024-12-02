import type { Action } from 'svelte/action';


export const inputController: Action<
  HTMLInputElement,
  {
    onChange: ({ name, value }: { name: unknown; value: unknown }) => void;
    getValue: Record<string, { value: string }>;
  }
> = (node, data) => {
  node.addEventListener('input', (e) => {
    const target = e.target as HTMLInputElement;
    const value = target.value;

    if (node.name) {
      data.onChange({ name: node.name, value });
    }
  });
  $effect(() => {
    if (node.name) {
      node.value = data.getValue[node.name]?.value || '';
    }
  });
};
