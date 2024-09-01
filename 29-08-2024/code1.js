
test> use chitkara
switched to db chitkara
chitkara> show collectionos

chitkara> show collections
user
chitkara> db.user.insertOne({date:ISODate()})
{
  acknowledged: true,
  insertedId: ObjectId('66cff829c54cc5a9e946b799')
}
chitkara> db.user.find()
[
  {
    _id: ObjectId('66cebb12d152508b9c46b799'),
    name: 'Jai',
    age: 28,
    class: 'G9'
  },
  {
    _id: ObjectId('66cebd5cd152508b9c46b79a'),
    name: 'Jai',
    age: '19',
    marks: '88',
    subject: 'Maths',
    rating: '1'
  },
  {
    _id: ObjectId('66cebd5cd152508b9c46b79b'),
    name: 'Aditi',
    age: '20',
    marks: '92',
    subject: 'Physics',
    rating: '2'
  },
  {
    _id: ObjectId('66cebd5cd152508b9c46b79c'),
    name: 'Ravi',
    age: '21',
    marks: '85',
    subject: 'Chemistry',
    rating: '3'
  },
  {
    _id: ObjectId('66cebd5cd152508b9c46b79d'),
    name: 'Simran',
    age: '22',
    marks: '90',
    subject: 'Biology',
    rating: '4'
  },
  {
    _id: ObjectId('66cebd5cd152508b9c46b79e'),
    name: 'Karan',
    age: '23',
    marks: '87',
    subject: 'Computer Science',
    rating: '5'
  },
  {
    _id: ObjectId('66cff829c54cc5a9e946b799'),
    date: ISODate('2024-08-29T04:25:13.104Z')
  }
]
chitkara> db.user.find().pretty

[
  {
    _id: ObjectId('66cebb12d152508b9c46b799'),
    name: 'Jai',
    age: 28,
    class: 'G9'
  },
  {
    _id: ObjectId('66cebd5cd152508b9c46b79a'),
    name: 'Jai',
    age: '19',
    marks: '88',
    subject: 'Maths',
    rating: '1'
  },
  {
    _id: ObjectId('66cebd5cd152508b9c46b79b'),
    name: 'Aditi',
    age: '20',
    marks: '92',
    subject: 'Physics',
    rating: '2'
  },
  {
    _id: ObjectId('66cebd5cd152508b9c46b79c'),
    name: 'Ravi',
    age: '21',
    marks: '85',
    subject: 'Chemistry',
    rating: '3'
  },
  {
    _id: ObjectId('66cebd5cd152508b9c46b79d'),
    name: 'Simran',
    age: '22',
    marks: '90',
    subject: 'Biology',
    rating: '4'
  },
  {
    _id: ObjectId('66cebd5cd152508b9c46b79e'),
    name: 'Karan',
    age: '23',
    marks: '87',
    subject: 'Computer Science',
    rating: '5'
  },
  {
    _id: ObjectId('66cff829c54cc5a9e946b799'),
    date: ISODate('2024-08-29T04:25:13.104Z')
  }
]
chitkara> db.user.findOnr({Ravi})
ReferenceError: Ravi is not defined
chitkara> db.user.findOnr({name:"Ravi"})
TypeError: db.user.findOnr is not a function
chitkara> db.user.findOne({name:"Ravi"})
{
  _id: ObjectId('66cebd5cd152508b9c46b79c'),
  name: 'Ravi',
  age: '21',
  marks: '85',
  subject: 'Chemistry',
  rating: '3'
}
chitkara> db.user.findOnr({Ravi})
ReferenceError: Ravi is not defined
chitkara> db.user.findOne({name:"Ravi"})
{
  _id: ObjectId('66cebd5cd152508b9c46b79c'),
  name: 'Ravi',
  age: '21',
  marks: '85',
  subject: 'Chemistry',
  rating: '3'
}
chitkara> db.user.findOne()
{
  _id: ObjectId('66cebb12d152508b9c46b799'),
  name: 'Jai',
  age: 28,
  class: 'G9'
}
chitkara> db.user.findOne(_id: ObjectId('66cebb12d152508b9c46b799'))
Uncaught:
SyntaxError: Unexpected token, expected "," (1:19)

> 1 | db.user.findOne(_id: ObjectId('66cebb12d152508b9c46b799'))
    |                    ^
  2 |

chitkara> db.user.findOne(ObjectId('66cebb12d152508b9c46b799'))
{
  _id: ObjectId('66cebb12d152508b9c46b799'),
  name: 'Jai',
  age: 28,
  class: 'G9'
}
chitkara> db.user.findOne( ObjectId('66cebd5cd152508b9c46b79c'))
{
  _id: ObjectId('66cebd5cd152508b9c46b79c'),
  name: 'Ravi',
  age: '21',
  marks: '85',
  subject: 'Chemistry',
  rating: '3'
}
chitkara> db.user.findOne({name:"J"})
{
  _id: ObjectId('66cebb12d152508b9c46b799'),
  name: 'Jai',
  age: 28,
  class: 'G9'
}
chitkara> db.user.findOne({name:"J"})
{
  _id: ObjectId('66cebb12d152508b9c46b799'),
  name: 'Jai',
  age: 28,
  class: 'G9'
}