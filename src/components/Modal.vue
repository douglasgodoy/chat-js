<template>
  <b-modal v-model="modalShow" id="nicknameModal">
    <template v-slot:modal-title>
      <h4>Hi, What's your nickname ?</h4>
    </template>
    <div>
      <b-form-input v-model="nick" placeholder="Enter your name" @blur="cNick"></b-form-input>
      <div class="mt-2" v-if="nick">
        <span class="text-primary font-weight-bold">{{ nick }}</span>
        say: Hi, test here!
      </div>
    </div>
    <template v-slot:modal-footer>
      <div class="w-100">
        <b-button variant="outline-info" class="px-4" @click="$bvModal.hide('nicknameModal')">Save</b-button>
      </div>
    </template>
  </b-modal>
</template>

<script>
export default {
  props: {
    nickname: String
  },
  data() {
    return {
      modalShow: true,
      nick: ""
    };
  },
  methods: {
    cNick() {
      this.$emit("changed", this.nick);
    }
  }
};
</script>
