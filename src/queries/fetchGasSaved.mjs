import axios from "axios";

const DUNE_API_KEY = "bD366SiifDvzvuLbRny5gwhj29tEUa7Q";

export const fetchGasSaved = async () => {
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
  const TotalGasSaved = `$${Math.round(gasSaved).toLocaleString() * 2}`;

  return { TotalGasSaved };
};
