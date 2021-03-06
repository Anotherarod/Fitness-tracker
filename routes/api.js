const Workout = require("../models/workout.js")

module.exports = function(app){ 
    app.get("/api/workout",function(req,res){  
        Workout.find()
        .then(data =>{  
            res.json(data)
        })
        .catch(err => { 
            res.json(err)
        })
    });


    app.post("/api/workout",function (req,res){    
        Workout.create({})
        .then(data => res.json(data))
        .catch(err => { 
            res.json(err)
        })
    });

    // app.get("/api/workout/range",function(req,res){  
    //     Workout.find()
    //     .then(data =>{  
    //         res.json(data)
    //     })
    //     .catch(err => { 
    //         res.json(err)
    //     })
    // });


    // app.post("/api/workout/range",function (req,res){    
    //     Workout.create({})
    //     .then(data => res.json(data))
    //     .catch(err => { 
    //         res.json(err)
    //     })
    // });

    app.put("/api/workout/:id",({body,params},res)=>{   
        Workout.findByIdAndUpdate(  
         params.id,
         {$push:{exercises:body} },
         {new: true,runValidators:true }
        )
        .then(data => res.json(data))
        .catch(err => { 
            res.json(err)
        })
    });
}