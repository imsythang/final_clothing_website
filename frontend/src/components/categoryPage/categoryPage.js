import React from "react";
import "./categoryPage.scss";

const CategoryPage = () => {
  const categories = [
    {
      name: "IVy Moda",
      condition: "Tên sản phẩm phải chứa từ IVy Moda\nNhà cung cấp phải chứa từ IVy Moda",
    },
    {
      name: "Elise",
      condition: "Tên sản phẩm phải chứa từ Elise\nNhà cung cấp phải chứa từ Elise",
    },
    {
      name: "Boran",
      condition: "Tên sản phẩm phải chứa từ Boran\nNhà cung cấp phải chứa từ Boran",
    },
  ];

  return (
    <div className="category-page">
      <div className="header">
        <h1>Danh mục sản phẩm</h1>
        <button className="create-category">Tạo danh mục</button>
      </div>
      <div className="tabs">
        <div className="tab active">Tất cả danh mục</div>
      </div>
      <div className="controls">
        <div className="search">
          <input type="text" placeholder="Tìm kiếm danh mục" />
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </div>
      </div>
      <table className="category-table">
        <thead>
          <tr>
            <th>Danh mục</th>
            <th>Điều kiện</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr key={index}>
              <td>{category.name}</td>
              <td>
                {category.condition.split("\n").map((line, idx) => (
                  <div key={idx}>{line}</div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryPage;
