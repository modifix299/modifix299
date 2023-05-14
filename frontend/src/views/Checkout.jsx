import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { createOrder, reset } from "../features/order/orderSlice";
import { removeAllItemsFromCart } from "../features/cart/cartSlice";
import { toast } from "react-toastify";

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, isAdded } = useSelector(
    (state) => state.order
  )
  const { items } = useSelector(state => state.cart)
  const { user } = useSelector(state => state.auth)
  const userItems = items.filter(item => item.user === user._id);

  const shippingInfo = {
    name: user.firstname + user.lastname,
    phone: user.phone,
    shippingaddress: user.shippingaddress,
    zipcode: user.zipcode
  }

  const [shippingData, setShippingData] = useState(shippingInfo);

  function onFormChange(key, value) {
    setShippingData({ ...shippingData, [key]: value })
  }

  let totalPrice = 0;
  userItems.forEach(function (arrayItem) {
    totalPrice = totalPrice + arrayItem.price;
  });


  function onFormSumbit(e) {
    e.preventDefault();

    let submitShippingData = { ...shippingData };
    let submitFormData = {
      'shippingInfo': submitShippingData,
      'user': user._id,
      'orderItems': userItems,
      'totalPrice': totalPrice
    };

    console.log(submitFormData);
    dispatch(createOrder(submitFormData));

  }

  useEffect(() => {
    if (isError) {
      toast.error('Could Not Create Order')
    }

    if (isAdded) {
      toast.success('New Order Created Successfully.')
      dispatch(removeAllItemsFromCart());
      dispatch(reset());
      navigate('/')
    }

    dispatch(reset());
  }, [navigate, dispatch, isAdded, isError])

  return (
    <>
      {/* breadcrumb-section */}
      <div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <p>Custom And Carbon Fibre</p>
                <h1>Check Out Product</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* check out section */}
      <div className="checkout-section mt-150 mb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="checkout-accordion-wrap">
                <div className="accordion" id="accordionExample">
                  <div className="card single-accordion">
                    <div className="card-header" id="headingOne">
                      <h5 className="mb-0">
                        <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          Shipping Address
                        </button>
                      </h5>
                    </div>

                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                      <div className="card-body">
                        <div className="billing-address-form">
                          <form action="index.html">
                            <p><input type="text" defaultValue={user.firstname + user.lastname} onChange={(e) => onFormChange("name", e.target.value)} placeholder="Name" /></p>
                            <p><input type="tel" defaultValue={user.phone} onChange={(e) => onFormChange("phone", e.target.value)} placeholder="phone" /></p>
                            <p><input type="text" defaultValue={user.shippingaddress} onChange={(e) => onFormChange("shippingaddress", e.target.value)} placeholder="shippingaddress" /></p>
                            <p><input type="text" defaultValue={user.zipcode} onChange={(e) => onFormChange("zipcode", e.target.value)} placeholder="zipcode" /></p>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="col-lg-4">
              <div className="order-details-wrap">
                <table className="order-details">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody className="order-details-body">
                    {userItems?.map((item, key) => (
                      <tr key={key}>
                        <td>{item.name}</td>
                        <td>Rs. {item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tbody className="checkout-details">
                    <tr>
                      <td><strong>Total</strong></td>
                      <td><strong>Rs. {totalPrice}</strong></td>
                    </tr>
                  </tbody>
                </table>
                <button onClick={onFormSumbit} className="boxed-btn">Place Order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end check out section */}


    </>
  )
}

export default Checkout