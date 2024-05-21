// import Image from "next/image";

const services = [
  {
    title: "BEDROOM SETUP",
    description:
      "Create your perfect sanctuary with our stylish and comfortable bedroom setups.",
  },
  {
    title: "KITCHEN SETUP",
    description:
      "Transform your kitchen with our efficient and beautiful setups for a delightful cooking experience.",
  },
  {
    title: "DRAWING SETUP",
    description:
      "Design inspiring drawing rooms perfect for creativity and professional work.",
  },
  {
    title: "LIVING SETUP",
    description:
      "Elevate your living area with our stylish and cozy setups for relaxation and entertainment.",
  },
  {
    title: "Architecture Design",
    description:
      "Innovative designs that harmonize aesthetics and functionality for timeless architecture.",
  },
  {
    title: "Concept Design",
    description:
      "Visionary solutions that turn ideas into reality, uniquely tailored to your needs.",
  }

];

const ServiceCard = ({ title, description }) => (
  <div className="p-4 lg:w-1/3">
    <div className="h-full bg-[#04091e] px-8 pt-16 pb-24 rounded-2xl overflow-hidden text-center relative">
      <h1 className="title-font sm:text-3xl text-4xl font-medium text-[#c6b069] mb-3">
        {title}
      </h1>
      <p className="leading-relaxed mb-3 text-slate-100">{description}</p>
    </div>
  </div>
);

export default function AboutComponent() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-4 py-16 mx-auto sm:py-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-black">
              What we offer to our clients
            </h2>
          </div>
          <div className="flex flex-wrap -m-4">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
