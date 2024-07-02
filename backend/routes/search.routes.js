import express from 'express';
import { filerSearch } from '../controllers/search.controller.js';

const router = express.Router();

router.get('/gifts', filerSearch)


export default router;
