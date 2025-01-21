import ArticleCard from "../cards/ArticleCard";
import { articles_data } from "./homeData";

const LatestArticles = () => {
  return (
    <section className="latest-articles">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6">
              <div className="section-header text-center">
                {/* <h5 className="sub-title">Latest insights from Bangladesh Finance</h5> */}
                <h2 className="title">Our Latest Articles</h2>
                <p>Get more Latest News and Resources here ...</p>
              </div>
            </div>
          </div>
          <div className="row cus-mar">
            {articles_data.map((singleArticle) => (
              <div key={singleArticle.id} className="col-lg-4 col-md-6">
                {/* Article Card Here */}
                <ArticleCard singleArticle={singleArticle} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;
