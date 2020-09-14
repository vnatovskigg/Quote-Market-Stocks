import React, { useContext, useEffect, useState } from "react";
import PageWrapper from "../../components/page-wrapper";
import ContentWrapper from "../../components/content-wrapper";
import UserContext from "../../Context";
import Portfolio from "../../components/portfolio";

const PortfolioPage = () => {
  const [username, setUsername] = useState("");
  const [stocks, setStocks] = useState([]);
  const context = useContext(UserContext);

  useEffect(() => {
    if (context.user) {
      setUsername(context.user.username);
      setStocks(context.user.stocks);
    }
  }, [context.user]);

  return (
    <PageWrapper>
      <ContentWrapper title={`${username} Portfolio`} layout="column">
        {stocks !== undefined
          ? stocks.map((stock, index) => {
              return <Portfolio key={index} stock={stock} />;
            })
          : null}
      </ContentWrapper>
    </PageWrapper>
  );
};

export default PortfolioPage;
