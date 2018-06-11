const fetchItuneData = require('../controller/fetchItuneData');
module.exports = (app) =>{
    app.get('/' , fetchItuneData);
}