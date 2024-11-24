import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCaretDown, faArrowDownWideShort } from "@fortawesome/free-solid-svg-icons";
import "./warehouse.scss";

import PI1 from '../../img/product_image1.avif';
import PI2 from '../../img/product_image2.avif';
import PI3 from '../../img/product_image3.avif';
import PI4 from '../../img/product_image4.avif';
import PI5 from '../../img/product_image5.png';
import PI6 from '../../img/product_image6.jpg';
import PI7 from '../../img/product_image7.jpg';

const Warehouse = () => {
  const [showDropdown, setShowDropdown] = useState({
    display: false,
    supplier: false,
    category: false,
  });

  const toggleDropdown = (key) => {
    setShowDropdown((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const products = [
    {
      id: 1234,
      name: "AIRism Cotton Ribbed Polo Shirt",
      image: PI1,
      price: "203.000 VND",
      status: "Có sẵn",
      stock: "25",  
    },
    {
        id: 1234,
        name: "AIRism Cotton Ribbed Polo Shirt",
        image: PI1,
        price: "203.000 VND",
        status: "Có sẵn",
        stock: "25",  
    },
    {
        id: 1234,
        name: "AIRism Cotton Ribbed Polo Shirt",
        image: PI2,
        price: "203.000 VND",
        status: "Có sẵn",
        stock: "25",  
    },
    {
        id: 1234,
        name: "AIRism Cotton Ribbed Polo Shirt",
        image: PI3,
        price: "203.000 VND",
        status: "Có sẵn",
        stock: "25",  
    },
    {
        id: 1234,
        name: "AIRism Cotton Ribbed Polo Shirt",
        image: PI4,
        price: "203.000 VND",
        status: "Có sẵn",
        stock: "25",  
    },
    {
        id: 1234,
        name: "AIRism Cotton Ribbed Polo Shirt",
        image: PI5,
        price: "203.000 VND",
        status: "Có sẵn",
        stock: "25",  
    }
  ];

  return (
    <div className="product-page">
      <div className="header">
        <h1>Sản phẩm</h1>
        <div>
        <button class="create-product">Xem sản phẩm</button>
        </div>
      </div>
      <div className="tabs">
        <div className="tab active">Tất cả sản phẩm</div>
      </div>
      <div className="controls">
        <div className="filter">
          {/* Dropdown for Display */}
          <div className="dropdown">
            <button onClick={() => toggleDropdown("display")}>
              Hiển thị <FontAwesomeIcon icon={faCaretDown} />
            </button>
            {showDropdown.display && (
              <div className="dropdown-menu">
                <div className="dropdown-item">Hiển thị</div>
                <div className="dropdown-item">Ẩn</div>
              </div>
            )}
          </div>

          {/* Dropdown for Supplier */}
          <div className="dropdown">
            <button onClick={() => toggleDropdown("supplier")}>
              Nhà cung cấp <FontAwesomeIcon icon={faCaretDown} />
            </button>
            {showDropdown.supplier && (
              <div className="dropdown-menu">
                <div className="dropdown-item">ABC</div>
                <div className="dropdown-item">XYZ</div>
              </div>
            )}
          </div>

          {/* Dropdown for Category */}
          <div className="dropdown">
            <button onClick={() => toggleDropdown("category")}>
              Loại sản phẩm <FontAwesomeIcon icon={faCaretDown} />
            </button>
            {showDropdown.category && (
              <div className="dropdown-menu">
                <div className="dropdown-item">Quần</div>
                <div className="dropdown-item">Áo</div>
              </div>
            )}
          </div>
        </div>

        {/* Search bar */}
        <div className="search">
          <input type="text" placeholder="Tìm kiếm sản phẩm" />
          <button>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className="arrange">
          <FontAwesomeIcon icon={faArrowDownWideShort} />
        </div>
      </div>
      <table className="product-table">
        <thead>
          <tr>
            <th>Mã sản phẩm</th>
            <th>Sản phẩm</th>
            <th>Giá</th>
            <th>Trạng thái</th>
            <th>Số lượng tồn</th>
            <th>Cập nhật số lượng</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.id}</td>
              <td>
                <div className="product-name">
                  <img
                    src={product.image || "placeholder.jpg"}
                    alt="product"
                    className="product-image"
                  />
                  {product.name}
                </div>
              </td>
              <td>{product.price}</td>
              <td>{product.status}</td>
              <td>{product.stock}</td>
              <td>
                <div className = "quantity-controls">
                    <input type="number" defaultValue="0" className="quantity-input" />
                  <button className="quantity-button">Thêm</button>
                  <button className="quantity-button">Đặt</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Warehouse;
