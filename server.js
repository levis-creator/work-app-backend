import express from "express";
const app =express();
let products=[
    {
        id:1,
        name:'product 1',
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia ut, deserunt ratione laborum quibusdam nesciunt nihil hic aut! Veritatis hic corrupti similique veniam delectus, neque necessitatibus id cupiditate suscipit a!"
    },
    {
        id:2,
        name:'product 2',
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia ut, deserunt ratione laborum quibusdam nesciunt nihil hic aut! Veritatis hic corrupti similique veniam delectus, neque necessitatibus id cupiditate suscipit a!"
    },
    {
        id:3,
        name:'product 3',
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia ut, deserunt ratione laborum quibusdam nesciunt nihil hic aut! Veritatis hic corrupti similique veniam delectus, neque necessitatibus id cupiditate suscipit a!"
    },
    {
        id:4,
        name:'product 4',
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia ut, deserunt ratione laborum quibusdam nesciunt nihil hic aut! Veritatis hic corrupti similique veniam delectus, neque necessitatibus id cupiditate suscipit a!"
    },
    {
        id:5,
        name:'product 5',
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia ut, deserunt ratione laborum quibusdam nesciunt nihil hic aut! Veritatis hic corrupti similique veniam delectus, neque necessitatibus id cupiditate suscipit a!"
    },
]
// middleware
app.use(express.json())

// request

// feching all data
app.get("/products", (req, res)=>{
    res.json(products)
})
// adding data to database
app.post("/products", (req, res)=>{
    const data = req.body
    products.push(data)
    return res.status(201).json(data)
})
// single data
app.get('/products/:id', (req, res)=>{
    const {id}=req.params
    const singleData= products.filter((product)=>product.id==id)
    return res.json(singleData[0]).status(200)
})
// delete data
app.delete('/products/:id', (req, res)=>{
    const {id }=req.params
    const filteredData=products.filter((product)=>product.id!=id)
    products=filteredData
    return res.status(204).json(products)
})


app.listen(3000,()=>console.log("Running on port 3000"))