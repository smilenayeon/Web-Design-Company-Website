import React from "react";
import PriceCard from "./PriceCard";
import MostPopular from "../../../assets/images/most-popular.jpg";
import Clock from "../../../assets/images/clock.jpg";

const priceCardData = [
  {
    image: MostPopular,
    alt: "most popular",
    title: "Monthly",
    description: "No minimum commitment. Pause or cancel anytime.",
    price: "$1,995",
    currency: "USD",
    unit: "per month",
    details: [
      "Unlimited requests worked on one at a time",
      "Unlimited Revisions",
      "Stock photos",
      "Ai Image generation",
      "Easy credit card payments",
      "Pause or cancel at anytime"
    ],
    button: "No slots available",
    footer: "Book a call"
  },
  {
    image: Clock,
    alt: "clock",
    title: "Quarterly",
    description: "Save $200 per month.",
    price: "$1,795",
    currency: "USD",
    unit: "per month",
    extra: "Paid quarterly",
    details: [
      "Unlimited requests worked on one at a time",
      "Unlimited Revisions",
      "Stock photos",
      "AI Image generation",
      "Easy credit card payments",
      "Pause or cancel at anytime"
    ],
    button: "No slots available",
    footer: "Book a call"
  }
];

function Price() {
  return (
    <div className="price-section">
      {priceCardData.map(
        (
          {
            image,
            alt,
            title,
            description,
            price,
            currency,
            unit,
            extra,
            details,
            button,
            footer
          },
          index
        ) =>
          <PriceCard
            key={index}
            image={image}
            alt={alt}
            title={title}
            description={description}
            price={price}
            currency={currency}
            unit={unit}
            extra={extra}
            details={details}
            button={button}
            footer={footer}
          />
      )}
    </div>
  );
}

export default Price;
