import AWS from 'aws-sdk';

const ses = new AWS.SES({ region: 'eu-west-1' });

async function sendMail(event, context) {

  const params = {
    Source: 'wesleyoliveirap@gmail.com',
    Destination: {
      ToAddresses: ['wesleyoliveirap@gmail.com'],
    },
    Message: {
      Body: {
        Text: {
          Data: 'Hello from codingly',
        },
      },
      Subject: {
        Data: 'Test Mail',
      },
    },
  };

  try {
    const result = await ses.sendEmail(params).promise();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export const handler = sendMail;


