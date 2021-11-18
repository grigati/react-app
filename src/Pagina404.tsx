import React from "react";
import { Link } from "react-router-dom";

const Pagina404: React.FC = () => {
  return (
    <div>
      404
      <br />
      <Link to="/">Voltar para a página inicial</Link>
    </div>
  );
};

export default Pagina404;
