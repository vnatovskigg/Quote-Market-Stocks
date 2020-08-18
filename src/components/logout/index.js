import React, { useContext } from "react";
import PageWrapper from "../page-wrapper";
import ContentWrapper from "../content-wrapper";
import UserContext from "../../Context";
import { useHistory } from "react-router-dom";

const Logout = () => {
  const history = useHistory();
  const context = useContext(UserContext);
  return (
    <PageWrapper>
      <ContentWrapper>
        {context.logOut()}
        {history.push("/")}
      </ContentWrapper>
    </PageWrapper>
  );
};

export default Logout;
