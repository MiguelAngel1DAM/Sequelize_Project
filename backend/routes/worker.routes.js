module.exports = app => {
    const workers = require("../controllers/workers.controller");

    var upload = require('../multer/upload');
  
    var router = require("express").Router();
  
    router.post("/", upload.single('file'), workers.create);
  
    router.get("/", workers.findAll);
  
    router.get("/:id", workers.findOne);
  
    router.put("/:id", upload.single('file'), workers.update);
  
    router.delete("/:id", workers.delete);
  
    app.use("/api/workers", router);
  }