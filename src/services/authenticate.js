const authenticate = async (url, body, onSuccess, onFailure) => {
  try {
    const promise = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const authToken = promise.headers.get("Authorization");
    document.cookie = `x-auth-token=${authToken}`;

    const res = await promise.json();
    console.log("Response", res);

    if (res.username && authToken) {
      onSuccess({
        username: res.username,
        id: res._id,
        stocks: res.stocks,
      });
    } else {
      onFailure();
    }
  } catch (e) {
    onFailure();
  }
};

export default authenticate;
