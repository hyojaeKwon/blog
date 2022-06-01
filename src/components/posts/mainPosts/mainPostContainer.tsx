import { ContentContainer } from '../styled';
import Post from './post';

const MainPostContainer = (): JSX.Element => {
  const testPost = new Post(1, 'hyo', '테스트 제목입니다.', '테스트 포스트에 대한 간략 설명');
  return <ContentContainer>hi</ContentContainer>;
};

export default MainPostContainer;
