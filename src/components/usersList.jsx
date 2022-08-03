import React, { Component } from "react";
import Navbar from "./navbar";
import PageHeader from "./pageHeader";
import Sidebar from "./sidebar";
import MainContent from "./mainContent";
import UserRecord from "./userRecord";
import { act } from "react-dom/test-utils";
import { FaYenSign } from "react-icons/fa";

class UsersList extends Component {
  state = {
    userslists: [
      {
        id: 1,
        name: "mamad1",
        personel: 800005,
        userstatus: "act",
        NID: 30964155,
        phone: 9123456789,
        send: false,
        invoice: 2,
        edit: 3,
        remove: 4,
      },
      {
        id: 2,
        name: "mamad2",
        personel: 800006,
        userstatus: "act",
        NID: 30545155,
        phone: 9124556789,
        send: true,
        invoice: 3,
        edit: 4,
        remove: 5,
      },
      {
        id: 3,
        name: "mamad2",
        personel: 800006,
        userstatus: "act",
        NID: 30545155,
        phone: 9124556789,
        send: true,
        invoice: 3,
        edit: 4,
        remove: 5,
      },
    ],
  };
  render() {
    return (
      <>
        <Navbar />
        <Sidebar />
        <PageHeader value={"لیست کاربران"} />
        <MainContent>
          <table className="table table-striped iranSansFont">
            <thead>
              <tr>
                <th scope="col" className="text-center">
                  ردیف
                </th>
                <th scope="col" className="text-center">
                  شماره پرسنلی
                </th>
                <th scope="col" className="text-center">
                  نام و نام خانوادگی
                </th>
                <th scope="col" className="text-center">
                  وضعیت کاربری
                </th>
                <th scope="col" className="text-center">
                  کد ملی
                </th>
                <th scope="col" className="text-center">
                  شماره تماس
                </th>
                <th scope="col" className="text-center">
                  ارسال فیش حقوقی
                </th>
                <th scope="col" className="text-center">
                  فیش حقوقی
                </th>
                <th scope="col" className="text-center">
                  ویرایش
                </th>
                <th scope="col" className="text-center">
                  حذف
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.userslists.map((listItem) => (
                <UserRecord
                  key={listItem.id}
                  id={listItem.id}
                  personelid={listItem.personel}
                  fuName={listItem.name}
                  userStatus={listItem.userstatus}
                  nationalID={listItem.NID}
                  phone={listItem.phone}
                  sms={listItem.send}
                />
              ))}
            </tbody>
          </table>
        </MainContent>
      </>
    );
  }
}

export default UsersList;

// personel: 2,
// userstatus: act,
// NID: 30964155,
// phone: 9123456789,
// send: false,
// invoice: 2,
// edit: 3,
// remove: 4,
