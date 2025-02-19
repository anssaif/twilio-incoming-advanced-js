console.log('starting playground.js');
 
async function corpusLookup(query) {
  const corpusUrl = `https://primary-production-0e5f.up.railway.app/webhook-test/89b8bb2f-ec09-4809-b0ae-f90f7e9eab8d`;
  const n8nAPIHeaders = {
    "Content-Type": 'application/json'
  };
  const postBody = {
    corpus_id: 'test-corpus-id',
    query: query,
    max_chunks: 5 // hardcoding
  }

  const response = await fetch(corpusUrl, {
    method: 'POST',
    headers: n8nAPIHeaders,
    body: JSON.stringify(postBody),
  });

  console.log('n8n API response status:', response.status);

  if (!response.ok) {
    const errorText = await response.text();
    console.error('Fixie API error:', errorText);
    throw new Error(`Fixie API error: ${response.status}, ${errorText}`);
  }

  const data = await response.json();
  console.log('n8n API response body:', data);
  return data;
}

corpusLookup('i have issue with my pc, no wifi');