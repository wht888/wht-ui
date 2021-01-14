import button from './button';
import toast from './toast';
const components = [button, toast];

const VuePlugin = {};
VuePlugin.install = function(Vue) {
  for (const component in components) {
    Vue.component('wht' + component, components[component]);
  }
};
export default VuePlugin;
