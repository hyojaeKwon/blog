import { MainPageContainer } from './styled';
import Header from '../../components/common/header/header';
import ContentContainer from '../../components/posts/postContainer/postContainer';

const MainPage = (): JSX.Element => {
  return (
    <MainPageContainer>
      <Header />
      <ContentContainer />
    </MainPageContainer>
  );
};

export default MainPage;
