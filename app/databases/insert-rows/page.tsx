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
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/app/_components/ui/tooltip";
import { InfoIcon, KeyRoundIcon } from "lucide-react";

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
          <BlockTitle title="Resulting Table Data: Customers" />
        </BlockHeader>

        <BlockContent withPadding={false}>
          <div className="relative w-full overflow-x-auto">
            <table className="w-full text-sm text-left text-slate-500 dark:text-slate-400">
              <thead>
                <tr className="text-xs uppercase border-b bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-400 border-slate-200 dark:border-slate-800">
                  <th className="px-6 py-2">
                    <span className="flex flex-row items-center gap-2">
                      Customer_ID
                      <Tooltip>
                        <TooltipTrigger>
                          <KeyRoundIcon size={12} className="text-blue-500" />
                        </TooltipTrigger>
                        <TooltipContent side="bottom" className="w-36">
                          <p className="font-sans font-normal normal-case">
                            Primary Key, autogenerated by SQLite
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </span>
                  </th>
                  <th className="sticky left-0 px-6 py-2 bg-slate-100 dark:bg-slate-900">
                    Name
                  </th>
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

      <div className="container p-2 mx-auto my-2 text-xs text-center text-slate-500">
        <p>
          This sample customer data is for illustrative purposes only. It was
          randomly generated using Mockaroo, with some manual adjustments.
        </p>
      </div>
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
        "transition-colors hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-slate-950 dark:hover:text-slate-50 group",
        !lastItem ? "border-b border-slate-200 dark:border-slate-800" : ""
      )}
    >
      <td className="px-6 py-1">{customer.customerId}</td>
      <td className="sticky left-0 px-6 py-1 bg-slate-100 dark:bg-slate-900 text-slate-950 dark:text-slate-50">
        {customer.name}
      </td>
      <td
        className={cn(
          "px-6 py-1",
          !customer.affiliateCompany
            ? "text-purple-600 dark:text-purple-400 group-hover:bg-purple-100 dark:group-hover:bg-purple-900 transition-colors group-hover:text-purple-700 dark:group-hover:text-purple-300 dark:bg-purple-950 bg-purple-50 font-mono"
            : ""
        )}
      >
        {customer.affiliateCompany ?? "NULL"}
      </td>
      <td
        className={cn(
          "px-6 py-1",
          !customer.email
            ? "text-purple-600 dark:text-purple-400 group-hover:bg-purple-100 dark:group-hover:bg-purple-900 transition-colors group-hover:text-purple-700 dark:group-hover:text-purple-300 dark:bg-purple-950 bg-purple-50 font-mono"
            : ""
        )}
      >
        {customer.email ?? "NULL"}
      </td>
      <td
        className={cn(
          "px-6 py-1",
          !customer.address
            ? "text-purple-600 dark:text-purple-400 group-hover:bg-purple-100 dark:group-hover:bg-purple-900 transition-colors group-hover:text-purple-700 dark:group-hover:text-purple-300 dark:bg-purple-950 bg-purple-50 font-mono"
            : ""
        )}
      >
        {customer.address ?? "NULL"}
      </td>
      <td
        className={cn(
          "px-6 py-1",
          !customer.city
            ? "text-purple-600 dark:text-purple-400 group-hover:bg-purple-100 dark:group-hover:bg-purple-900 transition-colors group-hover:text-purple-700 dark:group-hover:text-purple-300 dark:bg-purple-950 bg-purple-50 font-mono"
            : ""
        )}
      >
        {customer.city ?? "NULL"}
      </td>
      <td className="px-6 py-1">{customer.age}</td>
      <td className="px-6 py-1 font-mono">
        <span className="grid items-center grid-cols-2 gap-2">
          {customer.loyaltyPlan ? "TRUE" : "FALSE"}
          <Tooltip>
            <TooltipTrigger>
              <InfoIcon
                size={14}
                className="text-slate-400 dark:text-slate-600"
              />
            </TooltipTrigger>
            <TooltipContent side="top" align="end" className="w-36">
              <p className="font-sans font-normal">
                This customer{" "}
                <strong>{customer.loyaltyPlan ? "is" : "is not"}</strong> a on a
                loyalty plan.
              </p>
            </TooltipContent>
          </Tooltip>
        </span>
      </td>
    </tr>
  );
};