const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxTPmxWmVoZbTqa4Ds7mJjF1v56iscKN_o_Xs2kWn_jHOq7Ox6a_d-QV_5Wo-R9nxZy0w/exec';


exports.handler = async function(event, context) {
  const { id } = event.queryStringParameters;
  
  if (!id) {
    return { 
      statusCode: 400, 
      body: JSON.stringify({ error: 'Se necesita ID' }) 
    };
  }

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL + '?action=get&id=' + id);
    const data = await response.json();
    
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error verificando reserva' })
    };
  }
};
