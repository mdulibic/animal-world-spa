<template>
  <small-card v-if="!editMode">
    <router-link :to="'/encyclopedias/' + id" class="mr-3"> </router-link>

    <div class="card-body">
      <h5 class="card-title">{{ encyclopedia.title }}</h5>
      <p class="card-text">{{ encyclopedia.description }}</p>
    </div>
    <button class="btn btn-danger" @click="deleteEncyclopedia">Delete</button>
    <button v-if="canEdit" class="btn btn-primary" @click="editMode = true">
      Edit
    </button>
  </small-card>

  <div v-if="editMode" class="editForm">
    <form @submit.prevent="submitChanges">
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          placeholder="title"
          v-model="encyclopedia.title"
        />
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <textarea
          class="form-control"
          id="description"
          rows="3"
          v-model="encyclopedia.description"
        ></textarea>
      </div>

      <button class="btn btn-success" type="submit">Save</button>
      <button class="btn btn-warning" @click.stop="exitSingleEncyclopedia()">
        Cancel
      </button>
    </form>
  </div>
</template>

<script>
export default {
  emits: ["encyclopediaDeleted", "encyclopediaUpdated"],
  props: ["id", "canEdit"],

  data() {
    return {
      editMode: false,
      encyclopedia: { url: "" },
    };
  },
  methods: {
    async deleteEncyclopedia() {
      await this.$store.dispatch("deleteEncyclopedia", { id: this.id });
      this.$emit("encyclopediaDeleted", { id: this.id });
    },
    exitSingleEncyclopedia() {
      this.$router.push({ path: "/encyclopedias" });
    },
    async submitChanges() {
      console.log("submitting changes");
      await this.$store.dispatch("updateEncyclopedia", this.recipe);
      this.$emit("encyclopediaUpdated", this.recipe);
      this.exitSingleEncyclopedia();
    },
  },
  async created() {
    this.recipe = {
      ...(await this.$store.getters.getEncyclopediaById(this.id)),
    };
  },
};
</script>
<style scoped>
div.card-body .badge {
  white-space: pre-wrap;
}
div.editForm {
  min-width: 500px;
  border: 0.2rem gray solid;
  border-radius: 3px;
  padding: 1.5rem;
}
</style>
