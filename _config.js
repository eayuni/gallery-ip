var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://eunice123:eunice123@galleryapp.rcmum.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    development: 'mongodb+srv://eunice123:eunice123@galleryapp.rcmum.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
   // test: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom-test?retryWrites=true&w=majority',
    test:'mongodb+srv://eunice123:eunice123@galleryapp.rcmum.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
}
module.exports = config;
