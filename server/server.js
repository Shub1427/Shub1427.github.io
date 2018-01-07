const express        	= require('express');
const path        	= require('path');
const app            	= express();

app.use(express.static('../'));

app.get('/', (req, res) => {
  console.log("Inside GET Index");
  res.sendFile(path.resolve(__dirname, "..", 'index.html'));
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('Running server @ ', port);
});
