import React from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from './Title';

const Services = () => {
    const service = {
      services: [
        {
          icon: <FaCocktail />,
          title: "Free Bevarages",
          info: "Any types of drinks are to be given free of cost.",
        },
        {
          icon: <FaHiking />,
          title: "Endless Hiking",
          info: "For long time staying hiking to the nearby mountains are thought for free.",
        },
        {
          icon: <FaShuttleVan />,
          title: "Free Travel",
          info: "Travelling to any places can be arranged by the hotels for the customers.",
        },
        {
          icon: <FaBeer />,
          title: "Unlimited Food",
          info: "Free food can be arranged to the customers at the time of staying, ",
        },
      ],
    };
    return (
      <div className="container-fluid services">
        <Title title="Services" />
        <div className="row">
          {service.services.map((item, index) => {
            return (
              <div
                className="col-md-4 col-lg-3 col-12 mx-auto my-3"
                key={index}
              >
                <div className="card shadow-lg border-0 p-4">
                  <article className="service">
                    <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                  </article>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
}

export default Services
