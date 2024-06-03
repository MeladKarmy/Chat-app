import React from "react";

const UserDetails = ({ params: { slug } }: { params: { slug: string } }) => {
  return <div>UserDetails {slug}</div>;
};

export default UserDetails;
