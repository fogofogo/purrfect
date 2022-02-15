import { Spinner } from "react-bootstrap";
import "./Statistic.scss";

interface IStatistic {
  label: string;
  value: number | string;
  Icon: any;
  loading: boolean;
}

const Statistic = ({ label, value, Icon, loading }: IStatistic) => {
  return (
    <>
      <div className="statistic">
        <div className="icon">{Icon ? <Icon /> : null}</div>
        <div className="content">
          <span className="label">{label}</span>
          <div>
            {loading ? (
              <Spinner animation="border" variant="danger" size="sm" />
            ) : (
              <span className="value">{value}</span>
            )}{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistic;
