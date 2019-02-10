import { compose, withData, withProps, withHandlers } from 'vue-compose';
import HelloWorld from './HelloWorld.vue';


export default compose(
    withData({
      someValue: {
        initialValue: "bla bla bla"
      }
    }),
    withProps((props) => ({
      someFunction(){
        //do something like call api
        props.someValue="New Bla"
      }
    }))
  )(HelloWorld);


  