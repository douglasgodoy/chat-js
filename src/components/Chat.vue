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
        <b-button variant="info" @click="$bvModal.show('nicknameModal')">Change</b-button>
      </b-input-group-append>
    </b-input-group>

    <Display :messages="informations"></Display>

    <div class="d-flex" v-if="nickname">
      <b-form-input
        id="input"
        size="lg"
        v-model="message"
        placeholder="your message here..."
        @keyup.enter="sendMessage"
      />
      <b-button class="sendMessage col-2 col-md-1 border-none" @click="sendMessage">
        <font-awesome-icon :icon="['fas', 'paper-plane']" size="lg" />
      </b-button>
    </div>
    <Modal :nickname="nickname" @changed="nickname = $event" />
  </b-container>
</template>

<script>
import Display from "./Display";
import Modal from "./Modal";
import io from "socket.io-client";

export default {
  components: {
    Display,
    Modal
  },
  data() {
    return {
      nickname: "",
      informations: [],
      message: "",
      id: ""
    };
  },
  methods: {
    changeNick(event) {
      this.nickname = event.target.value;
    },
    prepareMsg() {
      return {
        author: this.nickname,
        message: this.message,
        id: this.id
      };
    },
    sendMessage() {
      const socket = io.connect("http://localhost/chat");
      socket.emit("send", this.prepareMsg());
      this.message = "";
    }
  },
  mounted() {
    const socket = io("http://localhost/chat");

    socket.on("getData", data => {
      this.id = data;
      console.log(this.id);
    });

    socket.on(
      "send",
      data => (this.informations = { ...this.informations, ...data })
    );
  },
  computed: {
    thereIsNickname() {
      return this.nickname.length > 0;
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
#input {
  border-radius: 0.3rem 0 0 0.3rem !important;
  border: none !important;
}
</style>
