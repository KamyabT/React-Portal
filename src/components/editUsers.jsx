import { useParams } from "react-router-dom";
import MainContent from "./mainContent";
import Navbar from "./navbar";
import NewUserForm from "./newUserForm";
import PageHeader from "./pageHeader";
import Sidebar from "./sidebar";
import axios from "axios";
import React, { useState, useEffect } from "react";

const EditUsers = () => {
  const { id } = useParams();

  const [userdata, setUserdata] = useState([]);

  useEffect(() => {
    axios.get("/data.json").then(function (response) {
      setUserdata(response.data[id - 1]);
      return;
    });
  });

  return (
    <>
      <Navbar />
      <Sidebar />
      <PageHeader title={"ویرایش کاربر"} />
      <MainContent>
        <NewUserForm
          requestedUser={userdata}
          design={"d-flex flex-wrap newUserDesignPage"}
        />
      </MainContent>
    </>
  );
};

export default EditUsers;
