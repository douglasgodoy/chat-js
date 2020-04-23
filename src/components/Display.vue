<template>
  <div class="my-4 border rounded flex-grow-1" id="messages-display">
    <div :class="{'text-right': message.isPerson}" v-for="(message, i) in messages" :key="i">
      <span class="nick">{{ message.author }}</span>
      <div class="message">
        <span :class="{others:!message.isPerson}">{{ message.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    messages: [Array, Object]
  }
};
</script>

<style scoped>
.message span.others {
  background: rgb(240, 240, 240);
  border-radius: 0 5px 5px 5px;
}

.message {
  min-width: 100%;
  padding: 0.75rem;
}

.message span {
  padding: 0.75rem;
  font-weight: bold;
}
.message span:not(.others) {
  background: rgb(206, 206, 113);
  border-radius: 5px 0 5px 5px;
}
#messages-display {
  padding: 0.5vw;
  max-height: 70vh;
  overflow: auto;
}

.nick {
  color: white;
  font-size: 10px;
  font-weight: bold;
  padding: 0 1rem;
}
</style>
