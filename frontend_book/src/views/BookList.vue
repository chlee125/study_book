<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex md12>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: function() {
    return {
      items: []
    };
  },
  mounted() {
    console.log("mount!");
    axios.get("http://localhost:3000/books").then(result => {
      console.log(result);
    });
  }
};
</script>
