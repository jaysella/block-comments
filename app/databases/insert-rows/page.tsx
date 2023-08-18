import Snippet from "@/app/_components/Snippet";
import {
  Block,
  BlockContent,
  BlockHeader,
  BlockTitle,
} from "@/app/_components/ui/block";
import { Metadata } from "next";
import { CODE, CODE_EXPLANATIONS, CUSTOMERS, Customer } from "./data";

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

        <BlockContent>
          <div className="relative w-full overflow-x-auto border rounded-lg border-slate-200 dark:border-slate-800">
            <table className="w-full text-sm text-left text-slate-500 dark:text-slate-400">
              <thead>
                <tr className="text-xs uppercase border-b bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-400 border-slate-200 dark:border-slate-800">
                  <th className="px-6 py-4">CustomerID</th>
                  <th className="px-6 py-4">Name</th>
                  <th className="px-6 py-4">Affiliate_Company</th>
                  <th className="px-6 py-4">Email</th>
                  <th className="px-6 py-4">Address</th>
                  <th className="px-6 py-4">City</th>
                  <th className="px-6 py-4">Age</th>
                  <th className="px-6 py-4">Loyalty_Plan</th>
                </tr>
              </thead>

              <tbody>
                {CUSTOMERS.map((customer: Customer) => (
                  <TableRow key={customer.customerId} customer={customer} />
                ))}
              </tbody>
            </table>
          </div>
        </BlockContent>
      </Block>
    </>
  );
}

const TableRow = ({ customer }: { customer: Customer }) => {
  return (
    <tr className="transition-colors border-b hover:bg-slate-100 dark:hover:bg-slate-900 border-slate-200 dark:border-slate-800">
      <td className="px-6 py-1">{customer.customerId}</td>
      <td className="px-6 py-1 text-slate-950 dark:text-slate-50">
        {customer.name}
      </td>
      <td className="px-6 py-1">{customer.affiliateCompany ?? "NULL"}</td>
      <td className="px-6 py-1">{customer.email ?? "NULL"}</td>
      <td className="px-6 py-1">{customer.address ?? "NULL"}</td>
      <td className="px-6 py-1">{customer.city ?? "NULL"}</td>
      <td className="px-6 py-1">{customer.age}</td>
      <td className="px-6 py-1">{customer.loyaltyPlan ? "TRUE" : "FALSE"}</td>
    </tr>
  );
};
