import Navbar from "../../Fragments/Global/Navbar";
import { db } from "../../../services/firebase";
import {
  doc,
  addDoc,
  collection,
  updateDoc,
  deleteDoc,
  getDocs,
} from "firebase/firestore";
import CardContact from "../../Fragments/Contact/CardContact";
import { useEffect, useState } from "react";
import Button from "../../Elements/Button/Index";

const ContactLayouts = () => {
  const dbref = collection(db, "CRUD");
  const [fetchData, setFetchData] = useState([]);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [id, setId] = useState();

  const add = async (e) => {
    e.preventDefault();
    const addData = await addDoc(dbref, {
      Email: email,
      Name: name,
      Phone: phone,
    });
    if (addData) {
      alert("success");
      window.location.reload();
    } else {
      alert("error");
    }
  };
  const fetch = async () => {
    const snapshot = await getDocs(dbref);
    const fetchData = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setFetchData(fetchData);
  };

  useEffect(() => {
    fetch();
  }, []);

  const passData = async (id) => {
    const matchId = fetchData.find((data) => {
      return data.id === id;
    });
    setName(matchId.Name);
    setEmail(matchId.Email);
    setPhone(matchId.Phone);
    setId(matchId.id);
  };

  const update = async () => {
    const updateRef = doc(dbref, id);
    try {
      const updateData = await updateDoc(updateRef, {
        Email: email,
        Name: name,
        Phone: phone,
      });
      alert("success");
      window.location.reload();
    } catch (error) {
      alert("error");
    }
  };

  const del = async (id) => {
    const delRef = doc(dbref, id);
    try {
      await deleteDoc(delRef);
      alert("success");
      window.location.reload();
    } catch (error) {
      alert("error");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-8 px-8 my-8">
        <div className="flex items-center justify-center">
          <form className="bg-white w-full max-w-[20rem] rounded-lg shadow-lg">
            <div className="w-full px-4 py-1 form-control">
              <label className="label">
                <span className="label-text">Fullname</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="w-full input input-sm input-bordered "
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="w-full px-4 py-1 form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Type here"
                className="w-full input input-sm input-bordered "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="w-full px-4 py-1 form-control">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="number"
                placeholder="Type here"
                className="w-full input input-sm input-bordered"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="flex justify-start gap-4 px-4 pb-4 mt-4">
              <Button onClick={add} type="submit" classname="btn-sm">
                Add
              </Button>
              <Button onClick={update} type="submit" classname="btn-sm">
                Update
              </Button>
            </div>
          </form>
        </div>
        <div className="grid grid-cols-1 gap-4 mx-auto md:grid-cols-2 lg:grid-cols-3">
          {fetchData.map((data, id) => {
            return (
              <CardContact
                key={id}
                data={data}
                passData={() => passData(data.id)}
                del={() => del(data.id)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ContactLayouts;
