import { Router } from 'express';

class IndexRouter {
  constructor() {
    this.router = Router();
    this.router.get('/', this.homeRoute);
  }

  homeRoute(req, res, next) {
    res.render('index', { title: 'Express' });
  }
}

export default IndexRouter
