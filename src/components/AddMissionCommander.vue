<template>
  <div class="submit-form">
    <div v-if="!submitted">
    <h3>Nuevo Mission Commander</h3>
      <div class="form-group">
        <label for="title">Nombre </label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="explorer.name"
          name="title"
        />
      </div>
      <div class="form-group">
        <label for="title">Username</label>
        <input
          type="text"
          class="form-control"
          id="username"
          required
          v-model="explorer.username"
          name="username"
        />
      </div>
      <div class="form-group">
        <label for="title">Main Stack</label>
        <input
          type="text"
          class="form-control"
          id="mainStack"
          required
          v-model="explorer.mainStack"
          name="mainStack"
        />
      </div>
       <div class="form-group">
        <label for="title">Current Enrollment</label>
        <input
          type="checkbox"
          class="form-control"
          id="currentEnrollment"
          required
          v-model="explorer.currentEnrollment"
          name="currentEnrollment"
        />
      </div>
      <div class="form-group">
        <label for="title">Has Azure Certification</label>
        <input
          type="checkbox"
          class="form-control"
          id="hasAzureCertification"
          required
          v-model="explorer.hasAzureCertification"
          name="hasAzureCertification"
        />
      </div>
      <button @click="saveExplorer" class="btn btn-success">Agregar</button>
    </div>
    <div v-else>
      <h4> Mission commander creado exitosamente. </h4>
      <button class="btn btn-success" @click="newExplorer">Add</button>
    </div>
  </div>
</template>

<script>
import MissionCommanderService from "../services/MissionCommanderService";
export default {
  name: "add-explorer",
  data() {
    return {
      explorer: {
        id: null,
        name: "",
        username: "",
        mainStack: "",        
        currentEnrollment: true,
        hasAzureCertification: true
      },
      submitted: false
    };
  },
  methods: {
    saveExplorer() {
      var data = {
        name: this.explorer.name,
        username: this.explorer.username,
        mainStack: this.explorer.mainStack,        
        currentEnrollment: this.explorer.currentEnrollment,
        hasAzureCertification:  this.explorer.hasAzureCertification
      };
      MissionCommanderService.create(data)
        .then(response => {
          this.explorer.id = response.data.id;
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    newExplorer() {
      this.submitted = false;
      this.explorer = {};
    }
  }
};
</script>
