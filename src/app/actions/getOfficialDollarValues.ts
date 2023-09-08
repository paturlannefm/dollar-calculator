const url = "https://mercados.ambito.com//dolar/oficial/grafico/anual";

export async function getOfficialDollarValues() {
  let data;

  try {
    const response = await fetch(
      `${url}`,
      // const response = await fetch(`${url}&page=${pageNumber}${search}${filter}`,
      {
        method: "GET",
      }
    );
    if (!response.ok) {
      console.log("Error");
      return;
    }

    data = await response.json();
  } catch (e) {
    console.log("...logging error to our system...");
    throw e;
  }

  return data;
}
