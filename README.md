# React + Vite

1. make a  folder 
2 . open cmd and type mkdir folder-name (server)

  --> npm init -y
      npm i express cors mongodb dotenv 
      code .
      make index.js file 
      type cmd nodemon index.js
open package.json and go scripts and type "start" : " node index.js"


       now go index.js --> 
const express = require('express')
const cors  = require('cors')
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());


// Checking is it work or not 
app.get('/',(req,res) =>{
    res.send('Added')
})

// Start the Express server
app.listen(port, () => {
    console.log(`Coffee Server is running on port ${port}`);
  });

-------->>>>>>>>>

go mongodb and added database access .
go home page and click connect and go driver copy full code and paste it server site 


require('dotenv').config() // for password security 

create .env file to secure your id pass
DB_USER='jersycollection'
DB_PASS='MKt43iCaFA01Ry4k'
console.log(process.env.DB_USER); //check it, it work or not

--> create .gitignore file and type it node_modules
.env

--> go index.js 

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.x6gil.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

--->Create a post request 

  app.post('/jersy', async(req,res) =>{
        const newJersy = req.body;
        console.log(newJersy);
        
    })
    

Now go to client site to make a Post request --> after that 
 
need  to make database  --> const jersyCollection = client.db('jersyDB').collection('jersy');

now go to post section and insert the data also send it 

const result = await jersyCollection.insertOne(newJersy);
        res.send(result)
        
now go to client site and make a alert if it is work  --> after it 

make a read data properties -->


  app.get('/jersy', async(req,res) =>{
        const cursor = jersyCollection.find();
        const result = await cursor.toArray();
        res.send(result)
    })

   

 



3 . open cmd and type npm create vite@latest name-of-your-project -- --template react (client)
   go file using cd type  --  npm install react-router-dom localforage match-sorter sort-by 
 

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

@tailwind base;
@tailwind components;
@tailwind utilities;

npm i -D daisyui@latest

set up router 


  --> POST Request  to server 

 //Send data to server
    fetch("http://localhost:5000/jersy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJersy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });


  make a alert if it is work  --> 
 
  if (data.insertedId) {
            Swal.fire({
                title: 'Success!',
                text: 'Jersey Added Successfully',
                icon: 'success',
                confirmButtonText: 'Close'
              })
        }







