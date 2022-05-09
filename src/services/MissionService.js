import http from "../http-common";

class MissionService {
  getAll() {
    return http.get("/missions");
  }
  get(id) {
    return http.get(`/missions/${id}`);
  }
  create(data) {
    return http.post("/missions", data);
  }
  update(id, data) {
    return http.put(`/missions/${id}`, data);
  }
  delete(id) {
    return http.delete(`/missions/${id}`);
  }
}

export default new MissionService();
