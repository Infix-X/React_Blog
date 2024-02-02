import express from 'express';
import {MongoClient} from 'mongodb'
const app = express();
app.use(express.json());
app.get('/api/articles/:name', async(req, res) => {
    const {name} = req.params;
    const client = new MongoClient('mongodb://127.0.0.1:27017');
    await client.connect();
    const db =client.db('react-blog-db');
    const article =await db.collection('articles').findOne({name});
    if(article){
        res.json(article);
    }else{
        res.status(404).send("not found");
    }
    
})


// app.post("/hello", (req, res) => {
    
//     const responseMessage = `Hello ${req.body.name}!\n` +
//                             `My birthplace is ${req.body.dateOfBirth}\n` +
//                             `My gender is ${req.body.gender}\n` +
//                             `My nationality is ${req.body.nationality}\n` +
//                             `My address is ${req.body.address}\n` +
//                             `My ID number is ${req.body.idNumber}`;

//     //res.send(responseMessage);
// });

app.get('/api/articles/:name/upvotes',(req,res)=>{
    const {name}=req.params;
    const article = ArticleInfo.find(a=>a.name===name);
});
app.get('/api/articles/:name/upvotes',async(req,res)=>{
    const {name}=req.params;
    const client = new MongoClient('mongodb://127.0.0.1:27017');
    await client.connect();

    const db =client.db('react-blog-db');
    await db.collection('articles').updateOne({name},{
        $inc:{upvotes:1}
    })

    const article = await db.collection('articles').findOne({name});

    if(article){
        article.upvotes +=1;
        res.send(`The article name is ${article.name} and it has upvote are ${article.upvotes}`)
    }

    else{
        res.status(400).send("Article not found")
        console.log(`${article.name} such article not found!!`);
    }
    console.log(`The article name is ${article.name} and it has upvote are ${article.upvotes}`)
})

app.listen(8000, () => {
    console.log("Server listening on port 8000...");
});
