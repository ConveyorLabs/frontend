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
    const TotalSwaps = totalRow.lifetime_swaps;
    const TotalUsers = totalRow.lifetime_users;
    const TotalGasSaved = `$${Math.round(totalRow.lifetime_gas_savings)}`;

    return { TotalVolume, TotalSwaps, TotalUsers, TotalGasSaved };
  } catch (error) {
    console.error("An error occurred:", error);
    // Handle the error gracefully or return default values
    const TotalVolume = "$1.53M+";
    const TotalSwaps = "2597";
    const TotalUsers = "1341";
    const TotalGasSaved = "$1345";

    return { TotalVolume, TotalSwaps, TotalUsers, TotalGasSaved };
  }
};
