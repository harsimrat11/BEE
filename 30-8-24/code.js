// db

// use abcd //database name


db.user.insertMany([ { name: "Harley Davidson", age: 24, marks: 95, subject: "Physical Edu" }, { name: "Josh", age: 25, marks: 87, subject: "Maths" }, { name: "Karan Aujla", age: 28, marks: 91, subject: "Economics" }, { name: "Sultaan Dhillon", age: 27, marks: 95, subject: "Science" }, { name: "Tarsem Jassar", age: 20, marks: 89, subject: "History" }] )

db.col.countDocuments();

db.col.estimate.countDocuments();

//change name of university and subject
db.user.updateMany(
    {}, // This empty filter selects all documents in the collection.
    {
      $set: { 
        subject: "Data Science",            // Update the subject field to "Data Science".
        address: "Indian School of Business" // Add a new field `address` with the specified value.
      }
    }
  )
  
//add grades
  db.user.updateMany(
    {}, // Empty filter to select all documents
    [
      {
        $set: {
          grade: {
            $cond: [
              { $gt: ["$marks", 95] }, "O+", // If marks > 95, set grade to "O+"
              {
                $cond: [
                  { $gt: ["$marks", 90] }, "A+", // If marks > 90, set grade to "A+"
                  {
                    $cond: [
                      { $gt: ["$marks", 85] }, "A", // If marks > 85, set grade to "A"
                      null // If none of the above, set grade to null or skip it
                    ]
                  }
                ]
              }
            ]
          }
        }
      }
    ]
  )
  

  //find data where age=22 and marks=90
  db.user.find({
       age: 22,
       marks: 90
     })
    
//find students where marks>=80 and age >=18
db.user.find({
    marks: { $gte: 80 },
    age: { $gte: 18 }
  })
  

  //find students with grade A+
  db.user.find({ grade: "A+" })

  //OR
   db.user.find( { $or: [ { marks: { $lt: 90 } }, { age:{ $eq: 20} } ] } )
  //NOR
   db.user.find( { $nor: [ { marks:90 }, { grade: "A+" } ]  } )
  //NOT
   db.user.find( { marks: { $not: { $gte: 80 } } } )
   //find a user
   db.user.find( { $and: [ { name:  "Tarsem Jassar"  }, { marks: { $eq: 89 } } ] } )