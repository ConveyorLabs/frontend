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

    const formatter = new Intl.NumberFormat("en-US", {
      style: "decimal", // Use "currency" for TotalGasSaved if you want currency formatting
      maximumFractionDigits: 0, // Adjust this value for decimal places, if needed
    });

    const TotalVolume = formatCurrency(totalRow.lifetime_volume);
    const TotalSwaps = formatter.format(totalRow.lifetime_swaps);
    const TotalUsers = formatter.format(totalRow.lifetime_users);
    // For TotalGasSaved, assuming you want to round it and add a dollar sign
    const TotalGasSaved = `$${formatter.format(
      Math.round(totalRow.lifetime_gas_savings)
    )}`;

    console.log(TotalVolume, TotalSwaps, TotalUsers, TotalGasSaved);

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
