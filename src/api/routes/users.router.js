const express = require('express');
const router = express.Router();
const UserService = require('../../services/user.service');
const service = new UserService();


router.get('/', (req, res) => {
  const { id } = req.params;
  const user = service.findOne(id);
  res.json(user);
  // const { limit, offseft } = req.query;
  // if( limit && offseft) {
  //   res.json({
  //     limit,
  //     offseft
  //   });
  // }res.send('No hay parametros');

});
router.get('/:id', (req, res)=>{
  const { id } = req.params;
  const user = service.findOne(id);
  res.json(user);
});

router.post('/', (req, res) =>{
  const body = req.body;
  const newUser = service.create(body);
  res.status(201).json({
    message: 'created',
    newUser
  })
});

router.patch('/:id', (req, res) =>{
  const { id } = req.params;
  const body = req.body;
  const user = service.update(id, body);
  res.json({
    message: 'update',
    user,
  });
});

router.delete('/:id', (req, res) =>{
  const { id } = req.params;
  const rta = service.delete(id);
  res.json({
    message: 'deleted',
    rta,
  });
});

module.exports = router;
