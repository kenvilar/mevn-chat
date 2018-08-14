<template>
    <b-row>
        <b-col cols="12">
            <h2>
                Room List
                <b-link href="#/add-room">(Add Room)</b-link>
            </h2>
            <b-table striped hover :items="rooms" :fields="fields">
                <template slot="actions" scope="row">
                    <b-btn size="sm" @click.stop="joinRoom(row._id)">Join</b-btn>
                </template>
            </b-table>
            <ul v-if="errors && errors.length">
                <li v-for="error of errors" :key="error">
                    {{ error.message }}
                </li>
            </ul>
        </b-col>
    </b-row>
</template>

<script>
import axios from 'axios'

export default {
  name: 'room-list',
  data () {
    return {
      fields: {
        room_name: {
          label: 'Room Name',
          sortable: true,
          'class': 'text-center'
        },
        created_date: {
          label: 'Created Date',
          sortable: true
        },
        actions: {
          label: 'Action',
          'class': 'text-center'
        }
      },
      rooms: [],
      errors: []
    }
  },
  created () {
    axios.get('//localhost:3000/api/room')
      .then((res) => {
        this.rooms = res.data
      })
      .catch((err) => {
        this.errors.push(err)
      })
  },
  methods: {
    joinRoom (id) {
      this.$router.push({
        name: 'join-room',
        params: { id: id }
      })
    }
  }
}
</script>

<style scoped>

</style>
