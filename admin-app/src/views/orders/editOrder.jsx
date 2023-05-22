import { useEffect, useState } from 'react'
import { Link,useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import {getOneOrder, updateOrder, reset } from '../../features/order/orderSlice'
import { toast } from 'react-toastify';
import { Fragment } from 'react'

const EditOrder = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({});

  
    const { order, isUpdated, isLoading, isError, message } = useSelector(
        (state) => state.order
    )

        console.log(order)

    function onFormChange(key, value) {
        setFormData({ ...formData, [key]: value })
    }

    function onFormSumbit(e) {
        e.preventDefault();

        let submitFormData = { ...formData, 'id': id}
        console.log(submitFormData);
        
        dispatch(updateOrder(submitFormData));
    }  
 
    useEffect(() => {
        if(id){
            dispatch(getOneOrder(id));
        }

        if (isError) {
            toast.error(message)
        }
    
        if (isUpdated) {
            toast.success('Updated Successfully.')
            dispatch(reset());
            navigate('/admin/orders')
        }

        dispatch(reset());
    }, [navigate, dispatch,id, isUpdated, isError, message])

    useEffect(() => {
        if(order){
            setFormData(order);
        }
    }, [order])

    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Order Status</h1>
                <Link to="/admin/orders" relative='pa' className="d-none d-sm-inline-block btn btn-sm btn-dark shadow-sm">
                    <i className="fas fa-arrow-left fa-sm "></i> Back 
                </Link>
            </div>

            <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="p-5">
                                <form className="order" onSubmit={onFormSumbit}>                              
                                    
                                    
                                    <div className="form-group">
                                        <select className="form-control" aria-label="Default select example" defaultValue={"Processing"}  onChange={(e) => onFormChange("orderStatus", e.target.value)}>
                                            <option value="Processing">Processing</option>
                                            <option value="Confirmed">Confirmed</option>
                                            <option value="Shipped">Shipped</option>
                                            <option value="Delivered">Delivered</option>
                                        </select>
                                    </div>
                                    <button type='submit' className="btn btn-dark btn-block">
                                        Save
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* customer preview */}
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-dark">Orders Items</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                            <th>Product Name</th>
                            <th>Quantity</th>                                     
                            </tr>
                        </thead>
                        <tbody>
                        {!isLoading && order.map((order, key) => (
                            <Fragment key={key}>
                            {order.orderItems.map((item, index) => (
                                <tr key={`${key}-${index}`}>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                </tr>
                            ))}
                            </Fragment>
                        ))}
                        </tbody>
                    </table>
                    </div>
                </div>
            </div> 

            {/* shipping info */}
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-dark">Shipping Info</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                            <th>Customer Name</th>
                            <th>Address</th> 
                            <th>ZIP Code</th> 
                            <th>Mobile</th>                                     
                            </tr>
                        </thead>
                        <tbody>
                            {!isLoading && order.map((order,key) => (
                            <tr key = {key} > 
                                <td>{order.shippingInfo[0].name}</td>
                                <td>{order.shippingInfo[0].shippingaddress}</td>
                                <td>{order.shippingInfo[0].zipcode}</td>
                                <td>{order.shippingInfo[0].phone}</td>
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

export default EditOrder