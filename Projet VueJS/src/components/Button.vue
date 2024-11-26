<script lang="ts" setup>
import { defineProps } from 'vue';

defineProps<{
    disabled?: boolean,
    variant?: "primary" | "outline" | "disable" | "small" ;
}>();

</script>

<template>
    <button :class="{
      'button': true, 
    '-outline' : variant === 'outline',
    '-disabled' : disabled,
    '-small' : variant === 'small',
    }">
        <slot></slot>
    </button>

</template>

<style lang="scss">
.button {
  background: $primaryColor;
  color: $white;
  padding: rem(16px) rem(32px);
  border-radius: rem(48px);
  border: 1px solid $primaryColor;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background: $primaryDarkColor;
  }
  &.-outline {
    background: transparent;
    color: $primaryColor;
    &:hover {
      color: $primaryDarkColor;
      border-color: $primaryDarkColor;
    }
    &.-disabled {
      background: transparent;
      color: $gray400;
      border-color: $gray100;
    }
  }
  &.-disabled {
    background: $gray100;
    border-color: $gray100;
    color: $gray400;
    cursor: not-allowed;
  }

  &.-small {
    padding: rem(8px) rem(16px);
  }
  &.-getstarted {
    width: rem(327px);
    height: rem(48px);
    padding: rem(16px) rem(0px);
    justify-content: center;
    align-items: center;
    color: $black;
    border: $white;
    background-color: $white;
  }
  &.-long {
    width: rem(250px);
    height: rem(48px);
    padding: rem(16px) rem(0px);
    justify-content: center;
    align-items: center;
  }
}

.cercle{
  background: $gray100;
  border-radius:50%;
  width:15px;
  height:15px;
  &.-blue {
    background-color: $primaryColor;
  }
}

</style>