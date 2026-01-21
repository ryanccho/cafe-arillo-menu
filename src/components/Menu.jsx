// src/components/Menu.js
import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../firebase/firebase";

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

  const categoryOrder = ["specialtyDrinks", "pourovers", "sweets"];
  const itemOrders = {
    pourovers: ["narino", "huila"],
    specialtyDrinks: ["milkBrew", "tonic"],
    sweets: ["cookie", "keyLimeBar", "cupcake"]
  };
  const categoryDisplayNames = {
    specialtyDrinks: "Specialty Drinks",
    pourovers: "Pourovers",
    sweets: "Sweets",
  };

  return (
    <div className="Menu">
      {categoryOrder.map((categoryName) => {
        const items = menuItems[categoryName];
        return (
          <div key={categoryName}>
            <h2 className="category-title">{categoryDisplayNames[categoryName]}</h2>

            {categoryName === "sweets" && (
              <p className="category-note">
                All items made in-house and guaranteed nut-free (like Kobe).
              </p>
            )}

            {itemOrders[categoryName].map((itemKey) => {
              const info = items[itemKey];
              return (
                <div
                  key={itemKey}
                  className={`menu-item ${info.soldOut ? "sold-out" : ""}`}
                  style={{ opacity: info.soldOut ? 0.4 : 1 }}
                >
                  <span className="item-name">{info.name}</span> — ${info.price.toFixed(2)}{" "}
                  {info.soldOut && <strong>(Sold Out)</strong>}
                  <p className="item-description">{info.description}</p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
