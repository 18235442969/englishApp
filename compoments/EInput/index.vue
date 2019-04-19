<template>
  <input class="input" :type="type" :placeholder="placeholder" :value="value" @input="$emit('input', $event.target.value)" :maxlength="max" :disabled="disabled" ref="input" :class="[inputClass]" placeholder-class="inputClass-placeholder"/>
</template>

<script>
export default {
  name: 'EInput',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: String,
    value: [String, Number],
    readonly: Boolean,
    disabled: Boolean,
    max: {
      type: Number,
      default: 11
    },
    inputClass: {
      type: String,
      default: 'noline'
    }
  },
  components: {
  },
  data() {
    return {
    }
  },
  computed: {
  },
  methods: {
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
  .noline{
    border: none;
  }
  .input{
    width: 100%;
    height: 2rem;
    font-size: 0.85rem;
    padding: 0 5px;
    color: #282525;
  }
  .loginInput{
    color: #fff;
  }
  .loginInput-placeholder{
color: #fff;
  }
</style>