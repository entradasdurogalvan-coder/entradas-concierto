const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxTPmxWmVoZbTqa4Ds7mJjF1v56iscKN_o_Xs2kWn_jHOq7Ox6a_d-QV_5Wo-R9nxZy0w/exec';

exports.handler = async function(event, context) {
  // Headers para CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, OPTIONS'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL + '?action=count');
    const data = await response.json();
    
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        count: 0, 
        available: 100,
        error: 'Error conectando con Google Sheets'
      })
    };
  }
};
