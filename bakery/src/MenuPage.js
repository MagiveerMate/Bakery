import React from 'react';


const MenuPage = () => {
  return (
    <div className="menu-container">
      <h1>Menu</h1>
      <ul className="pastry-list">
        <li>
          <img src="	https://img.freepik.com/free-photo/chocolate-puff-…e-eclair-sweet-raisin-roll_140725-5637.jpg?w=2000" alt="Pastry 1" />
          <span>Chocolate Puff</span>
        </li>
        <li>
          <img src="https://stylesatlife.com/wp-content/uploads/2022/10/Easy-Strawberry-Vanilla-Cake-Design.jpg" alt="cake" />
          <span>Cake</span>
        </li>
        <li>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8rdHN-u6JuGN8tDFdQww1fGQ7p3hVhQ7RoA&usqp=CAU" alt="Muffins" />
          <span>Muffins</span>
        </li>
        
        {/* Add similar styling for other pastries */}
      </ul>
    </div>
  );
};

export default MenuPage;
