<template>
    <b-row>
        <b-col align-self="start">&nbsp;</b-col>
        <b-col cols="6" align-self="center">
            <h2>
                Add Room
                <b-link href="#/">(Room List)</b-link>
            </h2>
            <b-form @submit="addRoom">
                <b-form-group id="fieldsetHorizontal"
                              horizontal
                              :label-cols="4"
                              breakpoint="md"
                              label="Enter Room Name">
                    <b-form-input id="room_name"
                                  :state="state"
                                  v-model.trim="room.room_name"
                    ></b-form-input>
                </b-form-group>
                <b-button type="submit" variant="primary">Save</b-button>
            </b-form>
        </b-col>
        <b-col align-self="end">&nbsp;</b-col>
    </b-row>
</template>

<script>
import axios from 'axios'
export default {
  name: 'add-room',
  data () {
    return {
      room: {}
    }
  },
  methods: {
    addRoom (e) {
      e.preventDefault()
      axios.post(`//localhost:3000/api/room`, this.room)
        .then((res) => {
          this.$router.push({
            name: 'room-list'
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
