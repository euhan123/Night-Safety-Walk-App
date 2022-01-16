// https://uezbw6sq10.execute-api.us-west-2.amazonaws.com/dev

exports.handler = async (event) => {
    console.log(event)
    const customerId = event.pathParameters.customerId;
    const customer = {'customerId': customerId, 'userName': "User " + customerId};
    const response = {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*"
        }, 
        body: JSON.stringify(customer),
    };
    return response;
};
