const getNavigation = (user) => {
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
    {
      title: "Logout",
      link: "/logout",
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

export default getNavigation;
