import { rgb } from "pdf-lib";

const obj = (x, y, s, f) => ({
  x: x,
  y: y,
  size: s,
  font: f,
  color: rgb(0.03, 0.3, 0.27),
});

export default async function xandy(Page, Qdata, f) {
  const {
    quotationNo,
    qdate,
    companyName,
    companyWebsite,
    companyCity,
    domain1,
    domain2,
    domain3,
    service1,
    service2,
    service3,
    host1,
    host2,
    host3,
    web1,
    web2,
    web3,
    tech1,
    tech2,
    tech3,
    email1,
    email2,
    email3,
  } = Qdata;
  const yearData = [
    [domain1, service1, host1, web1, tech1, email1],
    [domain2, service2, host2, web2, tech2, email2],
    [domain3, service3, host3, web3, tech3, email3],
  ];

  const qt =
    parseInt(quotationNo) < 10
      ? `#QTNO00${quotationNo}`
      : `#QTNO0${quotationNo}`;

  //qutation number
  Page.drawText(qt, obj(500, 700, 10, f));
  //qutation Date
  Page.drawText(qdate, obj(483, 656, 14, f));
  //Client Address
  Page.drawText(String(companyName).toUpperCase(), obj(30, 676, 16, f));
  Page.drawText(String(companyWebsite).toLowerCase(), obj(30, 662, 14, f));
  Page.drawText(companyCity, obj(30, 647, 14, f));

  //discription table
  let x = 365;
  let y = 552;
  let total = 0;
  yearData.forEach((e) => {
    let subtotal = 0;
    e.forEach((a) => {
      subtotal += parseInt(a);
      Page.drawText(String(a), obj(x, y, 10, f));
      y -= 36;
    });
    Page.drawText(String(subtotal), obj(x, y, 10, f));
    x += 81;
    y = 552;
    total += subtotal;
  });
  Page.drawText(String(total), obj(515, 287, 10, f));
}
