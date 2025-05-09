import { Router } from 'express';
import { produtocontroller } from '../controllers/produtocontroller';

const router = Router();
router.post('/', produtocontroller.criar);
router.get('/', produtocontroller.listar);
router.get('/', produtocontroller.obter);
router.put('/', produtocontroller.atualizar);
router.delete('/', produtocontroller.deletar);

export default router;