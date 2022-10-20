import "./index.css";

function SupplierItem({ item, states, vehicle, suppliers }) {
  const stateName = states.find((state) => state.id === item.stateId);

  const vehicleMake = suppliers
    .filter((vh) => item.name === vh.name)
    .map((v) => v.vehicleMakeId);

  const vehicleName = vehicle
    .filter((vhcl) => vehicleMake.includes(vhcl.id))
    .map((v) => v.name);

  return (
    <div className="item">
      <div>
        <div className="item-head">
          <span className="name">{item.name}</span>
          <span className="state">{stateName?.name}</span>
        </div>
        <span className="score">
          <div className="score-wrap">
            <span
              className="stars-active"
              style={{ width: `${(Math.round(item.rating) / 5) * 100}%` }}
            >
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
            </span>
            <span className="stars-inactive">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
            </span>
          </div>
        </span>
      </div>
      <span className="vehicle">{vehicleName.join(", ")}</span>
    </div>
  );
}

export default SupplierItem;
