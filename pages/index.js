import Head from "next/head";
import { useState } from "react";
import generatePDF from "../components/converter";

const description = [
  { reg: "domain registration", name: "domain" },
  { reg: "administrative service charge", name: "service" },
  { reg: "hosting registration", name: "host" },
  { reg: "web development & designing", name: "web" },
  { reg: "technical support", name: "tech" },
  { reg: "email service", name: "email" },
];

export default function Home() {
  const [Qdata, setQdata] = useState({
    quotationNo: "",
    qdate: "",
    companyName: "",
    companyWebsite: "",
    companyCity: "",
    domain1: 1000,
    domain2: 1000,
    domain3: 1000,
    service1: 500,
    service2: 500,
    service3: 500,
    host1: 2500,
    host2: 2500,
    host3: 2500,
    web1: 4000,
    web2: 0,
    web3: 0,
    tech1: 0,
    tech2: 2500,
    tech3: 2500,
    email1: 0,
    email2: 0,
    email3: 0,
  });
  const ValueHandler = (e) => {
    setQdata({ ...Qdata, [e.target.name]: e.target.value });
  };
  console.log(Qdata);
  return (
    <div>
      <Head>
        <title>Attirant Webz</title>
        <meta
          name="description"
          content="Qutation Generator for Attirant Webz"
        />
      </Head>
      <header>
        <h1>Quotation Generator</h1>
        <article>
          <div className="qmain">
            <label htmlFor="qno">quotation no</label>
            <div>
              <input
                type="text"
                name="quotationNo"
                id="qno"
                placeholder="Quotation Number"
                value={Qdata.quotationNo}
                onChange={ValueHandler}
                required
              />
              <input
                type="date"
                name="qdate"
                value={Qdata.qdate}
                onChange={ValueHandler}
                required
              />
            </div>
          </div>
          <div className="qmain">
            <label htmlFor="qto">Client Details</label>
            <div>
              <input
                type="text"
                name="companyName"
                id="qto"
                placeholder="Name"
                value={Qdata.companyName}
                onChange={ValueHandler}
                required
              />
              <input
                type="text"
                name="companyWebsite"
                placeholder="Website"
                value={Qdata.companyWebsite}
                onChange={ValueHandler}
                required
              />
              <input
                type="text"
                name="companyCity"
                placeholder="City"
                value={Qdata.companyCity}
                onChange={ValueHandler}
                required
              />
            </div>
          </div>
        </article>
        <article>
          {description.map((a, i) => (
            <div key={a.reg} className="qmain">
              <label>{a.reg}</label>
              <menu>
                <input
                  type="number"
                  name={`${a.name}1`}
                  placeholder="year 1"
                  value={Qdata[`${a.name}1`]}
                  onChange={ValueHandler}
                  required
                />
                <input
                  type="number"
                  name={`${a.name}2`}
                  placeholder="year 2"
                  value={Qdata[`${a.name}2`]}
                  onChange={ValueHandler}
                  required
                />
                <input
                  type="number"
                  name={`${a.name}3`}
                  placeholder="year 3"
                  value={Qdata[`${a.name}3`]}
                  onChange={ValueHandler}
                  required
                />
              </menu>
            </div>
          ))}
        </article>
        {/* <div>
          <label>Digital Signature</label>
          <input type="file" />
        </div> */}
      </header>
      <button onClick={() => generatePDF(Qdata)}>Generate Quatation</button>
    </div>
  );
}
