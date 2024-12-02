/* eslint-disable @typescript-eslint/no-explicit-any */
// export type TypeInput = {

import { onMount } from "svelte";

// }

export const createForm = ({ initialData }: {initialData?: Record<string, {value: string}>}) => {
  const controllers: any = $state({});

  onMount(() => {
    if (initialData) {
      Object.entries(initialData).forEach(([key, obj]) => {
        if (typeof obj?.value === 'string') {
          if (!controllers[key]) {
            controllers[key] = { value: obj.value }
          } else {
          controllers[key].value = obj.value
          }
        }
      })
    }
  })


  return {
    // registerController: ({name, controller} : {name: any, controller: any})  => {
    //   controllers[name] = controller;
    // },
    onChange: ({name, value}: {name: any, value: any}) => {
      if (!controllers[name]) {
        controllers[name] = {
          value
        }
      } else {
        controllers[name].value = value;
      }
    },
    get getValue() {
      return controllers
    }
  }
}
