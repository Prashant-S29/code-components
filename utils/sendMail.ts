// /utils/sendMail.tsx

import emailjs from "@emailjs/browser";

interface MailResponse {
  status: "success" | "error";
  response?: any;
  error?: any;
}

export const sendMail = async (formData: {
  componentType: string;
  liveExampleLink: string;
  description: string;
}): Promise<MailResponse> => {
  const serviceID = process.env.NEXT_PUBLIC_MAIL_SERVICE_ID || "";
  const templateID = process.env.NEXT_PUBLIC_MAIL_TEMPLATE_ID || "";
  const publicKey = process.env.NEXT_PUBLIC_MAIL_PUBLIC_KEY || "";

  try {
    const response = await emailjs.send(
      serviceID,
      templateID,
      {
        componentType: formData.componentType,
        liveExampleLink: formData.liveExampleLink,
        description: formData.description,
      },
      publicKey,
    );
    return { status: "success", response };
  } catch (error) {
    return { status: "error", error };
  }
};
