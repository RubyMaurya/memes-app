var AWS = require('aws-sdk');
var s3 = new AWS.S3({accessKeyId:'XXXXXXXXXXXX', secretAccessKey:'YYYYYYYYYYYY', region:'REGION'});
 
var params = {Bucket: 'test-bucket-tutorial', Key: 'images/myimage.jpg', ContentType: 'image/jpeg'};
s3.getSignedUrl('putObject', params, function (err, url) {
    console.log('Your generated pre-signed URL is', url);
});

