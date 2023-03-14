import React from 'react'
import { motion } from "framer-motion";
import type { GetStaticProps, NextPage } from "next";
import { useEffect, useState } from "react";
import { CardProduct } from "../components/CardProduct";
import { Header } from "../components/Header";
import { IndexPageFooter } from "../components/IndexPageFooter";
import { SearchBar } from "../components/SearchBar";
import { SearchFilter } from "../components/SearchFilter";
import { Sidebar } from "../components/Sidebar";
import { TopContentText } from "../components/TopContentText/index";


type FormValues = {
  name: string;
  email: string;
  message: string;
};

const contact = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: Handle form submission here
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormValues((prevFormValues) => ({ ...prevFormValues, [name]: value }));
  };

  return (
    <div>
          <Header />
      <Sidebar />
      <div className="container my-24 px-6 mx-auto">

  <section className="mb-32 text-center text-gray-800">
    <div className="max-w-[700px] mx-auto px-3 lg:px-6">
      <h2 className="text-3xl font-bold mb-12 text-white">Contact us</h2>
      <form>
        <div className="form-group mb-6">
          <input type="text" className="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
            placeholder="Name"/>
        </div>
        <div className="form-group mb-6">
          <input type="email" className="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
            placeholder="Email address"/>
        </div>
        <div className="form-group mb-6">
          <textarea className="
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
          " id="exampleFormControlTextarea13"  placeholder="Message"></textarea>
        </div>
        <div className="form-group form-check text-center mb-6">

     
        </div>
        <button type="submit" className=" w-full
          px-6
          py-2.5
          bg-gradient-to-r from-[#ca2765] to-[#ec5a68]          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-blue-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg
          transition
          duration-150
          ease-in-out">Send</button>
      </form>
    </div>
  </section>

</div>
</div>
  );
};



export default contact
