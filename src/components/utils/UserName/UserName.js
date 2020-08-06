import React, { Fragment, useState } from "react";
import { Form } from "react-bootstrap";
import Swal from "sweetalert2";

const UserName = () => {
  const [name, setName] = useState({
    UserName: "",
  });

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const sendToName = (e) => {
    e.preventDefault();
    if (name.UserName === "") {
      setError(true);
      return;
    }

    setError(false);
  };

  return (
    <Fragment>
      <Form onSubmit={sendToName}>
        <p>Nombre</p>
        {error ? Swal.fire("Ingresa tu nombre de usuario") : null}
        <input
          type="text"
          name="userName"
          id=""
          onChange={handleChange}
          value={name.userName}
        />
        <input type="submit" value="Siguiente" />
      </Form>
    </Fragment>
  );
};

export default UserName;
