import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useParams } from "react-router-dom";

const AdmissionSelect = () => {
  const { id } = useParams();
  const [item, setItem] = useState([]);
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetch(`https://college-admission-server-cyan.vercel.app/coursedetail/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  const {collegeName } = item;

  const onSubmit = (data) => {
    data.candidateName = user?.displayName;
    data.candidateEmail = user?.email;
    const {
      candidateName,
      candidateEmail,
      phoneNumber,
      subject,
      Address,
      dateOfBirth,
      img
    } = data;
    const newItem = {
      ...item,
      candidateName,
      candidateEmail,
      phoneNumber,
      subject,
      Address,
      dateOfBirth,
      img, 
      review: "",
      rating: 0,
      feedback: "",
    };
    fetch("https://college-admission-server-cyan.vercel.app/addCollege", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("College Added Successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      });
  };

  return (
    <>
      <Helmet>
        <title>SelectCollege | Academiz</title>
      </Helmet>
      <div className="w-full mt-10">
        <h1 className="text-5xl font-bold text-center text-primary">
          Welcome to {collegeName}
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div>
            <div className="flex justify-between gap-5">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold">Candidate Name</span>
                </label>
                <input
                  type="text"
                  {...register("candidateName")}
                  placeholder="Name"
                  defaultValue={user?.displayName}
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">
                    Candidate Name is required
                  </span>
                )}
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold">Candidate Email</span>
                </label>
                <input
                  type="email"
                  {...register("candidateEmail")}
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
                  {...register("phoneNumber", { required: true })}
                  placeholder="Phone Number"
                  className="input input-bordered font-light"
                />
                {errors.name && (
                  <span className="text-red-600">Phone Number is required</span>
                )}
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold">Subject</span>
                </label>
                <input
                  type="text"
                  {...register("subject", { required: true })}
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
                  type="text"
                  {...register("img")}
                  name="img"
                  placeholder="Picture URl"
                  className="file-input file-input-bordered file-input-primary w-full p-2"
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
                  {...register("dateOfBirth", { required: true })}
                  placeholder="Date of Birth"
                  className="input input-bordered font-light"
                />
              </div>
            </div>

            <input
              className="btn btn-primary font-bold text-white w-full mt-5"
              value="Add College"
              type="submit"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default AdmissionSelect;
