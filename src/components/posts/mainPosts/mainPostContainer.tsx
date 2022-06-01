import { ContentContainer } from '../styled';
import Post from './post';
import MainPost from './mainPost';
import { useEffect, useState } from 'react';

const MainPostContainer = (): JSX.Element => {
  const testPost1 = new Post(1, 'hyo', '테스트 1번 제목입니다.', '테스트 포스트에 대한 간략 설명');
  const testPost2 = new Post(2, 'jae', '테스트 2번 제목입니다.', '테스트 포스트에 대한 간략 설명');

  const [post, setPost] = useState<Array<Post>>([testPost1, testPost2]);

  useEffect(() => {
    setPost(post);
    //post 배열에 추가될 수 있도록
  }, [post]);

  return (
    <ContentContainer>
      {post.map((element) => (
        <MainPost data={element} />
      ))}

      {/* <div>
        {post.forEach((element: Post) => {
          <MainPost data={element} />;
        })}
      </div> */}
    </ContentContainer>
  );
};

export default MainPostContainer;
