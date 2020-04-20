<template>
  <b-container
    class="col col-md-10 col-lg-8 d-flex flex-column justify-content-between py-4"
    id="content"
  >
    <b-input-group class="mx-auto">
      <b-form-input
        :value="nickname"
        @blur="changeNick"
        :readonly="thereIsNickname"
        placeholder="Your nickname"
      />

      <b-input-group-append>
        <b-button variant="info" @click="$bvModal.show('nicknameModal')"
          >Change</b-button
        >
      </b-input-group-append>
    </b-input-group>

    <Display :nickname="nickname"></Display>

    <div class="d-flex">
      <b-form-textarea
        id="textarea"
        size="lg"
        placeholder="your message here..."
        @keyup.enter="test"
      />
      <b-button class="sendMessage col-2 col-md-1 border-none">
        <font-awesome-icon :icon="['fas', 'paper-plane']" size="lg" />
      </b-button>
    </div>
    <Modal :nickname="nickname" @changed="nickname = $event" />
  </b-container>
</template>

<script>
import Display from "./Display";
import Modal from "./Modal";
export default {
  components: {
    Display,
    Modal
  },
  data() {
    return {
      nickname: ""
    };
  },
  computed: {
    thereIsNickname() {
      return this.nickname.length > 0;
    }
  },
  methods: {
    changeNick(event) {
      this.nickname = event.target.value;
    },
    test() {
      console.log("a");
    }
  }
};
</script>

<style>
#content {
  height: 95vh;
  max-height: 100vh;
}
.sendMessage {
  border: none !important;
  border-radius: 0 0.3rem 0.3rem 0 !important;
  background: #11998e;
  background: -webkit-linear-gradient(to right, #38ef7d, #11998e);
  background: linear-gradient(to right, #38ef7d, #11998e);
}
*:focus {
  outline: none !important;
}
#textarea {
  border-radius: 0.3rem 0 0 0.3rem !important;
  border: none !important;
}
</style>
