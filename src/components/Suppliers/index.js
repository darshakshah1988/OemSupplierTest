import { useQuery } from "@tanstack/react-query";
import SupplierItem from "../SupplierItem";
import "./index.css";

function Suppliers() {
  const { isLoading, error, data } = useQuery(["repoData"], () =>
    fetch(
      "http://portalapi.partscheck.com.au/api.php?class=Access&method=fetchExtensionQuoteDetails&hash=DDD123456xx"
    ).then((res) => res.json())
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  const suppliersList = data?.packet?.suppliers;
  const suppliers = [
    ...new Map(suppliersList?.map((item) => [item["name"], item])).values(),
  ];
  const states = data?.packet?.states;
  const vehicleMakes = data?.packet?.vehicleMakes;
  return (
    <div className="list-wraper">
      <h2 className="list-header">PartsCheck OEM Suppliers</h2>
      {suppliers
        ?.filter((item) => item.supplierType === "OEM Supplier")
        .map((item, _i) => (
          <SupplierItem
            key={item.id}
            item={item}
            suppliers={suppliersList}
            states={states}
            vehicle={vehicleMakes}
          />
        ))}
    </div>
  );
}

export default Suppliers;
