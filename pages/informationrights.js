import Image from "next/image";

const officers = [
  {
    id: 1,
    name: "Md. Kyser Hamid",
    title: "Appellate Authority",
    position: "Managing Director & CEO",
    email: "md@bd.finance",
    phone: "+88-02-9559146",
    image: "/images/1. Md. Kyser Hamid.png",
  },
  {
    id: 2,
    name: "Md. Ashikur Rahman",
    title: "Information Rights Officer",
    position: "Brand & Communication",
    email: "ashikur.rahman@bd.finance",
    phone: "+8801676329668",
    image: "/images/5. Md. Ashikur Rahman.png",
  },
  {
    id: 3,
    name: "Munshi Abu Naim FCS",
    title: "Alternate Information Rights Officer",
    position: "Group Company Secretary",
    email: "naim@bd.finance",
    phone: "+8801618448756",
    image: "/images/7. Munshi Abu Naim.png",
  },
];

const InformationRights = () => {
  return (
    <div className="info-rights-container">
      <h2 className="section-title">INFORMATION RIGHTS</h2>
      <h2 className="section-title">INFORMATION RIGHTS</h2>
      <div className="cards-container">
        {officers.map(({ id, name, title, position, email, phone, image }) => (
          <div className="info-card" key={id}>
            <div className="card-image">
              <Image src={image} alt={name} width={150} height={150} className="profile-image" />
            </div>
            <h3 className="card-title">{title}</h3>
            <h4 className="card-name">{name}</h4>
            <p className="card-position">{position}</p>
            <p className="contact-title"><strong>Contact Information</strong></p>
            <p className="contact-info">Email: {email}</p>
            <p className="contact-info">Phone: {phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InformationRights;
