import ProductsTag from "./ProductsListResult";
import ExposantsTag from "./ExposantsListResult";

export default function ResearchResult({ filter, translate }) {
  return filter == "Exposant" ? (
    <ExposantsTag translate={translate} />
  ) : filter == "Product" ? (
    <ProductsTag />
  ) : null;
}
