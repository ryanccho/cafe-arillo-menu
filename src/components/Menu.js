// src/components/Menu.js
import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../firebase";

const Menu = () => {
  const [menuItems, setMenuItems] = useState({});

  useEffect(() => {
    const menuRef = ref(database, "menu");
    const unsubscribe = onValue(menuRef, (snapshot) => {
      const data = snapshot.val() || {};
      setMenuItems(data);
    });

    return () => unsubscribe(); // clean up listener
  }, []);

  return (
    <div className="menu">
      {Object.entries(menuItems).map(([name, info]) => (
        <div
          key={name}
          className={`menu-item ${info.soldOut ? "sold-out" : ""}`}
          style={{ opacity: info.soldOut ? 0.4 : 1 }}
        >
          <span className="item-name">{name}</span> — ${info.price}{" "}
          {info.soldOut && <strong>(Sold Out)</strong>}
        </div>
      ))}
    </div>
  );
};

export default Menu;
