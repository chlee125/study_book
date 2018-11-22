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
      books: []
    };
  },
  mounted() {
    var that = this;
    axios.get("http://localhost:3000/books").then(response => {
      var result = response.data;

      result.map(item => that.books.push(item));
      console.log(item);
    });
  }
};
</script>
