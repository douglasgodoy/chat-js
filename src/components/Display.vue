<template>
  <div class="my-4 border rounded flex-grow-1" id="messages-display">
    <div class="text-right">
      <span class="nick">{{ nickname }}</span>
      <div class="message">
        <span> hi, my name is {{ nickname }}</span>
      </div>
    </div>
    <div>
      <span class="nick">{{ nickname }}</span>
      <div class="message"><span class="others"> and you ?</span></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    nickname: String
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
}

.nick {
  color: white;
  font-size: 10px;
  font-weight: bold;
  padding: 0 1rem;
}
</style>
