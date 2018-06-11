const itc = require('itunesconnectanalytics');
const Itunes = itc.Itunes;
const AnalyticsQuery = itc.AnalyticsQuery;

const username = 'kit@asiato.asia';
const password = 'kitCambodia2017';
const appId = "1210617957";

//************************** */
    //function to use
/************************** */

var instance = new Itunes(username, password, {
    errorCallback: (e) => {
        return {
            error: "Error Logging in : " + e
        }
    },
    successCallback: (d) => {
        return {
            message: "Logged In"
        }
    }
})

instance.getApps((error, data) => {
    res.send({
        data: JSON.stringify(data, null, 2)
    })
})

var query = AnalyticsQuery.metrics(appId, {
    measures: itc.measures.units
}).date('2018-01-01', '2018-05-01');

instance.request(query, (error, result)=>{
    result: JSON.stringify(result, null, 2)
});