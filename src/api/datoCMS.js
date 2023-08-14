export default async function handler(req, res) {
    const API_TOKEN = '0cdbb7f3263fe7aa1f2a381485746e'; // Substitua pelo seu token de API
    const API_URL = 'https://graphql.datocms.com/'; // Substitua pela URL correta da API
  
    const query = `
      {
        allProjetos {
            title
            description
            imgurl
            slug
        }
      }
    `;
  
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });
  
      const data = await response.json();

      return data.data.allProjetos
    } catch (error) {
      console.error('Erro ao obter modelos da API:', error);
      res.status(500).json({ error: 'Erro ao obter modelos da API' });
    }
  }
  