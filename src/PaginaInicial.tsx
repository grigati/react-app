import { Link } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';

// interface Props {}

const PaginaInicial = () => {
  const breadcrumbs = useBreadcrumbs();
  console.log(breadcrumbs);
  console.log(process.env);
  return (
    <div>
      {process.env.REACT_APP_GREETINGS} <br />
      {breadcrumbs.map(({ breadcrumb, match }) => (
        <Link to={match.url}>{breadcrumb}</Link>
      ))}
      <br />
      <Link to="/pagina2"> Ir para a página 2</Link>
    </div>
  );
};

export default PaginaInicial;
