import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { User, createUserSchema } from "../models/userSchema";
import { z } from "zod";
import { login } from "../actions/auth";
import useAuthentication from "../hooks/useAuthentication";
import { useTranslation } from "react-i18next";

export interface FormErrors {
    [key: string]: string | undefined;
}

const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const userSchema = createUserSchema(t);
    const dispatch = useAppDispatch();
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState<FormErrors>({});
    const { loading, isAuthenticated } = useAuthentication();

    const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = async (event: React.FormEvent) => {
        setErrors({});

        try {
            userSchema.parse(formData);
            dispatch(login(formData as User));
            // if (result.type.endsWith("fulfilled")) {
                // setWelcomeMessage(`Welcome back, ${formData.email}!`);
                // setSuccess(true);
                // setTimeout(() => {
                //     setSuccess(false);  // Resets the login form after a delay
                // }, 3000);
            // }
        } catch (error) {
            if (error instanceof z.ZodError) {
                const newErrors: FormErrors = {};
                for (const issue of error.issues) {
                    if (issue.path[0]) {
                        newErrors[issue.path[0]] = issue.message;
                    }
                }
                setErrors(newErrors);
            }
        }
    };

    return (
        <React.Fragment>
            <div className="row">
                <div className="row d-flex justify-content-center align-items-center ">
                    {loading ? (
                        <div className="overlay">
                            <div className="overlay__inner">
                                <div className="overlay__content">
                                    <span className="spinner"></span>
                                </div>
                            </div>
                        </div>
                    ) : null}

                    {isAuthenticated ? (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-7 justify-content-center align-items-center">
                            <div className="welcome-message">
                                <h2>{t("welcomeBack")}</h2>
                            </div>
                        </div>
                    ) : (
                        <div className={`col-xl-4 col-lg-4 col-md-6 col-sm-7 justify-content-center align-items-center login-card`}>
                            <div className="card mt-5">
                                <div className="card-body">
                                    <div className="nav nav-tabs border-bottom-0">
                                        <div
                                            className="tab-content w-100"
                                            id="nav-tabContent"
                                        >
                                            <div
                                                className="tab-pane fade active show"
                                                id="nav-personal"
                                            >
                                                <form
                                                    className="dz-form pb-3"
                                                    onSubmit={handleSubmit}
                                                >
                                                    <div className="mb-5">
                                                        <h3 className="form-title m-t0">
                                                            {t("welcomeBack")}
                                                        </h3>
                                                        <div className="dz-separator-outer m-b5">
                                                            <div className="dz-separator bg-primary style-liner"></div>
                                                        </div>
                                                        <p>
                                                            {t(
                                                                "excitedToSeeYou"
                                                            )}
                                                        </p>
                                                    </div>
                                                    <div className="form-group mb-3">
                                                        <label className="form-label">
                                                            {t("email")}
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="email"
                                                            value={
                                                                formData.email
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                        />
                                                        {errors.email && (
                                                            <div className="error text-danger fs-12">
                                                                {errors.email}
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="form-group mb-3">
                                                        <label className="form-label">
                                                            {t("password")}
                                                        </label>
                                                        <input
                                                            type="password"
                                                            className="form-control"
                                                            name="password"
                                                            value={
                                                                formData.password
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                        />
                                                        {errors.password && (
                                                            <div className="error text-danger fs-12">
                                                                {
                                                                    errors.password
                                                                }
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="form-group mb-3 mt-4">
                                                        <div className="d-grip gap-2">
                                                            <button
                                                                type="button"
                                                                className="btn btn-success btn-block"
                                                                onClick={
                                                                    handleSubmit
                                                                }
                                                            >
                                                                {t("login")}
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="form-group mb-5 mt-1 d-flex justify-content-center">
                                                        {/* <button
                                                        type="button"
                                                        className="btn btn-link text-center"
                                                    >
                                                        {t("forgetPassword")}
                                                    </button> */}
                                                        <Link
                                                            to="/forget-password"
                                                            className="btn btn-link text-center"
                                                        >
                                                            {t(
                                                                "forgetPassword"
                                                            )}
                                                        </Link>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer mt-5"></div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </React.Fragment>
    );
};

export default LoginPage;
