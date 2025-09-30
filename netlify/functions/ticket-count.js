const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwh1ifdjqrrKGFHbkvE6UzLRvQ16NrrfhclowjOPHZ3aC33QShUCDyGLOo2aNFUzTSS/exec';

exports.handler = async function(event, context) {
  try {
    const response = await fetch(GOOGLE_SCRIPT_URL + '?action=count');
    const data = await response.json();
    
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        count: 0, 
        available: 100,
        error: 'Error conectando con Google Sheets'
      })
    };
  }
};