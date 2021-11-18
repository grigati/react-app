import React from "react";
import { Link } from "react-router-dom";

const Pagina2: React.FC = () => {
  return (
    <div>
      Página 2<br />
      <Link to="/">Voltar para a página inicial</Link>
    </div>
  );
};

export default Pagina2;
