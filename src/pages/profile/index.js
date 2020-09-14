import React, { useContext, useEffect, useState } from "react";
import PageWrapper from "../../components/page-wrapper";
import ContentWrapper from "../../components/content-wrapper";
import UserContext from "../../Context";
import Profile from "../../components/profile";

const ProfilePage = () => {
  const [username, setUsername] = useState("");
  const context = useContext(UserContext);

  useEffect(() => {
    if (context.user) {
      setUsername(context.user.username);
    }
  }, [context.user]);

  return (
    <PageWrapper>
      <ContentWrapper title={`${username} Profile`} layout="column">
        <Profile></Profile>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default ProfilePage;
