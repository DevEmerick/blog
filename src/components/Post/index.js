const Post = () => {
  return (
    <div className="post mx-2">
      <div className="img-post"></div>
      <h5>Tecnologia</h5>
      <h3>O guia definitivo do Blog</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
        saepe beatae laboriosam magnam, ipsa aperiam tempore, eos rem nihil
        perferendis rerum laborum, culpa dolore! Corrupti aspernatur quibusdam
        culpa debitis cum.
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
