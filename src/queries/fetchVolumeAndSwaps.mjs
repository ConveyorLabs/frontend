import axios from "axios";

const DUNE_API_KEY = "bD366SiifDvzvuLbRny5gwhj29tEUa7Q";

function formatCurrency(value) {
  if (value >= 1e6) {
    return `$${(value / 1e6).toFixed(2)}M+`;
  } else if (value >= 1e3) {
    return `$${(value / 1e3).toFixed(2)}K+`;
  } else {
    return `$${value}`;
  }
}

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

  const TotalVolume = formatCurrency(totalRow.lifetime_volume);
  console.log(TotalVolume);
  const TotalSwaps = totalRow.lifetime_swaps;
  console.log(TotalSwaps);
  const TotalUsers = totalRow.lifetime_users;
  console.log(TotalUsers);

  return { TotalVolume, TotalSwaps, TotalUsers };
};
