import ProductsTag from "./ProductsListResult";
import ExposantsTag from "./ExposantsListResult";

export default function ResearchResult({ filter }) {
  return filter == "Exposant" ? (
    <ExposantsTag />
  ) : filter == "Product" ? (
    <ProductsTag />
  ) : null;
}
