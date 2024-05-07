import ContentLoader from 'react-content-loader';

interface MyLoader {}
const MyLoader = (props: MyLoader) => (
  <ContentLoader
    speed={5}
    width={200}
    height={200}
    viewBox="0 0 200 200"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="36" y="26" rx="0" ry="0" width="1" height="0" />
    <rect x="54" y="129" rx="0" ry="0" width="1" height="2" />
    <rect x="0" y="0" rx="6" ry="6" width="200" height="200" />
  </ContentLoader>
);

export default MyLoader;
