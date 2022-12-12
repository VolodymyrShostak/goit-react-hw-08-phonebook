
import { useAuth } from 'hooks';
import { HomeLink , Link} from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <HomeLink  to="/">
        Home
      </HomeLink>
      {isLoggedIn && (
        <Link  to="/contacts">
          Contacts
        </Link>
      )}
    </nav>
  );
};
