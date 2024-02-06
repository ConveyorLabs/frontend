import axios from "axios";

const DUNE_API_KEY = "bD366SiifDvzvuLbRny5gwhj29tEUa7Q";

export const fetchGasSaved = async () => {
  try {
    const response = await axios.get(
      `https://api.dune.com/api/v1/query/3324376/results`,
      {
        headers: {
          "x-dune-api-key": DUNE_API_KEY,
        },
      }
    );

    // Extracting the value from the '_col0' key
    const gasSaved = response.data.result.rows[0].protocol_fee;

    // Formatting the gas saved as a USD amount
    const TotalGasSaved = `$${Math.round(gasSaved * 2.6)}`;

    return { TotalGasSaved };
  } catch (error) {
    console.error("An error occurred:", error);

    // Set TotalGasSaved to $798 in case of an error
    const TotalGasSaved = "$798";

    return { TotalGasSaved };
  }
};
