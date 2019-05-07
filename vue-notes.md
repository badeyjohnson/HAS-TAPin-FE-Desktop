# Learning Vue from React:

## State
State is set up as __data__ in a new Vue instance:
```js
const vm = new Vue({
  data: {}, //state
  methods: {}, //use for methods
  computed: {}, //use for any complex logic - will re-calculate when dependency changes
  watch: {dataItem: () => {}}, //react to changes to dataItem (use for async functions?)
  template: html, //how the component will be shown
})
```
https://vuejs.org/v2/guide/instance.html

Built in properties and methods are prefixed with $.

`vm.$el === document.getElementById('example')` https://vuejs.org/v2/api/#Instance-Properties

## Components
Reusable Vue instances with names:
```js
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  props: [],
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
  })
```
Here data must be a function

----

__No JSX.__

Js and html are separated. However, Vue comes with a number of directives which give functionality within the html, e.g.

```html
<div v-if="seen">hello</div>
```
is a if statement which will display hello if seen is true.

Other options:
 - v-if
 - v-for
 - v-on:_EventListener_ (shorthand for v-on: === @)
 - v-model
 - v-bind:_Something_ (shorthand for v-bind: === :)
 - v-once (will never change)

Use JS using `{ brackets }`. So destructure objects within the code using `{{ doubleBrackets}}`. When a Vue instance is created it appears to make everything one level, so don't need to `{{data.dataItem}}`, can just `{{dataItem}}`.

-----
## Props
Pass through as in React in html.

Connect parent child via:
```html
v-on:function //in parent
```
```html
v-on:someEvent="$emit(function)" //in child
```
parent will look for the function occuring. child will emit the function on the event.
https://vuejs.org/v2/guide/components.html#Passing-Data-to-Child-Components-with-Props

Can be found on the Vue instance through

`vm.$props`

----
## ComponentDidMount

Add mounted (or created) hook:
https://vuejs.org/v2/api/#mounted
```js
new Vue({
  mounted: function () {
    //do something after vue is created
  }
})
```

Recommended to not use arrow functions here due to binding of this causing potential errors.

## ComponentDidUpate 
Add updated hook:
https://vuejs.org/v2/api/#updated
```js
new Vue({
  updated: function () {
    //do something after vue is created
  }
})
```
Things added to data will not cause a re-render, only updates. So start with empty versions of all data points.

---
## CSS

dynamically bind class using `v-bind:class="{some-JS-Property}"`