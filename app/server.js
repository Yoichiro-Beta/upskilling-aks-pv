const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
const port = 8000;
const pv = "/home/storage"

var cheapFilenameCache = [];

app.use(
    fileUpload({
        limits: {
            fileSize: 10000000,
        },
        abortOnLimit: true,
    })
);

app.use('/images', express.static(pv));

app.get('/', (req, res) => {
    var page = "";
    page = '<html><head><title>Another image repository</title></head>'+
    '<body><form action="/upload" method="POST" enctype="multipart/form-data"><input type="file" name="image" /><button type="submit">Upload</button></form>';

    for(var i=0;i<cheapFilenameCache.length;i++){
        page+='<img src="/images/'+cheapFilenameCache[i]+'"><br>';
    }
    
    page += '</body></html>';
    res.send(page);
});

app.post('/upload', (req, res) => {
    // Get the file that was set to our field named "image"
    const { image } = req.files;
    // If no image submitted, exit
    if (!image) return res.sendStatus(400);
    // If does not have image mime type prevent from uploading
    // Move the uploaded image to our upload folder
    image.mv(pv + '/' + image.name);
    console.log(image.name)
    // Add it to the cache
    cheapFilenameCache.push(image.name);
    // All good
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});