const mongoose=require('mongoose');
var Taksuser=new mongoose.Schema({
    id: {
        type: 'object',
        primaryKey: true
      },
      title: {
        type: 'string'
      },
      description: {
        type: 'string'
      },
      complete_at: {
        type: 'date'
      },
      
    });
    module.exports= mongoose.model("Tasks",Taksuser)