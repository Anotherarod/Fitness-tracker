const mongoose = require("mongoose");

const Schema = mongoose.Schema;
//Schema for seed file data
const workoutSchema = Schema({
    day: {
        type: Date,
        default: () => new Date()

    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Exercise type"
        },
        name: {
            type: String,
            trim: true,
            required: "Exercise name"
        },
        duration: {
            type: Number,
            required: "Enter an exercise duration in minutes"
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        }
    }]
}, {

    toJSON: {
        // include any virtual properties when data is requested
        virtuals: true
      }
    }
  );
  
  // adds a dynamically-created property to schema
  workoutSchema.virtual("totalDuration").get(function () {
    // "reduce" array of exercises down to just the sum of their durations
    return this.exercises.reduce((total, exercise) => {
      return total + exercise.duration;
    }, 0);
  });
  
  const Workout = mongoose.model("Workout", workoutSchema);
  
  module.exports = Workout;




//Example schema build out

// let workoutSeed = [
//     {
//       day: new Date().setDate(new Date().getDate()-10),
//       exercises: [
//         {
//           type: "resistance",
//           name: "Bicep Curl",
//           duration: 20,
//           weight: 100,
//           reps: 10,
//           sets: 4
//         }
//       ]
//     },
//const UserSchema = new Schema({
    // firstName: {
    //     type: String,
    //     trim: true,
    //     required: "First Name is Required"
    //   },
    
    //   lastName: {
    //     type: String,
    //     trim: true,
    //     required: "Last Name is Required"
    //   },
    
    //   username: {
    //     type: String,
    //     trim: true,
    //     required: "Username is Required"
    //   },
    
    //   password: {
    //     type: String,
    //     trim: true,
    //     required: "Password is Required",
    //     validate: [({ length }) => length >= 6, "Password should be longer."]
    //   },
    
    //   email: {
    //     type: String,
    //     unique: true,
    //     match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    //   },
    
    //   userCreated: {
    //     type: Date,
    //     default: Date.now
    //   },
    
    //   lastUpdated: Date,
    
    //   fullName: String
    // });