<template>
<h4>Mission</h4>
  <div v-if="currentExplorer" class="edit-form">
    <form>
      <div class="form-group">
        <label for="title">Nombre</label>
        <input type="text" disabled class="form-control" id="title"
          v-model="currentExplorer.name"
        />
      </div>
      <div class="form-group">
        <label for="title">Lang</label>
        <input type="text" disabled class="form-control" id="title"
          v-model="currentExplorer.lang"
        />
      </div>
      <div class="form-group">
        <label for="title">Mission Commander</label>
        <input type="text" disabled class="form-control" id="title"
          v-model="currentExplorer.missionCommander"
        />
      </div>
      <div class="form-group">
        <label for="title">Enrollments</label>
        <input type="number" class="form-control" id="title"
          v-model="currentExplorer.enrollments"
        />
      </div>
    </form>
    <button class="btn btn-danger mr-2" @click="deleteExplorer">
      Eliminar Mission
    </button>
    <button type="submit" class="btn btn-info mr-2" @click="updateExplorer">
      Actualizar
    </button>
    <p>{{ message }}</p>
  </div>
  <div v-else>
    <br />
    <p> Selecciona una mission. </p>
  </div>
</template>
<script>
import MissionService from "../services/MissionService";
export default {
  name: "explorer",
  data() {
    return {
      currentExplorer: null,
      message: ''
    };
  },
  methods: {
    getExplorer(id) {
      MissionService.get(id)
        .then(response => {
          this.currentExplorer= response.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    deleteExplorer() {
      MissionService.delete(this.currentExplorer.id)
      .then(response => {
        console.log(response.data);
        this.$router.push({ name: "explorers" });
      })
      .catch(e => {
          console.log(e);
      });
    },
    updateExplorer() {
      MissionService.update(this.currentExplorer.id, this.currentExplorer)
        .then(response => {
          console.log(response.data);
          this.message = 'Se actualizó correctamente';
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getExplorer(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
