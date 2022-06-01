import styled from 'styled-components';
import Post from './post';

const MainPostContainer = styled.div`
  margin-top: 1em;
  margin-bottom: 3em;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;

  > .thumbnail-container {
    width: 100%;
    height: 20rem;
    border-radius: 20px;
    background-color: beige;
    margin-bottom: 1em;
  }

  > .contents-container {
    margin-left: 1rem;
    margin-right: 1rem;

    width: auto;
    /* height: 6rem; */

    > .title-container {
      margin-bottom: 1em;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;
      > .title {
        font-size: 2rem;
        font-weight: 500;
        margin-right: 2rem;
      }

      > .post-num {
        font-size: 1.2rem;
        font-weight: 400;
        /*  회색으로 처리 */
        color: #4e5968;
      }
    }

    > .author {
      font-size: 1.2rem;
      font-weight: 300;
      margin-bottom: 0.3em;
    }

    > .desc {
      color: #4e5968;
      font-size: 1.2rem;
      font-weight: 300;
      margin-bottom: 1em;
    }
  }
`;

interface IProps {
  data: Post;
}
const MainPost = ({ data }: IProps): JSX.Element => {
  return (
    <MainPostContainer>
      <div className="thumbnail-container" />
      <div className="contents-container">
        <div className="title-container">
          <div className="title">{data.getPostTitle}</div>
          <div className="post-num">#{data.getPostID}</div>
        </div>
        {/* <div className="author">{data.getPostAuthor}</div> */}
        <div className="desc">{data.getPostShortDesc}</div>
      </div>
    </MainPostContainer>
  );
};
export default MainPost;
