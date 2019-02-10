import { compose, withData, withProps, withHandlers } from 'vue-compose';
import Vue from 'vue';
import HelloWorld from './HelloWorld.vue';

const list = async someList(){
    // try {
     const data = await axios.get(`http://localhost:3000/book`)
         if (data && data.data) {
             return data.data }
    //   }
    //  catch(e){   //add in error handling
    //     return e;
    // }
},

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


  
   
//   methods: {
//     details (book) {
//       this.$router.push({
//         name: 'ShowBook',
//         params: { id: book._id }
//       })
//     }
//   }
// }