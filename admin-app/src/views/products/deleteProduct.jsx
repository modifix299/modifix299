import { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct, reset } from '../../features/product/productSlice';
import { toast } from 'react-toastify';

const DeleteProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isDeleting, setIsDeleting] = useState(false);

  const { product, isError, message } = useSelector((state) => state.product);

  function onDelete() {
    setIsDeleting(true);
    dispatch(deleteProduct(id));
  }

  if (isError) {
    toast.error(message);
  }

  if (product && isDeleting) {
    toast.success('Product deleted successfully.');
    dispatch(reset());
    navigate('/admin/products');
  }

  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Delete Product</h1>
        <Link to="/admin/products" className="d-none d-sm-inline-block btn btn-sm btn-warning shadow-sm">
          <i className="fas fa-arrow-left fa-sm"></i> Back
        </Link>
      </div>

      <div className="card o-hidden border-0 shadow-lg my-5">
        <div className="card-body p-0">
          <div className="row">
            <div className="col-lg-12">
              <div className="p-5">
                <form className="user">
                  <p>Are you sure you want to delete this product?</p>
                  <p></p>
                  <button
                    type="button"
                    className="btn btn-danger btn-block"
                    onClick={onDelete}
                    disabled={isDeleting}
                  >
                    {isDeleting ? 'Deleting...' : 'Delete'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteProduct;
