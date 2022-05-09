import { createWebHistory, createRouter } from "vue-router";
const routes =  [
  {
    path: "/",
    alias: "/explorers",
    name: "explorers",
    component: () => import("./components/ExplorersList")
  },
  {
    path: "/explorer/:id",
    name: "explorer-details",
    component: () => import("./components/Explorer")
  },
  {
    path: "/add",
    name: "add-explorer",
    component: () => import("./components/AddExplorer")
  },
  {
    alias: "/missioncommander",
    name: "missioncommander",
    component: () => import("./components/missionCommanderList")
  },
  {
    path: "/missioncommander/:id",
    name: "missioncommander-details",
    component: () => import("./components/missionCommander")
  },
  {
    path: "/addmc",
    name: "add-missioncommander",
    component: () => import("./components/AddMissionCommander")
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
