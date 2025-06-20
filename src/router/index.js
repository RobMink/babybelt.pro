import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    },
    {
      path: "/belt",
      name: "How to Make a Belt",
      beforeEnter() {
        window.location.href = "https://docs.google.com/document/d/13pu9LH_nKmDJY-V2nZXMY8CHur7INB6-9V5sKlAuCuE/edit?tab=t.0#heading=h.e01bdd2to5po";
      },
    },
    {
      path: "/bom",
      name: "Baby Belt Pro Bill of Materials",
      beforeEnter() {
        window.location.href = "https://docs.google.com/spreadsheets/d/19PbR3nFbQ4-eIOTU0kmoTl5-mHv_KsTnUdfFXekWg-I/edit?gid=0#gid=0";
      },
    },
    {
      path: "/bomxl",
      name: "Baby Belt Pro XL Bill of Materials",
      beforeEnter() {
        window.location.href = "https://github.com/RobMink/BabyBeltPro/blob/main/documentation/Klipper/mods/baby_belt_pro_XL.md";
      },
    },
    {
      path: "/build",
      name: "Build Guide by Amiiglows",
      beforeEnter() {
        window.location.href = "https://github.com/RobMink/BabyBeltPro/blob/main/documentation/Fabreeko_kit_build_guide.md";
      },
    },
    {
      path: "/discord",
      name: "Link to Join the Baby Belt Discord",
      beforeEnter() {
        window.location.href = "https://discord.gg/nVmeNJJSH2";
      },
    },
    {
      path: "/docs",
      name: "BabyBelt Documentation",
      beforeEnter() {
        window.location.href = "https://github.com/RobMink/BabyBeltPro/blob/main/documentation/readme.md";
      },
    },
    {
      path: "/github",
      name: "My GitHub page",
      beforeEnter() {
        window.location.href = "https://github.com/RobMink/BabyBeltPro";
      },
    },
    {
      path: "/heyjohnlookatthis",
      name: "HEY JOHN LOOK AT THIS",
      beforeEnter() {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
      },
    },
    {
      path: "/kit",
      name: "Buy a kit!",
      beforeEnter() {
        window.location.href = "https://www.fabreeko.com/products/baby-belt-pro-kit-by-honeybadger";
      },
    },
    {
      path: "/fabreeko-kit",
      name: "Buy a kit from Fabreeko!",
      beforeEnter() {
        window.location.href = "https://www.fabreeko.com/products/baby-belt-pro-kit-by-honeybadger";
      },
    },
    {
      path: "/west3d-kit",
      name: "Buy a kit from West3D!",
      beforeEnter() {
        window.location.href = "";
      },
    },
    {
      path: "/print",
      name: "STL Files to print your own Baby Belt Pro!",
      beforeEnter() {
        window.location.href = "https://github.com/RobMink/BabyBeltPro/tree/main/STLs";
      },
    },
    {
      path: "/yt",
      name: "Rob Mink's YouTube Channel",
      beforeEnter() {
        window.location.href = "https://www.youtube.com/c/robmink";
      },
    },
  ],
})

export default router
