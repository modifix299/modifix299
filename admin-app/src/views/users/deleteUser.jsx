import { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser, reset } from '../../features/user/userSlice';
import { toast } from 'react-toastify';

const DeleteUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isDeleting, setIsDeleting] = useState(false);

  const { user, isError, message } = useSelector((state) => state.user);

  function onDelete() {
    setIsDeleting(true);
    dispatch(deleteUser(id));
  }

  if (isError) {
    toast.error(message);
  }

  if (user && isDeleting) {
    toast.success('User deleted successfully.');
    dispatch(reset());
    navigate('/admin/users');
  }

  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Delete User</h1>
        <Link to="/admin/users" className="d-none d-sm-inline-block btn btn-sm btn-warning shadow-sm">
          <i className="fas fa-arrow-left fa-sm"></i> Back
        </Link>
      </div>

      <div className="card o-hidden border-0 shadow-lg my-5">
        <div className="card-body p-0">
          <div className="row">
            <div className="col-lg-12">
              <div className="p-5">
                <form className="user">
                  <p>Are you sure you want to delete this user?</p>
                  <p>{user.firstname}</p>
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

export default DeleteUser;
