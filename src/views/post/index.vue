<template>
  <div class="home">
    <div class="post">
        <h1>News</h1>
    </div>
    <List/>
  </div>
</template>

<script>
// @ is an alias to /src
import List from '@/components/list.vue'

export default {
  name: 'Home',
  components: {
    List
  }
}
</script>