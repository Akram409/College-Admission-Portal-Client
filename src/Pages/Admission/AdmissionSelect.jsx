import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";

const AdmissionSelect = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [axiosSecure] = useAxiosSecure();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${Image_Hosting_Token}`;

  const onSubmit = (data) => {
    data.instructorName = user?.displayName
    data.instructorEmail = user?.email
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { name, instructorName, instructorEmail, totalSeats, price } =
            data;
          const newItem = {
            name,
            instructorName,
            instructorEmail,
            totalSeats: parseFloat(totalSeats),
            price: parseInt(price),
            image: imgURL,
            status: "pending",
            enrolled: parseFloat(0),
            feedback: ""
          };
          axiosSecure.post("/addClass", newItem).then((data) => {
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Class added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };
  return (
    <>
      <Helmet>
        <title>SelectCollege | Academiz</title>
      </Helmet>
      <div className="w-full">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="flex justify-between gap-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Candidate Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                name="name"
                placeholder="Name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-600">Candidate Name is required</span>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Candidate Email</span>
              </label>
              <input
                type="text"
                name="candidateEmail"
                placeholder="Candidate Email"
                className="input input-bordered font-light"
                defaultValue={user?.email}
                disabled="disabled"
              />
            </div>
          </div>

          <div className="flex justify-between gap-5">
          <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Phone Number</span>
              </label>
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                className="input input-bordered font-light"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Subject</span>
              </label>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="input input-bordered font-light"
              />
            </div>
          </div>

          <div className="flex justify-between gap-5">
          <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Address</span>
              </label>
              <input
                type="text"
                {...register("address", { required: true })}
                name="Address"
                placeholder="Address"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-600">Address is required</span>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Image</span>
              </label>
              <input
                type="file"
                {...register("image", { required: true })}
                name="image"
                className="file-input file-input-bordered file-input-primary w-full max-w-xs"
              />
              {errors.photoURL && (
                <span className="text-red-600">Photo URL is required</span>
              )}
            </div>
          </div>

          <div className="flex justify-between gap-5">
          <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Date of birth</span>
              </label>
              <input
                type="text"
                name="dateOfBirth"
                placeholder="Date of Birth"
                className="input input-bordered font-light"
              />
            </div>
          </div>


          <input
            className="btn btn-primary font-bold text-white"
            type="submit"
            value="Add College"
          />
        </form>
      </div>
    </>
  );
};

export default AdmissionSelect;
