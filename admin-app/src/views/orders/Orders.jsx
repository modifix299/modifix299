import { useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { getAllOrders } from '../../features/order/orderSlice';

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
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-dark">Orders Table</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                            {/* <th>Order ID</th> */}
                            <th>Customer Name</th>                                         
                            <th>Total Price</th>
                            <th>Order Status</th>
                            <th>Created At</th>
                            <th>More Info</th>
                            
                            </tr>
                        </thead>
                        <tbody>
                            {!isLoading && orders.map((order,key) => (
                            <tr key = {key} > 
                                {/* <td>{order._id}</td> */}
                                <td>{order.shippingInfo[0].name}</td>                         
                                <td>{order.totalPrice}</td>
                                <td>{order.orderStatus}</td>
                                <td>{order.createdAt}</td>                                
                                <td>
                                <Link to={`/admin/orders/edit/${order._id}`} className='btn btn-md btn-dark'>View</Link>
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