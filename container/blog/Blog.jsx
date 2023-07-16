import React from 'react';
import Article from '../../components/article/Article';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article title = "hello" date="Sep 26, 2021" text="Indian Budget - 2022 & 2023 "/>
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article title = "smile" date="Sep 26, 2021" text="View Expenditure Profile" />
        <Article title = "eat" date="Sep 26, 2021" text="Annual Finance Statement" />
        <Article title = "give" date="Sep 26, 2021" text="Finance Bill and Budget Highlights" />
        <Article title = "gi" date="Sep 26, 2021" text="Latest improvement and information about the tax " />
      </div>
    </div>
  </div>
);

export default Blog;