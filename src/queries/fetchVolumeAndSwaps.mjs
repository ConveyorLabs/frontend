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
  try {
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

    if (!totalRow) {
      throw new Error("Total row not found in response");
    }

    const TotalVolume = formatCurrency(totalRow.lifetime_volume);
    console.log("Total Volume:", TotalVolume);
    const TotalSwaps = totalRow.lifetime_swaps;
    console.log("Total Swaps:", TotalSwaps);
    const TotalUsers = totalRow.lifetime_users;
    console.log("Total Users:", TotalUsers);

    return { TotalVolume, TotalSwaps, TotalUsers };
  } catch (error) {
    console.error("An error occurred:", error);
    // Handle the error gracefully or return default values
    const TotalVolume = "$1.53M+";
    const TotalSwaps = "2597";
    const TotalUsers = "1341";
    console.log("Total Users:", TotalUsers);

    return { TotalVolume, TotalSwaps, TotalUsers };
  }
};
