import { createRouter, createWebHistory } from 'vue-router';

import featureRouter from './features/router.js';
// console.log('featureRoutes', featureRouter);
const featureRoutes = Object.values(featureRouter).map(specialRouter => specialRouter.routes).flat();
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  ].concat(featureRoutes),
});

export default router;

