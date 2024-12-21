// Icon
import bookkeepingIcon from "../../photos/pricing/bookkeeping.svg";
import inventoryIcon from "../../photos/pricing/inventory.svg";
import transactionsIcon from "../../photos/pricing/transactions.svg";
import POSIcon from "../../photos/pricing/POS.svg";
import salesIcon from "../../photos/pricing/sales-report.svg";
import payrollIcon from "../../photos/pricing/payroll.svg";
import invoicesIcon from "../../photos/pricing/invoices.svg";
import quotesIcon from "../../photos/pricing/quotes.svg";
import businessesIcon from "../../photos/pricing/business.svg";
import Image from "next/image";

export default function LimmPerks() {
  const perksMainList = [
    [
      {
        perkText: "Bookkeeping",
        perkIcon: bookkeepingIcon,
      },
      {
        perkText: "Inventory Management",
        perkIcon: inventoryIcon,
      },
      {
        perkText: "Transactions Tracking",
        perkIcon: transactionsIcon,
      },
    ],
    [
      {
        perkText: "POS App",
        perkIcon: POSIcon,
      },
      {
        perkText: "Sales Reports",
        perkIcon: salesIcon,
      },
      {
        perkText: "Payroll",
        perkIcon: payrollIcon,
      },
    ],
    [
      {
        perkText: "Invoices",
        perkIcon: invoicesIcon,
      },
      {
        perkText: "Quotes",
        perkIcon: quotesIcon,
      },
      {
        perkText: "Business Insights",
        perkIcon: businessesIcon,
      },
    ],
  ];

  return (
    <section className="max-w-[850px] grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8 mt-10">
      {perksMainList.map((perkList, i1) => (
        <div key={i1} className="flex">
          <div className="">
            {perkList.map((perk, i2) => (
              <div key={i2} className="flex gap-3 justify-start items-center">
                <Image
                  src={perk.perkIcon}
                  alt={perk.perkText}
                  className="h-14"
                />
                <p className="text-[16px] lg:text-nowrap md:text-xl leading-[28.8px]">
                  {perk.perkText}
                </p>
              </div>
            ))}
          </div>
          {i1 !== perkList.length - 1 ? (
            <div className="w-[-1px] hidden md:block border-black border h-full md:mx-2 lg:mx-14"></div>
          ) : (
            ""
          )}
        </div>
      ))}
    </section>
  );
}
