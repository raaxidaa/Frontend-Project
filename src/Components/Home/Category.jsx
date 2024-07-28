import React from 'react';

const Category = () => {
  const categories = [
    { id: 1, image: '/public/i1.png', title: 'Business Development' },
    { id: 2, image: '/public/i2.png', title: 'Customer Service' },
    { id: 3, image: '/public/i3.png', title: 'Design' },
    { id: 4, image: '/public/i4.png', title: 'Operations' },
    { id: 5, image: '/public/i5.png', title: 'Development' },
    { id: 6, image: '/public/i6.png', title: 'Mobile Development' }
  ];

  return (
    <div className='category container'>
      <div className="category-left">
        <h1>Explore by Category</h1>
        <p>Nisl urna scelerisque id vel vitae at a mi nibh platea in.</p>
        <div className="see">
          <span>See All Category</span>
          <img src="/public/arrow-right.png" alt="" />
        </div>
      </div>
      <div className="category-right">
        {categories.map((category) => (
          <div key={category.id} className="one">
           <p> <img src={category.image} alt={category.title} /></p>
            <span>{category.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
