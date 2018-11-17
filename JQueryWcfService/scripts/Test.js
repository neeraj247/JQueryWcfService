

var Type;
var Url;
var Data;
var ContentType;
var DataType;
var ProcessData;

function WCFJSON() {
    var userid = "1";
    Type = "POST";
    Url = "http://localhost:56881/Service1.svc/GetUser";
    Data = '{"Id": "' + userid + '"}';
    ContentType = "application/json; charset=utf-8";
    DataType = "json"; varProcessData = true;
    CallService();

} 

function CallService() {
    $.ajax({
        type: Type, //GET or POST or PUT or DELETE verb
        url: Url, // Location of the service
        data: Data, //Data sent to server
        contentType: ContentType, // content type sent to server
        dataType: DataType, //Expected data format from server
        processdata: ProcessData, //True or False
        success: function (msg) {//On Successfull service call
            ServiceSucceeded(msg);
        },
        error: ServiceFailed// When Service call fails
    });
}

function ServiceFailed(result) {
    alert('Service call failed: ' + result.status + '' + result.statusText);
    Type = null;
    varUrl = null;
    Data = null;
    ContentType = null;
    DataType = null;
    ProcessData = null;
}

function ServiceSucceeded(result) {
    if (DataType == "json") {
        resultObject = result.GetUserResult;

        for (i = 0; i < resultObject.length; i++) {
            alert(resultObject[i]);
        }

    }

    alert('success');

}

function ServiceFailed(xhr) {debugger
    alert(xhr.responseText);

    if (xhr.responseText) {
        var err = xhr.responseText;
        if (err)
            error(err);
        else
            error({ Message: "Unknown server error." })
    }

    return;
}

$(document).ready(
    function () {
        WCFJSON();
    }
);