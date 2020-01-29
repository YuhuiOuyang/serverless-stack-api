import AWS from "aws-sdk";

export function call(action, params) {
    // AWS.config.update({region: "my-region"}) Assuming same region as the main function for now
    const dynamoDb = new AWS.DynamoDB.DocumentClient();

    return dynamoDb[action](params).promise();
}