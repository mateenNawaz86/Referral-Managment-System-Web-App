import React from "react";
import { BaseModal } from "./base-modal";
import { Form } from "../../form/form";
import { useMyRewards } from "../../../hooks/myRewards/useMyRewards";

export const GetCouponModal = ({ onClose }) => {
  const { fields, onSubmit, handleSubmit, errors } = useMyRewards();

  return (
    <BaseModal
      onClose={onClose}
      containerClassName="w-full max-w-[478px] min-h-[472px]"
    >
      <div className="pt-[30px] pb-10 px-[64px]">
        <p className="text-[28px] font-semibold text-[#000719] text-center">
          Choose a coupon
        </p>

        <Form
          formFields={fields}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          errors={errors}
        />
      </div>
    </BaseModal>
  );
};
