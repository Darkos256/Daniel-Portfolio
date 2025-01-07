"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Celular",
    description: "(+57) 311 694 5420"
  },
  {
    icon: <FaEnvelope />,
    title: "Correo",
    description: "daniellazaro20@gmail.com"
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Dirección",
    description: "Cra 4G #15-"
  },
]

const Contact = () => {
  return <div>contact page</div>;
};

export default Contact;
