/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const JersyCard = ({ jersy,setJersys,jersys }) => {
  const { _id, name, quantity, edition, color, club, photo } = jersy;
  const handleDelete = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/jersy/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Jersey has been deleted.",
                icon: "success",
              });
              const remaining = jersys.filter(jer => jer._id !== _id);
              setJersys(remaining)
            }
          });
      }
    });
  };
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img className="w-full h-full" src={photo} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title ">
          {club} {name}
          <div className="badge badge-secondary">{quantity} left</div>
        </h2>
        <div>
          <p className="text-left ">Edition: {edition}</p>
          <p className="text-left ">Color: {color}</p>
          <p className="text-left">Club: {club}</p>
        </div>
        <div className="btn-group btn-group-vertical space-x-6 mt-6">
          <button className="btn ">View</button>
          <Link to={`/updatejersy/${_id}`}>
            <button className="btn">Update</button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn bg-orange-500"
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default JersyCard;
