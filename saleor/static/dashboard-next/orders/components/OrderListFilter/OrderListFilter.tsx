import * as React from "react";

import { Filter, FilterTab, FilterTabs } from "@saleor/components/TableFilter";
import i18n from "../../../i18n";

export type OrderListFilterTabs = "all" | "toFulfill" | "toCapture" | "custom";

interface OrderListFilterProps {
  currentTab: OrderListFilterTabs;
  filtersList: Filter[];
  onAllProducts: () => void;
  onToFulfill: () => void;
  onToCapture: () => void;
  onCustomFilter: () => void;
}

const OrderListFilter: React.StatelessComponent<OrderListFilterProps> = ({
  filtersList,
  currentTab,
  onAllProducts,
  onToFulfill,
  onToCapture,
  onCustomFilter
}) => (
  <>
    <FilterTabs
      currentTab={["all", "toFulfill", "toCapture", "custom"].indexOf(
        currentTab
      )}
    >
      <FilterTab label={i18n.t("All Orders")} onClick={onAllProducts} />
      <FilterTab label={i18n.t("Ready to fulfill")} onClick={onToFulfill} />
      <FilterTab label={i18n.t("Ready to capture")} onClick={onToCapture} />
      {currentTab === "custom" && filtersList && filtersList.length > 0 && (
        <FilterTab
          onClick={onCustomFilter}
          value={0}
          label={i18n.t("Custom Filter")}
        />
      )}
    </FilterTabs>
  </>
);
OrderListFilter.displayName = "OrderListFilter";
export default OrderListFilter;
