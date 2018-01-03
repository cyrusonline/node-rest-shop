const express = require('express');
const router = express.Router();
router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'Handling GET requests to /productss'
    })
})
router.post('/',(req,res,next)=>{
    res.status(201).json({
        message:'Handling POST requests to /productss'
    })
})
router.get('/:productId',(req,res,next)=>{
  const id = req.params.productId;
  if(id === 'special'){
      res.status(200).json({
          message:'You discovered the special ID',
          id:id
      })
      }else{
          res.status(200).json({
            message:'You passed an Id'
          })
      }
  }
)
router.patch('/:productId',(req,res,next)=>{
    res.status(200).json({
        message: 'Update product!'
    })
  }
)
router.delete('/:productId',(req,res,next)=>{
    res.status(200).json({
        message: 'Update product!'
    })
  }
)

module.exports = router;