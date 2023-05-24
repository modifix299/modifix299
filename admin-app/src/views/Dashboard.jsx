import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getProducts } from '../features/product/productSlice';
import { getAllOrders } from '../features/order/orderSlice';
import { getUsers } from '../features/user/userSlice';
import { Link } from "react-router-dom";
import { useEffect } from "react";
// import { Chart } from 'chart.js';




const Dashboard = () => {
    

    const { products = [] } = useSelector( state => state.product);
    const { orders = [] } = useSelector( state => state.order);
    const { users = [] } = useSelector( state => state.user);
    const dispatch = useDispatch();
    // let outOfStock = 0;

    // if (products.length > 0) {
    //     products.forEach( product => {
    //         if( product.stock === 0  ) {
    //             outOfStock = outOfStock + 1;
    //         }
    //     })
    // }
    useEffect( () => {
        dispatch(getProducts);
        dispatch(getUsers);
        dispatch(getAllOrders)
     }, [])

    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            </div>

            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-dark">Recent Movements</h6>
                </div>
                <div className="card-body">
                <div className="row pr-4">
                            <div className="col-xl-4 col-sm-6 mb-3">
                                <div className="card text-white bg-dark o-hidden h-100">
                                    <div className="card-body">
                                        <div className="text-center card-font-size">Products<br /> <b>{products.length}</b></div>
                                    </div>
                                    <Link className="card-footer text-white clearfix small z-1" to="/admin/products">
                                        <span className="float-left">View Details</span>
                                        <span className="float-right">
                                            <i className="fa fa-angle-right"></i>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xl-4 col-sm-6 mb-3">
                                <div className="card text-white bg-dark o-hidden h-100">
                                    <div className="card-body">
                                        <div className="text-center card-font-size">Orders<br /> <b>{orders.length}</b></div>
                                    </div>
                                    <Link className="card-footer text-white clearfix small z-1" to="/admin/orders">
                                        <span className="float-left">View Details</span>
                                        <span className="float-right">
                                            <i className="fa fa-angle-right"></i>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xl-4 col-sm-6 mb-3">
                                <div className="card text-white bg-dark o-hidden h-100">
                                    <div className="card-body">
                                        <div className="text-center card-font-size">Users<br /> <b>{users.length}</b></div>
                                    </div>
                                    <Link className="card-footer text-white clearfix small z-1" to="/admin/users">
                                        <span className="float-left">View Details</span>
                                        <span className="float-right">
                                            <i className="fa fa-angle-right"></i>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                </div>
            </div>


            



            <div className="row">
            {/* <div className="col-12 col-md-2">
                    <Sidebar/>
            </div> */}
            {/* <div className="col-12 col-md-10"> */}
                {/* <h1 className="my-4">Dashboard</h1> */}
                <div className="row pr-4">
                    <div className="col-xl-12 col-sm-12 mb-3">
                        {/* <div className="card text-white bg-dark o-hidden h-100">
                            <div className="card-body">
                                <div className="text-center card-font-size">Total Amount<br /> <b>Total Amount</b>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>

              

            </div>
            
        {/* </div> */}
    
        </>
    )
}

export default Dashboard