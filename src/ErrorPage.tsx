import { useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error: unknown = useRouteError();
  console.error(error);
  return (
    <section className='d-flex flex-column justify-content-center align-items-center vh-100'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error occured.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </section>
  );
}

export default ErrorPage;
