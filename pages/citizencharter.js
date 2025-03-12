import Image from 'next/image';
import Banner from "/components/banner";

const CitizenCharter = () => {
  return (
    <div className="citizen-charter-container">
      <h1 className="citizen-charter-title">CITIZEN CHARTER</h1>
      {/* <div className="citizen-charter-logo">
        <Image src="/logo.png" alt="Bangladesh Finance Logo" width={300} height={100} />
      </div> */}
            {/* <Banner 
                          imageUrl="/images/doublemoneybanner.png" 
                          title="SAVINGS ACCOUNT" 
                          subtitle="Grow your wealth with our secure savings solutions." 
                        /> */}
      <h2 className="citizen-charter-section-title">CITIZEN CHARTER</h2>
      <p className="citizen-charter-description">
        The primary aim of the Citizen Charter written content is to outline and make public the 
        service-related obligations that organizations have to the people. It seeks to ensure transparency 
        and the right to information in an accessible and understandable manner while also holding 
        government more accountable and user-focused.
      </p>
      <p className="citizen-charter-download">
        Click <a href="/images/Citizen-Charter-Bangladesh-Finance.pdf" download>Here</a> to Download Bangladesh Finance Limited's, <strong>Citizen Charter</strong>.
      </p>

      <h2 className="citizen-charter-section-title">CITIZEN CHARTER FOCAL POINT</h2>
      <div className="citizen-charter-focal-points">
        <div className="citizen-charter-focal-point">
          <Image src="/images/M.-Kohinoor-Hossain.png" alt="Mohammad Kohinoor Hossain" width={250} height={300} />
          <div className="citizen-charter-details">
            <h3>FOCAL POINT OFFICER</h3>
            <p><strong>MOHAMMAD KOHINOOR HOSSAIN</strong></p>
            <p>Head of Sustainable Finance & Head of Branches</p>
            <p>MOBILE: 01618448730</p>
            <p>EMAIL: kohinoor@bd.finance</p>
          </div>
        </div>

        <div className="citizen-charter-focal-point">
          <Image src="/images/Ullash-3-860x1024.jpg" alt="Ullash Kumar Roy" width={250} height={300} />
          <div className="citizen-charter-details">
            <h3>ALTERNATIVE FOCAL POINT OFFICER</h3>
            <p><strong>ULLASH KUMAR ROY</strong></p>
            <p>MANAGER, SME & Sustainable Finance</p>
            <p>MOBILE: 01620011922</p>
            <p>EMAIL: ullash@bd.finance</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitizenCharter;
