import React from "react";
import CompanyNameComponent from "../components/CompanyNameComponent";
import Navbar from "../../components/common/Navbar";
import ChatComponent from "../../components/common/ChatComponent";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setCompanyName, setNewSession } from "../actions";

const SetCompanyName = withRouter(({ onClick, newSession, history }) => {
  return (
    <div>
      <Navbar />
      <div className="logomator-base">
        <div className="container">
          <ChatComponent
            text={
              <h1>
                <span>Hi, I’m Ada.</span> Your personal logo design assistant.
                <br /> Let’s start designing you the perfect logo - it only
                takes a few minutes.
              </h1>
            }
          />
          <CompanyNameComponent onClick={onClick} history={history} newSession={newSession} />
        </div>
      </div>
    </div>
  );
});

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (companyName) => {
      dispatch(setCompanyName(companyName));
    },
    newSession: () => {
      dispatch(setNewSession());
    },
  };
};

const HomeComponent = connect(null, mapDispatchToProps)(SetCompanyName);

export default HomeComponent;
