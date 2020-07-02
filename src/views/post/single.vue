<template>
  <v-container>
    <v-row class="text-center">
    <div v-for="item in products" class="p-10 m-10" >
      <v-card
      width="90vw"
      >
        <v-card-title class="headline">{{item.name}}</v-card-title>
  
        <v-card-subtitle>{{item.body}}</v-card-subtitle>

        <v-card-actions>
        </v-card-actions>
      </v-card>
    </div>

    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: ["propsmessage","id"], 

    data: () => ({
      products: [],
    }),
    created () {
      var self = this

      this.axios.get('posts/'+this.id+'/comments')
      .then(function(r){
        self.products = r.data
        
      })
      .catch(function(r){
        self.products = []
      })
    },
    methods: {
        
    }
  }
</script>