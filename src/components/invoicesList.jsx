import React, { Component } from "react";
import InvoiceRecords from "./invoiceRecords";

class InvoicesList extends Component {
  state = {
    invoicesArList: [
      {
        id: 1,
        year: "mamad1",
        month: 0,
        total: 111,
        confirmed: 11,
        status: 1,
        remove: 1111,
      },
      {
        id: 2,
        year: "mamad1",
        month: 2,
        total: 222,
        confirmed: 22,
        status: 2,
        remove: 2222,
      },
      {
        id: 3,
        year: "mamad1",
        month: 3,
        total: 333,
        confirmed: 33,
        status: 3,
        remove: 3333,
      },
    ],
  };
  render() {
    return (
      <>
        <table className="table table-striped iranSansFont">
          <thead>
            <tr>
              <th scope="col" className="text-center">
                ردیف
              </th>
              <th scope="col" className="text-center">
                سال
              </th>
              <th scope="col" className="text-center">
                ماه
              </th>
              <th scope="col" className="text-center">
                مجموع
              </th>
              <th scope="col" className="text-center">
                تعداد تایید شده
              </th>
              <th scope="col" className="text-center">
                وضعیت
              </th>
              <th scope="col" className="text-center">
                حذف
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.invoicesArList.map((eachArItem) => (
              <InvoiceRecords
                id={eachArItem.id}
                arYear={eachArItem.year}
                arMonth={eachArItem.month}
                arTotal={eachArItem.total}
                arConfirmed={eachArItem.confirmed}
                arStatus={eachArItem.status}
                arRemove={eachArItem.remove}
              />
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default InvoicesList;

// {this.state.invoicesArList.map((eachMI) => (
//   <tr>{eachMI.id}</tr>
//   <tr></tr>
// ))}
