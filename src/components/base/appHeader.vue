<template>
  <div>
    <v-app-bar
      app
      color="primary"
      dark
    >
    
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
    >
      <v-list dense>
        <template v-for="item in items">
          <v-row
            v-if="item.heading"
            :key="item.heading"
            align="center"
          >
            <v-col cols="6">
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-col>
            <v-col
              cols="6"
              class="text-center"
            >
              <a
                href="#!"
                class="body-2 black--text"
              >EDIT</a>
            </v-col>
          </v-row>
          <v-list-group
            v-else-if="item.children"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            @click="$router.push(item.to)" 
            append-icon=""
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>
                  {{ item.text }}
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="(child, i) in item.children"
              :key="i"
              link
            >
              <v-list-item-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  {{ child.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item
            v-else
            :key="item.text"
            @click="$router.push (item.to)"
            link
          >
            <v-list-item-action  > 
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>    
  </div>
</template>
<script>

        
    export default {    
      name: "app-header",    
      components:{
      },
      computed: {
      },
      methods: {
        logout: function() {
          
        },
        viewAccount(){
          
        },
      },
      data() {  
        return {
          drawer: false,
          items: [
        { id:0, icon: 'mdi-contacts', text: 'home' , to: '/'},
        { id:1, icon: 'mdi-content-copy', text: 'about' , to: '/about' },
        { id:2, icon: 'mdi-content-copy', text: 'Post' , to: '/posts' },
        {
          icon: 'mdi-chevron-up',
          'icon-alt': 'mdi-chevron-down',
          text: 'Labels',
          model: false,
          children: [
            { icon: 'mdi-plus', text: 'Create label' },
          ],
        }
      ]
        }  
      }    
    }
</script>
