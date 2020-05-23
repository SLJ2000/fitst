// components/my-event/my-event.js
Component({



  methods: {
    handleinsert(){
      this.triggerEvent('increment',{name:'王德发',age:18},{})
    }
  }
})
