import express from 'express';

// controller引入入口
import Render from '@controllers/render';

const Router: express.Router = express.Router();

/* --------- path: '/(:page).html' --------- */
Router.get('/report.html', Render.render.bind(Render));

export default Router;
