<template>

</template>

<script>
import axios from 'axios'
import * as io from 'socket.io-client'
export default {
  name: 'join-room',
  data () {
    return {
      chat: {},
      socket: io('//localhost:4000')
    }
  },
  methods: {
    onSubmit (e) {
      e.preventDefault()
      this.chat.room = this.$route.params.id
      this.chat.message = this.chat.nickname + ' join the room'
      axios.post('//localhost:3000/api/chat', this.chat)
        .then(res => {
          this.socket.emit('save-message', {
            room: this.chat.room,
            nickname: this.chat.nickname,
            message: 'Join this room',
            created_date: new Date()
          })
          this.$router.push({
            name: 'chat-room',
            params: {
              id: this.$route.params.id,
              nickname: res.data.nickname
            }
          })
        })
        .catch((err) => {
          this.errors.push(err)
        })
    }
  }
}
</script>

<style scoped>

</style>
