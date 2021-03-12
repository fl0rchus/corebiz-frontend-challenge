const url = "https://corebiz-test.herokuapp.com/api/v1/newsletter";
async function postNewsletter(info) {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: info.email,
        name: info.name,
      }),
    });
  } catch (error) {
    console.log(error);
  }
}
