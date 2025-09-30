const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyWZq0ELdYfxUscRScLefeN9PapFIikAyy9v1ZPlZp47Oa_v0onq9Bb8IZTvZMdYJjK/exec';

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
