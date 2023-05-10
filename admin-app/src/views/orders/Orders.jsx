import { useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { getAllOrders } from '../../features/order/orderSlice'

const Orders = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { orders, isLoading, isError, message } = useSelector(
        (state) => state.order
    )

    useEffect(() => {
        if (isError) {
            console.log(message)
        }
    
        dispatch(getAllOrders());   
       
    }, [navigate, dispatch, isError, message])   

    
    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Orders</h1>
                {/* <Link to="new" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                    <i className="fas fa-plus fa-sm "></i> Create New Product</Link> */}
            </div>

            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-dark">Orders Table</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Products</th>
                            <th>Total Price</th>
                            <th>Status</th>
                            <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {!isLoading && orders.map((order) => (
                            <tr key={order._id}>
                                <td>{order._id}</td>
                                <td>{order.customer.name}</td>
                                <td>
                                {order.cartItems.map((item) => (
                                    <p key={item._id}>
                                    {item.product.productname} x {item.quantity}
                                    </p>
                                ))}
                                </td>
                                <td>{order.totalPrice}</td>
                                <td>{order.status}</td>
                                <td>
                                <Link to={`/admin/orders/edit/${order._id}`} className='btn btn-md btn-dark'>Edit</Link>
                                <Link to={`/admin/orders/delete/${order._id}`} className='btn btn-md btn-warning'>Delete</Link>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>

                    </div>
                </div>
            </div>            
        </>
    )
}

export default Orders