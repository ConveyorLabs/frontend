import { fetchVolumeAndSwaps } from "src/queries/fetchVolumeAndSwaps.mjs";
import { FeatureWrapper } from "../FeatureWrapper";
import { useState, useEffect } from "react";
import { fetchGasSaved } from "src/queries/fetchGasSaved.mjs";
import { MetricTitle, MetricValue, BorderedDiv, MetricWrapper } from "./styled";

export function Metrics() {
  const [totalVolume, setTotalVolume] = useState<string>("");
  const [totalSwaps, setTotalSwaps] = useState<number | string>("");
  const [totalUsers, setTotalUsers] = useState<string>("");
  const [totalGasSaved, setTotalGasSaved] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const volumeAndSwaps = await fetchVolumeAndSwaps();
        const gasSaved = await fetchGasSaved();

        if (volumeAndSwaps || gasSaved) {
          setTotalVolume(volumeAndSwaps.TotalVolume);
          setTotalSwaps(volumeAndSwaps.TotalSwaps);
          setTotalUsers(volumeAndSwaps.TotalUsers);
          setTotalGasSaved(gasSaved.TotalGasSaved);
        }
      } catch (error) {
        console.error("Error fetching Dune metrics:", error);
      }
    };

    fetchData();
  }, []);

  const metricDisplay = [
    { title: "Swap Volume", value: totalVolume },
    { title: "Trades Made", value: totalSwaps },
    { title: "Total Users", value: totalUsers },
    { title: "Gas Saved", value: totalGasSaved },
  ];
  return (
    <FeatureWrapper>
      <BorderedDiv>
        {metricDisplay.map((metric, index) => (
          <MetricWrapper key={index}>
            <MetricValue>{metric.value}</MetricValue>
            <MetricTitle>{metric.title}</MetricTitle>
          </MetricWrapper>
        ))}
      </BorderedDiv>
    </FeatureWrapper>
  );
}
