import { useEffect, useState } from 'react'
import { Link,useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { getOneOrder, updateOrder, reset } from '../../features/order/orderSlice'
import { toast } from 'react-toastify';

const EditOrder = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({});
  

    const {order, isUpdated , isError, message } = useSelector(
        (state) => state.order
    )


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
                <h1 className="h3 mb-0 text-gray-800">Edit Product</h1>
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
                                    <button type='submit' className="btn btn-primary btn-block">
                                        Save
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditOrder