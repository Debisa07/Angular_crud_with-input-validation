const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://debisaabebesa:claster@cluster0.5nzmz5j.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));