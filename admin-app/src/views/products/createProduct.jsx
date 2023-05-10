import { useEffect, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { createProduct, reset } from '../../features/product/productSlice'
import { toast } from 'react-toastify';

const CreateProduct = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({});

    const { isAdded , isError, message } = useSelector(
        (state) => state.product
    )

    function onFormChange(key, value) {
        setFormData({ ...formData, [key]: value })
    }

    function onFormSumbit(e) {
        e.preventDefault();

        let submitFormData = { ...formData}
        console.log(submitFormData);
        
        dispatch(createProduct(submitFormData));
    }

    useEffect(() => {
        if (isError) {
            toast.error('Could Not Create Product')
        }
    
        if (isAdded) {
            toast.success('New Product Created Successfully.')
            dispatch(reset());
            navigate('/admin/products')
        }

        dispatch(reset());
    }, [navigate, dispatch, isAdded, isError, message])

    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Create New Product</h1>
                <Link to="/admin/products" relative='pa' className="d-none d-sm-inline-block btn btn-sm btn-dark shadow-sm">
                    <i className="fas fa-arrow-left fa-sm "></i> Back 
                </Link>
            </div>
            <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="p-5">
                                <form className="user" onSubmit={onFormSumbit}>                                    
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="exampleProductName"
                                            placeholder="Product Name" onChange={(e) => onFormChange("name", e.target.value)}/>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <input type="number" className="form-control" id="exampleProductQuantity"
                                                placeholder="Quantity" onChange={(e) => onFormChange("stockquantity", e.target.value)}/>
                                        </div>
                                        <div className="col-sm-6">
                                            <input type="number" step="100" className="form-control" id="examplePrice"
                                                placeholder="Price" onChange={(e) => onFormChange("price", e.target.value)}/>
                                        </div>                                        
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-12 mb-3 mb-sm-0">
                                            {/* <input type="image" className="form-control" id="exampleProductImage" placeholder="Product Image" onChange={(e) => onFormChange("productimage", e.target.value)}/> */}
                                        </div>
                                    </div>
                                    <div className="form-group">
                                    <input type="text" className="form-control" id="exampleProductDescription"
                                                placeholder="Product Description" onChange={(e) => onFormChange("description", e.target.value)}/>
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
        </>
    )
}

export default CreateProduct