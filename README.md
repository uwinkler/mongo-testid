# mongo-testid
A simple node lib to generate deterministic Mongo ObjectIds - useful to write mockup data


## Why?

Let's assume you have following Mongoose Schema:

```javascript
var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  
var AuthorSchema = Schema({
  name    : String,
  stories : [{ type: Schema.Types.ObjectId, ref: 'Story' }]
});

var StorySchema = Schema({
  title    : String,
  author : [{ type: Schema.Types.ObjectId, ref: 'Author' }]

});

var Story  = mongoose.model('Story', storySchema);
var Author = mongoose.model('Author', personSchema);
```

 Mongo-TestID enables you to write your seed data and unit tests like this:

```javascript

var ID = require('mongo-testid');


Strory.create(
  {
    _id: ID('The Prince and the Pauper')
    name:'The Prince and the Pauper'
    author:ID('Mark Twain')
  });
  
  Author.create( 
   {
    _id:ID('Mark Twain'),
    stories[ ID('The Prince and the Pauper') ]
   });
 
```

Lets say your REST API ```localhost/stories/:id`` will return you a story by a given id, you may write your tests like this:

```javascript

 it('Should respond with an story', function (done) {
        request(APP)
            .get('http://localhost/stories/' + ID('The Prince and the Pauper'))
            .expect(200)
            .end(function (err, res) {
                done(err);
            });
    });
```

Easy, right?

## Installation

   npm install mongo-testid --save-dev
   


## Usage

```

  var ID = require('mongo-testid');
  
  var id0 = ID('Peter.Lustig') // will generate '373436383838636132616661'
  var id1 = ID('Fritz.Fuchs') // gives you '323665626335366661633863'
  
  var idx = ID('Fritz.Fuchs') // gives you '323665626335366661633863' again
  
  var id2 = ID() // will generate '393362383835616466653064'
  var id3 = ID() // will generate '353561353430303861643162'
  
  ID.setCounter(0)
  
  var id4 = ID() // will generate '393362383835616466653064' again (see id2)
  
  
```

To print a table of key/objectid use ``ID.table()`` :

```
┌──────────────┬──────────────────────────────┐
│ Fritz.Fuchs  │ 323665626335366661633863     │
│ Peter.Lustig │ 373436383838636132616661     │
└──────────────┴──────────────────────────────┘
```


## Projects using mongo-testid

* http://www.skolar.de 
