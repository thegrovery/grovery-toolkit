const projectId = 'rt73bnod';
const dataset = 'production';

export interface Resources {
    title: string;
    description: string;
    url: string;
}

export async function fetchResources(): Promise<Resources[]> {
  const endpoint = `https://${projectId}.api.sanity.io/v1/data/query/${dataset}`;
  const query = encodeURIComponent('*[_type == "resource"]');
    
  const response = await fetch(`${endpoint}?query=${query}`);
  
  if (!response.ok) {
      console.error("Sanity API returned an error:", response.status, response.statusText);
      return [];
  }

  const result = await response.json();
  return result.result;
}
export async function fetchResourceBySlug(slug: string) {
  const endpoint = `https://${projectId}.api.sanity.io/v1/data/query/${dataset}`;
  const query = encodeURIComponent(`*[_type == "resource" && slug.current == "${slug}"]`);

  const response = await fetch(`${endpoint}?query=${query}`);

  if (!response.ok) {
    console.error("Sanity API returned an error:", response.status, response.statusText);
    return null;
  }

  const result = await response.json();
  console.log("Sanity API response:", result);
  return result.result[0]; // since it should return only one item
}
