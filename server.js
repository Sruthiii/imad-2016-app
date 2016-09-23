var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
 'article-one':{
 title:'article-one | Sruthi',
    heading: 'article one',
    content:`
     <meta name="viewport" content="width=device-width,initial-scale=1" />
    <p>
    <img src="http://cdn.playbuzz.com/cdn/f297c57c-307a-4fc4-832a-ce1a6aa3aa52/d61881fe-f181-4464-84fa-cfca7bec59a5.jpg" />
    </p>
    <p>
    <font size="5">
           <marquee>  The Chosen One </marquee>
        </font>
        </p>`
},
'article-two':{
title:'article two | Sruthi',
heading:'article two',
content:`
 <meta name="viewport" content="width=device-width,initial-scale=1" />
<p>
        <img src="http://www.heyuguys.com/images/2014/04/HermioneGranger.jpg"/>
        </p>
        <p>
        <h4>
        <font size="7">
       <marquee>  The brightest witch of her age </marquee>
        </font>
        </h4>
    </p>`

           },
'article-three':{
title: 'article-three | Sruthi',
heading:'article three',
content:`
 <meta name="viewport" content="width=device-width,initial-scale=1" />
     <p>
     <img src="https://s-media-cache-ak0.pinimg.com/236x/0a/d1/08/0ad1087e60d716237ceb63872059f79a.jpg"/>
     </p>
     <p>
     <h4>
     <font size="7">
     <marquee> Our King </marquee>
     </h4>
     </font>
     </p> `
 }
};
function createTemplate (data) {
    var title=data.title;
    var heading=data.heading;
    var content=data.content;

var htmlTemplate=`
<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
         <link href="/ui/style.css" rel="stylesheet" />
    </head>
<body>
    <div class="container">

    <div>
        <a href="/">Home</a>
        <a href="/Article-one">Article one</a>
        <a href="Aarticle-two">Article two</a>
        <a href="/Article-three">Article three</a>
      <h3>
      ${heading}
    </div>
    <div>
        ${content}
    </div>
</body>
</html>


`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req,res) {
    var articleName=req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});