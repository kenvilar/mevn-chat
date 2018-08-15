import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/HelloWorld'
import RoomList from '@/components/RoomList'
import AddRoom from '@/components/AddRoom'
import JoinRoom from '@/components/JoinRoom'
import ChatRoom from '@/components/ChatRoom'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'room-list',
      component: RoomList
    },
    {
      path: '/add-room',
      name: 'add-room',
      component: AddRoom
    },
    {
      path: '/join-room/:id',
      name: 'join-room',
      component: JoinRoom
    },
    {
      path: '/chat-room/:id/:nickname',
      name: 'chat-room',
      component: ChatRoom
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    }
  ]
})
