import React from 'react';
import blogs from './blog.json';
import { useParams, useNavigate } from 'react-router-dom';

const truncateTitle = (title) => {
  const maxLength = 50; 
  if (title.length > maxLength) {
    return title.slice(0, maxLength) + '...';
  }
  return title;
};

const BlogDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const blog = blogs.find(blog => blog.id === parseInt(id));

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBlogClick = (id) => {
    navigate(`/blog/${id}`);
    scrollToTop();
  };
  const getRandomBlogs = (blogs, count) => {
    const shuffled = blogs.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const randomBlogs = getRandomBlogs(blogs, 3);

  return (
    <div className="BlogDetail container">
      <div className="centerblog">
        <div className="top">
          <div className="left">
            <img src={blog.authorImage} alt="Author" />
            <div className="d">
              <span>{blog.author}</span>
              <span>{blog.date}</span>
            </div>
          </div>
          <div className="right">
            <img src="/k1.png" alt="" />
            <img src="/k2.png" alt="" />
            <img src="/k3.png" alt="" />
            <img src="/k4.png" alt="" />
          </div>
        </div>
        <h1>{blog.title}</h1>
        <img src={blog.image} alt="Blog" />
        <h4>What is discrimination?</h4>
        <p>From the moment a job applicant reaches out to you regarding a potential job post, he or she is protected by the Swedish Discrimination Act and the EU Directive for Equal Treatment in Employment and Occupation. As an employer, you have to be mindful of this and not let any of the discriminatory grounds be the reason you deny someone an interview or a job. According to Swedish Law, the discriminatory grounds are as follows: sex, transgender identity or expression, nationality and ethnicity, religion or other beliefs, disability, sexual orientation and age.</p>
        <h4>What’s at stake?</h4>
        <p>Obviously, your company’s reputation as a fair and open-minded employer is vital for your capacity to attract employees and partners. But there are also legal consequences for any employer who is found guilty of discrimination of job applicants. The most common consequence being that the employer has to pay damages to the job applicant. In this article, we will provide you with a few examples of discrimination in the employment process, and how to avoid it.</p>
        <h4>The language and nationality mix-up</h4>
        <p>A common but dire mistake many employers make is to mix up language skills and nationality. This often comes down to sloppiness or unawareness from the person drafting the job ad and its requirements.</p>
        <p>Imagine that you are expanding into a new market, and are in desperate need of staff with unique language skills for your team. Pay attention when you formulate these requirements in your job ad. Don’t advertise for a Finnish Communications Officer. Instead, advertise for a Communications Officer with excellent skills in Finnish.</p>
        <p>By indicating that you are only looking with a person of a certain nationality, you run the risk of illegally excluding applicants based on nationality. For example, a Communications Officer of Estonian nationality who is fluent in Finnish would be discriminated against by your requirements.</p>
        <p>By indicating that you are only looking with a person of a certain nationality, you run the risk of illegally excluding applicants based on nationality. For example, a Communications Officer of Estonian nationality who is fluent in Finnish would be discriminated against by your requirements.</p>
        <p>Jurio offers plenty of articles about the process of starting a business in Sweden, your rights and obligations as an employer, and <strong>drafting a legally sound employment contract</strong>, regardless of the position you’re offering.</p>
        <h4>Don’t force the handshake</h4>
        <p>A “good old fashioned” handshake is something many take for granted, and have been looking forward to as workforces return, fully vaccinated, to the offices. But as an employer, you will need to respect that customs vary. In a famous case, a female interpreter applied and was called in for a job interview. Prior to the job interview she had successfully completed a language test, and met all necessary job requirements. When the applicant arrived for the job interview she greeted the male employer, not with a hand shake, but by placing her hand on her chest and smiling.</p>
        <p>The male employer questioned the applicant’s choice of greeting, to which the applicant replied that, due to her muslim faith, the act of shaking a man’s hand is considered intimate. The employer immediately cancelled the interview and declared that she would not get the position. At the same time the employer admitted that other reasons to not shake hands, such as fear of germs or autism, were considered acceptable. The Court found that the job applicant had been subject to discrimination based on religion, and that the employer had to pay damages to her.</p>
        <p><strong>Create your own employment contract</strong>, add options such as an english copy or a secrecy clause and sign it digitally with Jurio in no more than 15 minutes.</p>
        <h4>Acceptable discrimination?</h4>
        <p>There are circumstances where an employer rightly can discriminate against job applicants based on their gender or other discriminatory grounds, for example an actor that is to be casted to portray a female character. As long as the applicants gender is essential to the work task, and there is a valid reason for that, the employer can get away with a certain degree of gender discrimination. However, the exceptions are interpreted strictly.</p>
        <p>A healthcare company advertised for a female carer (in Swedish personlig assistent), who should be at least 20 years or older. A complaint was filed to the Swedish Equality Ombudsman. The gender requirement was accepted, as the nature of the work entailed intimate washing of a disabled female individual. However, the age requirement was not considered valid according to the Discrimination Act. The company claimed that the age requirement was set to ensure that the applicants had sufficient experience. Had they only formulated the job ad differently, they could have avoided the lawsuit. For example, the company could have stated that they were looking for applicants with at least X years of relevant work experience instead of requiring a certain age.</p>
        <h4>Stay open minded</h4>
        <p>As a start-up business without an HR-department or a small army of lawyers to back you up, the risks following direct or indirect discrimination may lurk around the corner. Our best advice is to draft the job requirement conditions without prejudice and as clearly as possible, and to use them as an objective measuring stick throughout the employment process. However, some decent common sense and respect for people’s differences will get you far. After all, the best candidate may be the one you least expect.</p>
        <h4>Last but not least…</h4>
        <p>After you’ve held your final interview and found the perfect person for the job, it’s time to seal the deal. Whether you are offering a full- or part-time position, a fixed-term, trial or indefinite employment, <strong>Jurio empowers you to draft your own employment contracts</strong>, which you can print out and sign with your company pen, or digitally with BankID.</p>
      </div>
      <div className="top3blog container">
        <h2>Continue reading</h2>
        <div className="endblog">
          {randomBlogs.map(topBlog => (
            <div key={topBlog.id} className="blog" onClick={() => handleBlogClick(topBlog.id)}>
              <img src={topBlog.image} alt={topBlog.topic} />
              <span>{topBlog.topic}</span>
              <h4>{truncateTitle(topBlog.title)}</h4>
              <div className="data">
                <img src={topBlog.authorImage} alt={topBlog.author} />
                <span>{topBlog.author}</span>
                <span>on {topBlog.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
