import React, { Component } from "react";
import { render } from "react-dom";
import { Aadhaar_directory as canister } from "../../declarations/Aadhaar_directory";
import "./styles.css";

class AadhaarDirectory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newEntryName: "",
      newEntryDesc: "",
      newEntryAadhaar: "",
      lookupName: "",
    };
  }

  handleInputChange = (field, value) => {
    this.setState({ [field]: value });
  };

  doInsert = async () => {
    const { newEntryName, newEntryDesc, newEntryAadhaar } = this.state;
    canister.insert(newEntryName, { desc: newEntryDesc, Aadhaar: newEntryAadhaar });
  };

  lookup = async () => {
    const { lookupName } = this.state;
    canister.lookup(lookupName).then((opt_entry) => {
      const entry = opt_entry.length > 0 ? opt_entry[0] : { desc: "", Aadhaar: "" };
      this.setState({
        newEntryName: lookupName,
        newEntryDesc: entry.desc,
        newEntryAadhaar: entry.Aadhaar,
      });
    });
  };

  render() {
    const { newEntryName, newEntryDesc, newEntryAadhaar, lookupName } = this.state;

    return (
      <div className="Aadhaar-directory">
        <h1>Aadhaar Directory</h1>
        <div className="insert-update">
          <p>Insert or update a new Aadhaar Number entry:</p>
          <table>
            <tbody>
              <tr>
                <td>Name:</td>
                <td>
                  <input
                    required
                    value={newEntryName}
                    onChange={(e) => this.handleInputChange("newEntryName", e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>Description:</td>
                <td>
                  <input
                    value={newEntryDesc}
                    onChange={(e) => this.handleInputChange("newEntryDesc", e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>Aadhaar Number:</td>
                <td>
                  <input
                    required
                    value={newEntryAadhaar}
                    onChange={(e) => this.handleInputChange("newEntryAadhaar", e.target.value)}
                    type="tel"
                    pattern="[0-9]{12}"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button onClick={this.doInsert}>Insert or Update</button>
        </div>
        <div className="lookup">
          <p>Lookup Name:</p>
          <input
            value={lookupName}
            onChange={(e) => this.handleInputChange("lookupName", e.target.value)}
          />
          <button onClick={this.lookup}>Lookup</button>
        </div>
      </div>
    );
  }
}

render(<AadhaarDirectory />, document.getElementById("app"));
