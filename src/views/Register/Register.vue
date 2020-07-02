<template>
  <v-container fluid fill-height ma-0 pa-0>
    <v-layout row fill-height>
      <v-flex xs12 sm12 md4 lg4 xl4 fill-height>
        <v-card class="pa-6 fill-height">
          <div class="text-right">
            <div class="display-2" style="margin: 18vh auto 0 auto;">Register</div>                                  
          </div>          
          <v-card-text>
                <v-form>
                    <v-text-field
                        v-model="name"
                        :rules="nameRules"
                        label="Name"
                        name="login"
                        prepend-icon="mdi-account"
                        type="text"
                    ></v-text-field>
                    <v-text-field
                      v-model="email"
                      :rules="emailRules"
                      prepend-icon="mdi-at"
                      label="E-mail"
                      required
                    ></v-text-field>
                    <v-text-field
                        id="password"
                        label="Password"
                        name="password"
                        prepend-icon="mdi-lock"
                        type="password"
                    ></v-text-field>
                </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn block color="primary" >Acceso</v-btn>
            
          </v-card-actions>
          <v-card-text >
            <router-link to="/login" class="btn btn-link">Cancel</router-link>
          </v-card-text>
        </v-card>        
      </v-flex>
      <v-flex hidden-sm-and-down md8 lg8 xl8 align-center justify-center fill-height >
           <v-img src="https://picsum.photos/510/300?random" style="height:100vh !important"></v-img>
      </v-flex>                
    </v-layout>
  </v-container>
</template>
<script>
  export default {
    data: () => ({
      maintenance: false,
      process: false,      
      drawer: null,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      emailRules: [
        v => !!v || 'Correo requerido',
        v => /.+@.+/.test(v) || 'El correo debe ser válido'
      ],
      email: "",
      password: "",
      error: false,
      wallpaper:"",
      wallpaperVideo: null,
      wallpaperReady: false
    }),
    computed: {
 
    },
    methods: {

     
    },
    created() {
    },
  }