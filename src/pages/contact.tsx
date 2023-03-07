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
       
         
      <h1>Contact Us</h1>
      <form  onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formValues.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};



export default contact
