const baseURL = "http://server-nodejs.cit.byui.edu:3000/";

export async function convertToJson(response) {
  const jsonResponse = await response.json();
  if (response.ok) {
    return jsonResponse;
  }
  throw {
    name: "servicesError",
    message: jsonResponse,
  };
}

export default class ExternalServices {
  async checkout(payload) {
    return fetch(`${baseURL}checkout/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).then(convertToJson);
  }
}
