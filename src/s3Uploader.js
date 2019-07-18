import AWS from 'aws-sdk';
import cookie from 'react-cookies';

AWS.config.update({
    region: 'us-east-2',
    credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId: 'us-east-2:ac98b5a0-530d-4be6-9c19-62092f31a730',
        Logins: {
            'cognito-idp.us-east-2.amazonaws.com/us-east-2_30BE5gxrZ': cookie.load('_ref_i_token_')
        }
    })
});

/*
    s3Uploader function expects two arguments.
        1) uploadData
        2) Key -> s3 object name
        3) dataType (eg. text, image, video)
*/
export function s3Uploader(uploadData, key, dataType) {
    let s3Bucket = new AWS.S3({
        params: {
            Bucket: 'askme-user-posts',
        }
    });
    let s3Obj = {
        Key: key,
        Body: uploadData,
        ACL: 'public-read',
        ContentType: getContentType(dataType)
    };
    s3Bucket.putObject(s3Obj, function(data, err) {
        if(err) {
            console.log('Error message', err, data);
        } else {
            console.log('S3 upload successful', data);
        }
    })
}

function getContentType(dataType) {
    switch(dataType) {
        case 'text':
            return 'txt';
        case 'image':
            return 'image/png';
        case 'video':
            return 'video/mp4';
        default:
            return 'txt';
    }
}