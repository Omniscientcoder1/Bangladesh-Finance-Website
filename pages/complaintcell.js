const branches = [
    { id: 1, branch: "HEAD OFFICE" },
    { id: 2, branch: "PRINCIPAL BRANCH" },
    { id: 3, branch: "CHATTOGRAM BRANCH" },
    { id: 4, branch: "JASHORE BRANCH" },
    { id: 5, branch: "SYLHET BRANCH" },
    { id: 6, branch: "UTTARA BRANCH" },
    { id: 7, branch: "BANGSHAL BRANCH" },
    { id: 8, branch: "GAZIPUR BRANCH" },
  ];
  
  const contacts = [
    {
      id: 1,
      branchId: 1, // HEAD OFFICE
      name: "MD. EMRAN HOSSAIN",
      phone: "01618448938",
      email: "emran@bd.finance",
    },
    {
      id: 2,
      branchId: 2, // PRINCIPAL BRANCH
      name: "AFROZA PARVIN POLLY",
      phone: "01618448738",
      email: "afroza22@bd.finance",
    },
    {
      id: 3,
      branchId: 3, // CHATTOGRAM BRANCH
      name: "NAIMA SULTANA TUSHY",
      phone: "01772717876",
      email: "chattagram.branch@bd.finance",
    },
    {
      id: 4,
      branchId: 4, // JASHORE BRANCH
      name: "KAMRUN NAHAR",
      phone: "01718768115",
      email: "kamrun.nahar@bd.finance",
    },
    {
      id: 5,
      branchId: 5, // SYLHET BRANCH
      name: "MD. ABDUL AWAL",
      phone: "01618448989",
      email: "sylhet.branch@bd.finance",
    },
    {
      id: 6,
      branchId: 6, // UTTARA BRANCH
      name: "MAHABUB MOLLAH",
      phone: "01618448750",
      email: "mollah@bd.finance",
    },
    {
      id: 7,
      branchId: 7, // BANGSHAL BRANCH
      name: "MONIKA RANI PAUL",
      phone: "01983645056",
      email: "bangshal.branch@bd.finance",
    },
    {
      id: 8,
      branchId: 8, // GAZIPUR BRANCH
      name: "MOHAMMAD MOTIUR RAHMAN",
      phone: "01618448914",
      email: "gazipur.branch@bd.finance",
    },
  ];
  
  const ComplaintCell = () => {
    return (
      <div className="complaint-container">
        <h2 className="section-title">COMPLAINT CELL</h2>
        <h2 className="section-title">COMPLAINT CELL</h2>
        <p className="sub-title">Please contact for any complaint or suggestions</p>
  
        <div className="complaint-content">
          {branches.map(({ id, branch }) => (
            <div key={id} className="branch-section">
              <div className="branch-box">{branch}</div>
              {contacts
                .filter((contact) => contact.branchId === id)
                .map(({ id, name, phone, email }) => (
                  <div key={id} className="contact-card">
                    <h4>{name}</h4>
                    <p><strong>Personal Number:</strong> {phone}</p>
                    <p><strong>E-mail:</strong> {email}</p>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ComplaintCell;
  