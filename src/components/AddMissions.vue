<template>
  <div class="submit-form">
    <div v-if="!submitted">
    <h3>Nueva Mission</h3>
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
        <label for="title">Lang</label>
        <input
          type="text"
          class="form-control"
          id="username"
          required
          v-model="explorer.lang"
          name="username"
        />
      </div>
      <div class="form-group">
        <label for="title">Mission Commander</label>
        <input
          type="text"
          class="form-control"
          id="mainStack"
          required
          v-model="explorer.missionCommander"
          name="mainStack"
        />
      </div>
       <div class="form-group">
        <label for="title">Enrollments</label>
        <input
          type="number"
          class="form-control"
          id="enrollments"
          required
          v-model="explorer.enrollments"
          name="enrollments"
        />
      </div>
      <div class="form-group">
        <label for="title">Has Certification</label>
        <input
          type="checkbox"
          class="form-control"
          id="hasCertification"
          required
          v-model="explorer.hasCertification"
          name="hasCertification"
        />
      </div>
      <button @click="saveExplorer" class="btn btn-success">Agregar</button>
    </div>
    <div v-else>
      <h4> Mission creada exitosamente. </h4>
      <button class="btn btn-success" @click="newExplorer">Add</button>
    </div>
  </div>
</template>

<script>
import MissionService from "../services/MissionService";
export default {
  name: "add-explorer",
  data() {
    return {
      explorer: {
        id: null,
        name: "",
        lang: "",
        missionCommander: "",        
        enrollments: 1,
        hasCertification: true
      },
      submitted: false
    };
  },
  methods: {
    saveExplorer() {
      var data = {
        name: this.explorer.name,
        lang: this.explorer.lang,
        missionCommander: this.explorer.missionCommander,        
        enrollments: this.explorer.enrollments,
        hasCertification:  this.explorer.hasCertification
      };
      MissionService.create(data)
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
