# mongo-testid
A simple node lib to generate deterministic Mongo ObjectIds - useful to write mockup data

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
