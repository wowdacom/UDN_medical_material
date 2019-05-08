import router from '../router'

var mixin = {
    methods: {
      changePage (lastPage, nextPage, position){
            if ( position === 'next' ) {
                console.log(this.jumpPage)
                this.jumpPage(nextPage)
            }
            if ( position === 'last' ) {
                this.jumpPage(lastPage)
            }
        },
      jumpPage (whichPage) {    
        router.push(whichPage)
      }
    }
  }
  
  export default mixin
  