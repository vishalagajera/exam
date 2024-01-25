import React, { useCallback, useMemo } from "react";
import NavbarBeforeLogin from "../login/NavbarBeforeLogin";
import FormButton from "../FormButton";
import { useNavigate } from "react-router-dom";
import css from "../../Style/inputBoxs.module.css";
import Footer from "./Footer";
const TermAndConditions = () => {
  const navigate = useNavigate("");
  const modifiedDate = useMemo(() => {
    return Date();
  }, [TermAndConditions]);
  return (
    <>
      <NavbarBeforeLogin
        leftSection={
          <FormButton
            text={"Sign Up"}
            className={css.primaryButton}
            onClick={() => navigate("/signup")}
          />
        }
      />
      <h1 class="h1TermPage">Terms and Conditions</h1>
      <div class="bodyTermPage">
        <div class="containerTermPage">
          <p class="pTermPage">
            1. <strong>Acceptance of Terms:</strong> By creating an account on
            this job portal, you agree to comply with these terms and
            conditions. If you do not agree, please do not use the platform.
          </p>

          <p class="pTermPage">
            2. <strong>User Account:</strong> You are responsible for
            maintaining the confidentiality of your account and password. You
            agree to provide accurate and up-to-date information during the
            registration process. Notify us immediately of any unauthorized use
            of your account.
          </p>

          <p class="pTermPage">
            3. <strong>Job Postings:</strong> Employers are solely responsible
            for the accuracy and legitimacy of job postings. The platform
            reserves the right to remove any job posting that violates ethical
            standards, laws, or our policies.
          </p>

          <p class="pTermPage">
            By using this job portal, you acknowledge that you have read,
            understood, and agree to these terms and conditions.
          </p>

          <p class="pTermPage">Last Updated: {modifiedDate}</p>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default TermAndConditions;
