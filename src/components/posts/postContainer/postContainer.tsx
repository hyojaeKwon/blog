import styled from 'styled-components';

import MainPostContainer from '../mainPosts/mainPostContainer';
import SubPostContainer from '../subPosts/subPostContainer';

const PostContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  height: auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 2rem;
`;

const ContentContainer = (): JSX.Element => {
  return (
    <PostContainer>
      <MainPostContainer />
      <SubPostContainer />
    </PostContainer>
  );
};

export default ContentContainer;
