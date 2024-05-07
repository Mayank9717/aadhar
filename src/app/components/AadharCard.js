import React from "react";

function AadharCard({ userData, uid }) {
  return (
    <div className="form-field-2">
      <div className="user-container">
        <div>
          <div className="aadhar-card">
            <div className="header">
              <div>
                <img src="/Images/lion.png" alt="lion" width={30} />
              </div>
              <div>
                <img src="/Images/gov.png" alt="gov" width={200} />
              </div>
              <div>
                <img src="/Images/adhar.png" alt="aadhar" width={70} />
              </div>
            </div>
            <div className="aadhar-detail">
              <div>
                <img
                  src="/Images/passport.jpg"
                  alt="aadhar"
                  width={100}
                  height={100}
                />
              </div>
              <div>
                <table>
                  <tbody>
                    <tr>
                      <td className="text">Name :</td>
                      <td className="text">{userData?.fullName}</td>
                    </tr>
                    <tr>
                      <td className="text">DOB :</td>
                      <td className="text">{userData?.dob}</td>
                    </tr>
                    <tr>
                      <td className="text">Gender :</td>
                      <td className="text">{userData?.gender}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <img src="/Images/qr.png" alt="aadhar" width={80} height={80} />
              </div>
            </div>
            <div className="uid">
              <span>{uid}</span>
            </div>
            <hr className="mt-2"></hr>
            <h2 className="content">
              मेरा <span className="text-red">आधार</span> मेरी पहचान
            </h2>
          </div>
          <div className="aadhar-card">
            <div className="header">
              <div>
                <img src="/Images/lion.png" alt="lion" width={30} />
              </div>
              <div>
                <img src="/Images/gov.png" alt="gov" width={200} />
              </div>
              <div>
                <img src="/Images/adhar.png" alt="aadhar" width={70} />
              </div>
            </div>
            <div className="aadhar-detail">
              <div>
                <table>
                  <tbody>
                    <tr>
                      <td className="add text">Address :</td>
                      <td className="break text">{userData?.address}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <img src="/Images/qr.png" alt="aadhar" width={80} height={80} />
              </div>
            </div>
            <div className="uid">
              <span>{uid}</span>
            </div>
            <hr className="mt-2"></hr>
            <div className="icon">
              <div className="radios">
                <img src="/Images/telephone.png" width={20} />
                <div className="cont">1947</div>
              </div>
              <div className="radios">
                <img src="/Images/email.png" width={20} />
                <div className="cont">help@uidai.gov.in</div>
              </div>
              <div className="radios">
                <img src="/Images/globe.png" width={20} />
                <div className="cont">www.uidai.gov.in</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AadharCard;
