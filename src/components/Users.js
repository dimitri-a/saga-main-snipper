import React, { Component, PropTypes } from "react";

const Users = ({ data, getData }) => (
  <div>
    hi from users
    <button onClick={() => getData()}>Get data</button>
    <ul>{data.map(user => <li>{user.name}</li>)}</ul>
  </div>
);

export default Users;
