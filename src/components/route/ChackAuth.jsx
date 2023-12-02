import React from "react";

const ChackAuth = ({ userRole, role, children }) => {
  console.log(role);

  return role?.some((e) => e === userRole) ? children : <h1>Not Found</h1>;
};

export default ChackAuth;
