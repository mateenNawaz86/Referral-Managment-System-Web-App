import React, { useRef } from "react";
import { BaseModal } from "./base-modal";
import { CopyField } from "../copy-link-field";
import { shareLinks } from "../../../utils/static";
import { NextIcon } from "../../../assets/svgs/components/next-icon";

export const ShareModal = ({ onClose }) => {
  const scrollRef = useRef(null);

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <BaseModal
      onClose={onClose}
      containerClassName="w-full max-w-[341px] md:max-w-[728px] min-h-fit"
    >
      <div className="p-5 md:px-[30px] md:pt-[28px] md:pb-[50px]">
        <p className="text-lg md:text-[36px] font-semibold mb-[22px]">
          Share Referral Link
        </p>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-5 justify-between md:justify-center md:gap-x-6 flex-wrap md:flex-nowrap md:overflow-x-auto no-scrollbar my-5 md:mt-[22px] md:mb-[47px]"
          >
            {shareLinks?.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                title={link.label}
                className="flex flex-col items-center gap-y-[6px] md:gap-y-3 text-center"
              >
                {link.icon}
                <span className="text-[10px] md:text-[20px] font-medium">
                  {link.label}
                </span>
              </a>
            ))}

            <div className="absolute -right-4 top-5 hidden md:block">
              <NextIcon onClick={handleScrollRight} />
            </div>
          </div>

          <CopyField value="https://project-link-demo.web.app/xyz123" />
        </div>
      </div>
    </BaseModal>
  );
};
