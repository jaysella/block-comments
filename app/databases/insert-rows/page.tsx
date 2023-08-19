import Snippet from "@/app/_components/Snippet";
import {
  Block,
  BlockContent,
  BlockHeader,
  BlockTitle,
} from "@/app/_components/ui/block";
import { Metadata } from "next";
import { CODE, CODE_EXPLANATIONS, CUSTOMERS, Customer } from "./data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Databases: Insert Rows",
};

export default function Page() {
  return (
    <>
      <Snippet title="Code" language="sql" explanations={CODE_EXPLANATIONS}>
        {CODE}
      </Snippet>

      <Block>
        <BlockHeader>
          <BlockTitle title="Table Data: Customers" />
        </BlockHeader>

        <BlockContent withPadding={false}>
          <div className="relative w-full overflow-x-auto">
            <table className="w-full text-sm text-left text-slate-500 dark:text-slate-400">
              <thead>
                <tr className="text-xs uppercase border-b bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-400 border-slate-200 dark:border-slate-800">
                  <th className="px-6 py-2">CustomerID</th>
                  <th className="px-6 py-2">Name</th>
                  <th className="px-6 py-2">Affiliate_Company</th>
                  <th className="px-6 py-2">Email</th>
                  <th className="px-6 py-2">Address</th>
                  <th className="px-6 py-2">City</th>
                  <th className="px-6 py-2">Age</th>
                  <th className="px-6 py-2">Loyalty_Plan</th>
                </tr>
              </thead>

              <tbody>
                {CUSTOMERS.map((customer, i) => (
                  <TableRow
                    key={customer.customerId}
                    customer={customer}
                    lastItem={i === CUSTOMERS.length - 1}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </BlockContent>
      </Block>
    </>
  );
}

const TableRow = ({
  customer,
  lastItem,
}: {
  customer: Customer;
  lastItem: boolean;
}) => {
  return (
    <tr
      className={cn(
        "transition-colors hover:bg-slate-100 dark:hover:bg-slate-900",
        !lastItem ? "border-b border-slate-200 dark:border-slate-800" : ""
      )}
    >
      <td className="px-6 py-1">{customer.customerId}</td>
      <td className="px-6 py-1 text-slate-950 dark:text-slate-50">
        {customer.name}
      </td>
      <td
        className={cn(
          "px-6 py-1",
          !customer.affiliateCompany
            ? "text-purple-600 dark:text-purple-400 bg-purple-50 font-mono"
            : ""
        )}
      >
        {customer.affiliateCompany ?? "NULL"}
      </td>
      <td
        className={cn(
          "px-6 py-1",
          !customer.email
            ? "text-purple-600 dark:text-purple-400 bg-purple-50 font-mono"
            : ""
        )}
      >
        {customer.email ?? "NULL"}
      </td>
      <td
        className={cn(
          "px-6 py-1",
          !customer.address
            ? "text-purple-600 dark:text-purple-400 bg-purple-50 font-mono"
            : ""
        )}
      >
        {customer.address ?? "NULL"}
      </td>
      <td
        className={cn(
          "px-6 py-1",
          !customer.city
            ? "text-purple-600 dark:text-purple-400 bg-purple-50 font-mono"
            : ""
        )}
      >
        {customer.city ?? "NULL"}
      </td>
      <td className="px-6 py-1">{customer.age}</td>
      <td className="px-6 py-1 font-mono">
        {customer.loyaltyPlan ? "TRUE" : "FALSE"}
      </td>
    </tr>
  );
};
