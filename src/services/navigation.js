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
      link: "/markets",
    },
    {
      title: "Technology",
      link: "/technology",
    },
    {
      title: "Politics",
      link: "/politics",
    },
    {
      title: "Businessweek",
      link: '/businessweek',
    },
    {
      title: "Crypto",
      link: "/cryptocurrencies",
    },
    {
      title: "Wealth",
      link: "/wealth",
    },
    {
      title: "Latest",
      link: "/latest",
    },
    {
      title: "World",
      link: '/world',
    },
    {
      title: "Stocks",
      link: "/stocks",
    },
    {
      title: "Forex",
      link: '/forex',
    },
    {
      title: "Brexit",
      link: '/brexit',
    },
  ];
}
