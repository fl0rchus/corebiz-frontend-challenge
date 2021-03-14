import { urlNewsletter, headers } from "./urls";

async function postNewsletter(info) {
  try {
    const response = await fetch(urlNewsletter, {
      method: "POST",
      headers,
      body: JSON.stringify({
        email: info.email,
        name: info.name,
      }),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
export default postNewsletter;
