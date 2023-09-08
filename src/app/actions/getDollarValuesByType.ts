const urlBase = "https://mercados.ambito.com/";

export async function getDollarValuesByType(
  dollarType: string,
  selectedTime: string
) {
  let data;

  let url;

  switch (dollarType) {
    case "Dolar Oficial":
      url = `${urlBase}dolar/oficial/grafico`;
      break;
    case "Dolar Blue":
      url = `${urlBase}dolar/informal/grafico`;
      break;
    case "Dolar Bolsa":
      url = `${urlBase}dolarrava/mep/grafico`;
      break;
    default:
      console.log("Tipo de dólar no válido");
      return;
  }
  try {
    const response = await fetch(`${url}/${selectedTime}`, {
      method: "GET",
    });
    if (!response.ok) {
      console.log("Error");
      return;
    }

    data = await response.json();
  } catch (e) {
    console.log("...logging error...");
    throw e;
  }

  return data;
}
