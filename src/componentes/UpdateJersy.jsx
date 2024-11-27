/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateJersy = () => {

    const jersy = useLoaderData();
    const { _id, name, quantity, edition, color, club, photo,details } = jersy;

    const handleUpdateJersy = (event) => {
        event.preventDefault();
        const form = event.target;
    
        const name = form.name.value;
        const quantity = form.quantity.value;
        const edition = form.edition.value;
        const color = form.color.value;
        const club = form.club.value;
        const photo = form.photo.value;
        const details = form.details.value;
        const updatedJersy = { name, quantity, edition, color, club, photo,details };
        console.log(updatedJersy);
    
        //Send data to server
        fetch(`http://localhost:5000/jersy/${_id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updatedJersy),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Jersey Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Close'
                  })
            }
          });
      };
    return (
        <div className="bg-[#F4F3F0] p-24 ">
        <h2 className="text-4xl text-center font-extrabold">Update Jersey </h2>
        <form onSubmit={handleUpdateJersy}>
          {/* form name & quantity row */}
          <div className="md:flex mb-8 ">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Jersey Name</span>
              </label>
              <label className="input-group ">
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  placeholder="Jersey Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  defaultValue={quantity}
                  name="quantity"
                  placeholder="Available Quantity"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form edition row */}
          <div className="md:flex mb-8 ">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Edition</span>
              </label>
              <label className="input-group ">
                <input
                  type="text"
                  defaultValue={edition}
                  name="edition"
                  placeholder="edition "
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Color</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  defaultValue={color}
                  name="color"
                  placeholder="color"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form club and details row */}
          <div className="md:flex mb-8 ">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Club</span>
              </label>
              <label className="input-group ">
                <input
                  type="text"
                  name="club"
                  defaultValue={club}
                  placeholder="club"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="details"
                  defaultValue={details}
                  placeholder="Details"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form photo row */}
          <div className="">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <label className="input-group ">
                <input
                  type="text"
                  defaultValue={photo}
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
  
          <input
            type="submit"
            value="UPDATE JERSEY"
            className="btn btn-block bg-black text-white mt-10"
          />
        </form>
      </div>
    );
};

export default UpdateJersy;