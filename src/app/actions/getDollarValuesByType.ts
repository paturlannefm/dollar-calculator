const urlBase = "https://mercados.ambito.com/";

export async function getDollarValuesByType(dollarType: string) {
  let data;

  let url;

  switch (dollarType) {
    case "Dolar Oficial":
      url = `${urlBase}dolar/oficial/grafico/anual`;
      break;
    case "Dolar Blue":
      url = `${urlBase}dolar/informal/grafico/anual`;
      break;
    case "Dolar Bolsa":
      url = `${urlBase}dolarrava/mep/grafico/anual`;
      break;
    default:
      console.log("Tipo de dólar no válido");
      return;
  }
  try {
    const response = await fetch(`${url}`, {
      method: "GET",
    });
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
