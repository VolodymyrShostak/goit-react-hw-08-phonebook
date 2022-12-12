
import { useAuth } from 'hooks';
import { Wrapper, HomeLink , Link} from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Wrapper>
      <HomeLink  to="/">
        Home
      </HomeLink>
      {isLoggedIn && (
        <Link  to="/contacts">
          Contacts
        </Link>
      )}
    </Wrapper>
  );
};
