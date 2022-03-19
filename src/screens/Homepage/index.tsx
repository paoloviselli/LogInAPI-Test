import Text from '../../components/shared/Text';
import { HomepageContainer } from './styles';

interface HomepageProps {}

const Homepage: React.FunctionComponent<HomepageProps> = () => {
  return (
    <HomepageContainer>
      <Text fontSize={18} color='primary' bold>
        Welcome to a new project
      </Text>
    </HomepageContainer>
  );
};

export default Homepage;
