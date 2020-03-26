const db = require("../models"); 

module.exports = (app) => {

  app.get("/api/workouts", (req, res) => {
    db.Workout.find()
    .then(dbWorkout => {
      console.log(dbWorkout)
      res.json(dbWorkout)
    })
    .catch(err => {
      res.json(err)
    });    
  });

  app.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(req.params.id,
    {$push: {exercises: req.body}}, 
    {runValidator:true, new:true}
    ).then(results => res.json(results))
    .catch(err => { 
      if (err) throw err
    });
  });

  app.post("/api/workouts", (req, res )=> {
    db.Workout.create(req.body)
    .then(marypoppins => {
      res.json(marypoppins);
    })
    .catch(err => {
      res.json(err);
    });    
  });
};
