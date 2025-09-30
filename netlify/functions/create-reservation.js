const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwh1ifdjqrrKGFHbkvE6UzLRvQ16NrrfhclowjOPHZ3aC33QShUCDyGLOo2aNFUzTSS/exec';

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL + '?action=create', {
      method: 'POST',
      body: event.body
    });

    const data = await response.json();
    
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error creando reserva' })
    };
  }
};