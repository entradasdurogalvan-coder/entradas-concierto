const fetch = require('node-fetch');
const querystring = require('querystring');

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const data = JSON.parse(event.body);

  // Convertir los datos a form data
  const formData = querystring.stringify({
    operation: 'create-reservation',
    name: data.name,
    email: data.email,
    phone: data.phone,
    ticketType: data.ticketType,
    price: data.price
  });

  const response = await fetch('https://script.google.com/macros/s/AKfycbxTPmxWmVoZbTqa4Ds7mJjF1v56iscKN_o_Xs2kWn_jHOq7Ox6a_d-QV_5Wo-R9nxZy0w/exec', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formData
  });

  const responseData = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(responseData)
  };
};
