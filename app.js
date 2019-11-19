// jshint esversion:6
//adding some text constants
const homeStringConst = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis doloremque eos esse? Qui iste ipsam quia aperiam reprehenderit, nam, temporibus mollitia adipisci molestiae eveniet quisquam nesciunt maxime nobis tenetur placeat.';
const aboutStringConst = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. mollitia adipisci molestiae eveniet quisquam nesciunt maxime nobis tenetur placeat.';
const contactStringConst = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. mollitia adipisci molestiae';

let postlist=[];
postlist[0]={
    heading: 'Day 1',
    body:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis doloremque eos esse? Qui iste ipsam quia aperiam reprehenderit, nam, temporibus mollitia adipisci molestiae eveniet quisquam nesciunt maxime nobis tenetur placeat.'
         }
postlist[1]={
    heading: 'Day 2',
    body:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis doloremque eos esse? Qui iste ipsam quia aperiam reprehenderit, nam, temporibus mollitia adipisci molestiae eveniet quisquam nesciunt maxime nobis tenetur placeat.'
         }


//Requiring modules
const express = require ('express');
const bodyParser = require ('body-parser');
const ejs = require ('ejs');

//creating express server
const app = express();


// pointing static folder
app.use(express.static('public'));

//telling express to use bodyParser to parse response body
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine','ejs' );


app.get('/', function (req,res) {
    res.render('home' , {content:homeStringConst, posts: postlist});
});

app.get('/about', function (req,res) {
    console.log('rendering about');
    res.render('about' , {content:aboutStringConst});
});
app.get('/contact', function (req,res) {
    res.render('contact' , {content:contactStringConst});
});

app.get('/compose', function(req, res){
    res.render('compose');
});

app.post('/compose', function (req, res) {
    let title=req.body.title;
    let postBody= req.body.post;
    let newPost = {
        heading: title,
        body: postBody
    }
    postlist.push(newPost);
    res.redirect('/');
})




//asking server to listen at port 3000
app.listen('3000',function () {
    console.log('server started at port 3000');
})