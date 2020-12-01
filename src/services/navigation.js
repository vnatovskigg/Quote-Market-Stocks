export const getNavigation = (user) => {
  const authLinks = [
    {
      title: "About",
      link: "/about",
      logout: false,
    },
    {
      title: "Contact",
      link: "/contact",
    },
    {
      title: "Portfolio",
      link: "/portfolio",
    },
    {
      title: "Profile",
      link: `/profile/${user && user.id}`,
    },
  ];

  const guestLinks = [
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Contact",
      link: "/contact",
    },
    {
      title: "Register",
      link: "/register",
    },
    {
      title: "Login",
      link: "/login",
    },
  ];

  const loggedIn = user && user.loggedIn;
  return loggedIn ? authLinks : guestLinks;
};

export const getNewsNav = () => {
  return  [
    {
      title: "Markets",
      link: "/news/markets",
    },
    {
      title: "Technology",
      link: "/news/technology",
    },
    {
      title: "Politics",
      link: "/news/politics",
    },
    {
      title: "Businessweek",
      link: '/news/businessweek',
    },
    {
      title: "Crypto",
      link: "/news/cryptocurrencies",
    },
    {
      title: "Wealth",
      link: "/news/wealth",
    },
    {
      title: "Latest",
      link: "/news/latest",
    },
    {
      title: "World",
      link: '/news/world',
    },
    {
      title: "Stocks",
      link: "/news/stocks",
    },
    {
      title: "Forex",
      link: '/news/forex',
    },
    {
      title: "Brexit",
      link: '/news/brexit',
    },
  ];
}
