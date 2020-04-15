// const {db} = require('./server/db')
const app = require('./server')

const PORT = 8080

app.listen(PORT, () => {
  console.log("Knock, knock");
  console.log("Who's there?");
  console.log(`Your server, listening on port ${PORT}`);
})
