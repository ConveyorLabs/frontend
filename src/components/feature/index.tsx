import CenteredTitleAndSubtitle from "../CenteredTitleAndSubtitle";
import { FeatureWrapper } from "../FeatureWrapper";
import wireframe from "../../assets/wireframe.png";

export function Feature() {
  return (
    <FeatureWrapper>
      <CenteredTitleAndSubtitle
        title="Better Trades, Lower Fees"
        subtitle="Benefit from zero volume fees and zero positive slippage fees on all trades. Conveyor takes the best routes from leading aggregators, and makes them even better. On average, our traders save 50% gas fees on every trade."
        buttonText="See How We Take Fees"
        buttonUrl="https://docs.conveyor.finance/feestructure/"
      />
      <div style={{ height: "50px" }} />
      <div>
        <img
          style={{
            display: "flex",
            alignSelf: "center",
            margin: "0 auto",
            width: "100%",
          }}
          src={wireframe}
          alt="wireframe"
        />
      </div>
    </FeatureWrapper>
  );
}
