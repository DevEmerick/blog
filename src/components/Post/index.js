const Post = (props) => {
  return (
    <div className="post mx-2">
      <div className="img-post"></div>
      <h5>{props.subtitle}</h5>
      <h3>{props.title}</h3>
      <p>
        {props.children}
      </p>
      <div className="flex pt-2">
        <div className="img-profile"></div>
        <div className="desc-profile ml-2">
          <h6 className="color-blue">Nome</h6>
          <p>Aug 2, 2024 - 8 min read</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
