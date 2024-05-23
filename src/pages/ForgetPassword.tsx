import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FormErrors } from "./Login";
import { createUserResetSchema } from "../models/userResetSchema";
import { z } from "zod";

const ForgetPassword = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({ firstName: "", lastName: "" });
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState<FormErrors>({});
    const userResetSchema = createUserResetSchema(t);

    const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        try {
            userResetSchema.parse(formData);
            setMessage(
                `${t("emailYou")} ${formData.firstName} ${formData.lastName}...`
            );
        } catch (error) {
            if (error instanceof z.ZodError) {
                const newErrors: Record<string, string> = {};
                error.issues.forEach((issue) => {
                    newErrors[issue.path[0]] = issue.message;
                });
                setErrors(newErrors);
            }
        }
    };

    return (
        <div className="row d-flex justify-content-center align-items-center forget-password-page p-5">
            <div className="col-xl-6 col-lg-6 col-md-6 justify-content-end align-items-center">
                    <div className="col-md-8 p-4 justify-content-center">
                        <h4>{t("forgetPassword")}</h4>
                        <p>{t("forgetPasswordInstruction")}</p>
                    </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 justify-content-end align-items-center">
                <div className="card mt-5">
                    <div className="card-body">
                        <h4 className="mb-4 mt-4">{t("forgetPassword")}</h4>

                        <form className="mt-5" onSubmit={handleSubmit}>
                            <div className="form-group mb-4">
                                <label className="form-label">
                                    {t("firstName")}
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder={t("firstName")}
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="form-control"
                                />
                                {errors.firstName && (
                                    <div className="error text-danger fs-12">
                                        {errors.firstName}
                                    </div>
                                )}
                            </div>
                            <div className="form-group mb-5">
                                <label className="form-label">
                                    {t("lastName")}
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder={t("lastName")}
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="form-control"
                                />
                                 {errors.lastName && (
                                    <div className="error text-danger fs-12">
                                        {errors.lastName}
                                    </div>
                                )}
                            </div>
                            <button
                                type="button"
                                className="btn btn-success btn-block"
                                onClick={handleSubmit}
                            >
                                {t("submit")}
                            </button>
                        </form>
                        <p className="mt-4">{message && <p>{message}</p>}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;
