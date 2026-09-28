import { site } from "@/data/site";

import { CopyEmailButton } from "./CopyEmailButton";
import { SectionHeading } from "./SectionHeading";
import { SocialLinks } from "./SocialLinks";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-20 pb-16"
    >
      <SectionHeading id="contact-heading">Contact</SectionHeading>
      <p className="max-w-md text-[0.95rem] leading-7 text-muted">
        Currently looking for frontend and full-stack (frontend-focus) roles.
        The fastest way to reach me is email.
      </p>
      <div className="mt-5">
        <CopyEmailButton email={site.email} />
      </div>
      <SocialLinks className="mt-6 lg:hidden" />
    </section>
  );
}
