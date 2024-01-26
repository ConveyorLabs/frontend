import axios from "axios";

const DUNE_API_KEY = "bD366SiifDvzvuLbRny5gwhj29tEUa7Q";

export const fetchVolumeAndSwaps = async () => {
  const response = await axios.get(
    `https://api.dune.com/api/v1/query/3325921/results`,
    {
      headers: {
        "x-dune-api-key": DUNE_API_KEY,
      },
    }
  );

  const totalRow = response.data.result.rows.find(
    (row) => row.blockchain === "= TOTAL ="
  );

  const TotalVolume = `$${Math.round(
    totalRow.lifetime_volume
  ).toLocaleString()}`;
  const TotalSwaps = totalRow.lifetime_swaps;

  return { TotalVolume, TotalSwaps };
};
