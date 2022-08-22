import { useParams } from "react-router-dom";
import MainContent from "./mainContent";
import Navbar from "./navbar";
import NewUserForm from "./newUserForm";
import PageHeader from "./pageHeader";
import Sidebar from "./sidebar";
import axios from "axios";
import React, { useState, useEffect } from "react";

// const usersData = require("../testdata/testdata.json");

const EditUsers = () => {
  const { id } = useParams();

  const [userdata, setUserdata] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        console.log(response);
        setUserdata(response.data);
        return;
      });
  });

  return (
    <>
      <Navbar />
      <Sidebar />
      <PageHeader title={"ویرایش کاربر"} />
      <MainContent>
        {/* {console.log(userdata)} */}
        <h1>
          ------------------------------------------ {id} ---------------------{" "}
          {id}
        </h1>
        <NewUserForm
          requestedUser={userdata[id]}
          design={"d-flex flex-wrap newUserDesignPage"}
        />
      </MainContent>
    </>
  );
};

export default EditUsers;
