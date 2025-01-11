import { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet";
import useDevice from "../../hooks/useDevice";

const faqData = [
  {
    question: "What are your hours of operation?",
    answer:
      "We are open every day of the week. Monday - Thursday: 11:00 AM - 9:00 PM, Friday - Saturday: 11:00 AM - 10:00 PM, Sunday: 12:00 PM - 8:00 PM.",
  },
  {
    question: "Do you accept reservations?",
    answer:
      "Yes! We highly recommend making a reservation, especially during peak dining hours. You can reserve a table online through our website or by calling us at [phone number].",
  },
  {
    question: "Do you offer takeout or delivery?",
    answer:
      "Yes, we offer both takeout and delivery services. You can place an order through our website, or by using our third-party delivery partners, such as UberEats, DoorDash, and GrubHub.",
  },
  {
    question: "Do you offer vegetarian or vegan options?",
    answer:
      "Yes! We offer a variety of vegetarian and vegan dishes on our menu. Please check the menu section of our website for details, or ask our staff for recommendations when you visit.",
  },
  {
    question: "Do you accommodate food allergies or dietary restrictions?",
    answer:
      "We take food allergies and dietary restrictions seriously. Please let your server know about any allergies or restrictions when you arrive, and we will do our best to accommodate your needs.",
  },
  {
    question: "Is your restaurant kid-friendly?",
    answer:
      "Absolutely! We have a kids’ menu with a variety of tasty and kid-friendly options. We also offer high chairs and booster seats upon request.",
  },
  {
    question: "Can I host an event at your restaurant?",
    answer:
      "Yes, we offer private dining and event hosting for both small and large groups. Whether it's a birthday, anniversary, or corporate event, our team will work with you to make it a memorable occasion.",
  },
  {
    question: "Do you offer gift cards?",
    answer:
      "Yes, we offer gift cards that can be purchased online or in-store. They make the perfect gift for friends, family, or colleagues.",
  },
  {
    question: "Do you have parking available?",
    answer:
      "Yes, we offer ample parking in our lot. If you’re visiting during peak hours, we recommend arriving early to secure a spot. Additional street parking is also available nearby.",
  },
  {
    question: "Do you have Wi-Fi?",
    answer:
      "Yes, we offer free Wi-Fi for our guests. Simply ask your server for the Wi-Fi password when you arrive.",
  },
  {
    question: "How can I contact you?",
    answer:
      "You can reach us by phone at [017-XXX-XXXX], via email at [faisacafe@support.com], or by using the contact form on our website.",
  },
];

function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const { darkTheme, siteName } = useDevice();
  return (
    <section data-theme={darkTheme ? "dark" : "light"}>
      <Helmet>
        <title>FAQ || {siteName}</title>
      </Helmet>
      <Header />
      <div className="py-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <h1 className="text-3xl font-extrabold text-center my-8">
            Frequently Asked Questions
          </h1>
          <div className="space-y-6">
            {faqData.map((item, index) => (
              <div key={index} className="rounded-lg shadow-md overflow-hidden">
                <div
                  className="flex justify-between items-center p-6 cursor-pointer"
                  onClick={() => toggleAnswer(index)}
                >
                  <h3 className="text-xl font-semibold">{item.question}</h3>
                  <span className="">{openIndex === index ? "-" : "+"}</span>
                </div>
                {openIndex === index && (
                  <div className="px-6 pb-6">{item.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default FAQPage;
