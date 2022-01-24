export default {
  created(el, binding, nNode, oNode){},
  beforeMount(el, binding, nNode, oNode){},
  mounted(el, binding, nNode, oNode){
    el.style.color = '#3d47bf'
    el.focus()
  },
  beforeUpdate(el, binding, nNode, oNode){},
  updated(el, binding, nNode, oNode){},
  beforeUnmount(el, binding, nNode, oNode){},
  unmounted(el, binding, nNode, oNode){},
}