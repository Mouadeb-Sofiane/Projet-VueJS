<script lang="ts" setup>
import { ref } from "vue";

const isActive = ref(false);

const toggleState = () => {
  isActive.value = !isActive.value;
  console.log("Toggle State:", isActive.value ? "true" : "false");
};
</script>

<template>
    <div>
      <div
        :class="['toggle', isActive ? 'true' : 'false']"
        @click="toggleState"
      >
        <div class="track"></div>
        <div class="thumb"></div>
      </div>
      
      <p>{{ isActive ? 'True' : 'False' }}</p>
    </div>
</template>

<style lang="scss">
.toggle {
  cursor: pointer;
  width: 48px;
  height: 24px;
  position: relative;

  .track {
    width: 100%;
    height: 100%;
    border-radius: 12px;
    transition: background-color 0.3s ease;
  }

  .thumb {
    position: absolute;
    top: 6px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: $thumb-color;
    transition: left 0.3s ease;
  }

  &.false {
    .track {
      background-color: $color-false;
    }

    .thumb {
      left: 6px;
    }
  }

  &.true {
    .track {
      background-color: $color-true;
    }

    .thumb {
      left: 30px;
    }
  }

  .track, .thumb {
    font-family: $fontTextFamily; 
  }

}
</style>

  