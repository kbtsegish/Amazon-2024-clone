import LayOut from "../../Componenets/Layout/LayOut";
import classes from "./Order.module.css";
import { db } from "../../Utility/firebase";
import { DataContext } from "../../Componenets/DataProvider/DataProvider";
import { useContext, useEffect, useState } from "react";
import ProductCard from "../../Componenets/Product/ProductCard";
import { IoMdPrint } from "react-icons/io";

function Order() {
  const [{ user }] = useContext(DataContext);
  const [orders, setOrder] = useState([]);

  // Print function
  const handlePrint = () => {
    window.print();
  };

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrder(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrder([]); // Clear orders if no user is logged in
    }
  }, [user]);

  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.orders__container}>
          <h2>Your Orders</h2>
          {/* Display orders */}
          <div>
            {orders?.length === 0 ? (
              <p style={{ Padding: "20" }}>
                pleas order first! No orders found
              </p>
            ) : (
              orders.map((eachOrder, i) => (
                <div key={eachOrder.id}>
                  <hr />
                  <p>Order ID: {eachOrder.id}</p>
                  <div>
                    {eachOrder.data?.basket?.map((orderItem) => (
                      <ProductCard
                        flex={true}
                        product={orderItem}
                        key={orderItem.id}
                      />
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
          <button onClick={handlePrint} className={classes.printButton}>
            <IoMdPrint size={16} /> Print Order
          </button>
        </div>
      </section>
    </LayOut>
  );
}

export default Order;
