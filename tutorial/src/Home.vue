 <template lang="html">
   <div class="">
     Decrement : {{ count }}
     <hr>
     <button type="button" @click="count--" name="button">-</button>
   </div>
 </template>

 <script>
     export default {
         data : function () {
            return {
               count : 0
            }
         }
     }
 </script>

 <style lang="css" scoped>
 </style>
