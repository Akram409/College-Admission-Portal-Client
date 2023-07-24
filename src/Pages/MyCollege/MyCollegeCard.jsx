import { useState } from "react";
import Swal from "sweetalert2";

const MyCollegeCard = ({ item }) => {
    const [Review, setReview] = useState("");
    const [Rating, setRating] = useState(0);

    const handleChange = (event) => {
      setReview(event.target.value);
    };
    const handleChangeRating = (event) => {
        setRating(event.target.value);
    };
  
    const handleClose = () => {
      const modal = document.getElementById("my_modal_5");
      if (modal) {
        modal.close();
      }
    };
  const {
    _id,
    collegeName,
    admissionDate,
    researchHistory,
    img,
    title,
    events,
    rating
  } = item;

  const handleSubmit = () => {
    console.log(Rating,Review)
    fetch(`http://localhost:5000/review/${_id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ Review, Rating }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.modifiedCount) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Review and Rating Updated`,
          showConfirmButton: false,
          timer: 1500,
        });

        handleClose();
        refetch();
      }
    })
    .catch((error) => {
      console.error("Error submitting Review:", error); 
    });
  };
  return (
    <div className="card mx-3 mb-5 bg-[#F0F7FF] shadow-2xl text-center">
      <figure className="img-fluid w-full">
        <img src={img} className="w-full h-72" alt="Image Alt" />
      </figure>
      <div className="card-body mx-auto text-black ">
        <h2 className="text-3xl font-bold pb-1">{collegeName}</h2>
        <h2 className="text-3xl font-bold pb-1">Rating: {rating}</h2>
        <h2 className="text-xl font-bold pb-1">Course Title: {title}</h2>
        <div className="flex gap-2 items-center justify-center">
          <span className="text-lg font-bold">Admission Date: {admissionDate}</span>
        </div>
        <div className="flex gap-2 items-center justify-center">
          <span className="text-lg font-bold">Events: {events}</span>
        </div>
        <div className="">
          <span className="text-lg">{researchHistory}</span>
        </div>
        <div className="card-actions justify-center pt-2">
        
        <button
            className="btn btn-outline btn-warning text-white w-full"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            Review & Rating
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <form
              onSubmit={handleSubmit}
              method="dialog"
              className="modal-box space-y-4"
            >
              <h3 className="font-bold text-3xl">Review & Rating</h3>
              <input
                  type="Number"
                  placeholder="Rating"
                  onChange={handleChangeRating}
                  className="input input-bordered w-full"
                />
              <textarea
                value={Review}
                onChange={handleChange}
                className="textarea textarea-primary w-full"
                style={{ resize: "none" }}
                placeholder="Give feedback"
              ></textarea>
              <div className="modal-action">
                <button className="btn btn-success text-black btn-xs sm:btn-sm md:btn-md lg:btn-md">
                  Submit
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="btn btn-error text-white btn-xs sm:btn-sm md:btn-md lg:btn-md"
                >
                  Close
                </button>
              </div>
            </form>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default MyCollegeCard;
