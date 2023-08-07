import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dob, setDob] = useState("");
  const [isAcceptedTerms, setIsAcceptedTerms] = useState(false);
  const { signup, error, isLoading } = useSignup();
  const [verifyCode, setVerifyCode] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(dob);
    await signup(email, password, confirmPassword, dob);
  };

  return (
    <>
      <div
        class="modal fade"
        id="signUp"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content" style={{ backgroundColor: "#ACDBDF" }}>
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Algorithmia Account Sign Up
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    Username/Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="recipient-name"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <label for="recipient-name" class="col-form-label">
                  Verification Code
                </label>
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    onChange={(e) => setVerifyCode(e.target.value)}
                    value={verifyCode}
                  />
                  <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button">
                      Send
                    </button>
                  </div>
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    Date of Birth
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    onChange={(e) => setDob(e.target.value)}
                    value={dob}
                  />
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control mt-1"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control mt-1"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                  />
                </div>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    onChange={(e) => setIsAcceptedTerms(e.target.value)}
                    value={isAcceptedTerms}
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    I accept Terms and Conditions
                  </label>
                </div>

                <br />
                <div class="d-grid gap-2 col-6 mx-auto">
                  <button
                    class="btn btn-primary"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Register
                  </button>
                </div>
                <br />
                <div class="row mb-4 ">
                  <div class="col-md-6 d-flex justify-content-center">
                    <a href="#!">Already have an Account?</a>
                  </div>
                  <div class="col-md-6 d-flex justify-content-center">
                    <a href="#!">Login</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
