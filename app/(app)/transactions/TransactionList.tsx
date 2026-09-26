"use client";

import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase/firebase";
import { Button } from "@/components/ui/button";
import { deleteDoc, doc } from "firebase/firestore";

const TransactionList = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  const deleteDocument = async (id) => {
    try {
      const docRef = doc(db, "transactions", id);
      await deleteDoc(docRef);
    } catch (err) {
      console.log("Error deleting user ", err);
    }
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "transactions"),
      (snapshot) => {
        setLoading(true);
        const documents = snapshot.docs.map((data) => {
          return { id: data?.id, ...data.data() };
        });
        setLoading(false);
        setList(documents);
      },
    );

    return unsubscribe;
  }, []);
  return (
    <div>
      <div className="w-full px-4 py-2 gap-4 overflow-x-scroll md:overflow-hidden overflow-y-hidden">
        <div className="w-full "></div>
        {loading ? (
          <p>Loading....</p>
        ) : (
          <div className="min-w-[1024px] px-3 py-3">
            <ul className="w-full grid grid-cols-6 gap-10 li_style">
              <li className="">Date</li>
              <li className="">Description</li>
              <li>Category</li>
              <li>Type</li>
              <li>Amount</li>
              <li>Actions</li>

              {list.map((data) => (
                <Actions data={data} deleteDocument={deleteDocument} key={data?.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionList;

const Actions = ({ data, deleteDocument }) => {
    const [popUp, setPopUp] = useState(false);
  return (
    <React.Fragment key={data?.id}>
      <li>{data?.date}</li>
      <li>{data?.description}</li>
      <li>{data?.categories}</li>
      <li>{data?.transaction}</li>
      <li>${data?.amount}</li>
      <li onClick={() => setPopUp(!popUp)} className="relative">
        <span className="py-2 px-3 rounded-sm bg-gray-200 hover:bg-gray-300 transition-all duration-150">...</span>
         {popUp && <div className="absolute -top-8 z-50 bg-white -left-12 flex items-center gap-4 shadow-sm px-2 py-1 shadow-gray-400 rounded-sm">
                  <Button className="bg-green-600 text-white" variant={"ghost"}>Update</Button>
                  <Button onClick={() => deleteDocument(data?.id)} className="bg-red-600 text-white" variant={"ghost"}>Delete</Button>
                </div>}
      </li>
    </React.Fragment>
  );
};
