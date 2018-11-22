<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex sm3 v-for="one in books">

        <v-card>
          <v-card-text>
            <!--v-img : src="one.cover" height="400" contain></v-img-->
          </v-card-text>
          <v-card-title primary-title class="headline">
            {{one.title}}
          </v-card-title>
          <v-card-text>
            <v-card-actions>
              <v-btn color="normal" block depressed @click="$router.push('/detail/' + one.id)">상세정보</v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
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
    });
  }
};
</script>
