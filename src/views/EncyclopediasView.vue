<template>
  <div v-if="selectedEncyclopedia">
    <h2>Encyclopedia #{{ id }}</h2>
    <br />
    <div class="d-flex justify-content-center">
      <encyclopedia-item
        :key="selectedEncyclopedia.id"
        v-bind:id="selectedEncyclopedia.id"
        @encyclopedia-updated="encyclopediaUpdated"
        @encyclopedia-deleted="encyclopediaDeleted"
        can-edit="true"
      ></encyclopedia-item>
    </div>
  </div>
  <div v-else>
    <div class="container-fluid p-2 d-flex flex-wrap">
      <encyclopedia-item
        v-for="encyclopedia in getAllEncyclopedias"
        :key="encyclopedia.id"
        v-bind:id="encyclopedia.id"
        @encyclopedia-updated="encyclopediaUpdated"
        @encyclopedia-deleted="encyclopediaDeleted"
      ></encyclopedia-item>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      selectedEncyclopedia: null,
      selectedEncyclopediaIndex: -1,
    };
  },
  computed: {
    getAllEncyclopedias() {
      return this.$store.getters.encyclopedias; // ima elegantnije: pogledati mapActions, mapGetters...
    },
  },
  watch: {
    $route(to, from) {
      console.log(`Route changed: ${from.path} -> ${to.path} `);
      this.selectedEncyclopedia = this.getAllEncyclopedias.find(
        (x) => x.id === this.$route.params.id
      );
      this.selectedEncyclopediaIndex = this.getAllEncyclopedias.findIndex(
        (x) => x.id === this.$route.params.id
      );
    },
  },
  methods: {
    encyclopediaUpdated(encyclopedia) {
      console.log("Encyclopedia info updated", encyclopedia);
    },
    encyclopediaDeleted(args) {
      if (
        this.selectedEncyclopedia &&
        this.selectedEncyclopedia.id === args.id
      ) {
        this.selectedEncyclopedia = null;
      }
    },
  },
  async mounted() {
    await this.$store.dispatch("refreshEncyclopedias");
  },
};
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
