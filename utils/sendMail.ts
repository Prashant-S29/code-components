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
  try {
    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_MAIL_SERVICE_ID || "",
      process.env.NEXT_PUBLIC_MAIL_TEMPLATE_ID || "",
      {
        componentType: formData.componentType,
        liveExampleLink: formData.liveExampleLink,
        description: formData.description,
      },
      process.env.NEXT_PUBLIC_MAIL_PUBLIC_KEY || "",
    );
    return { status: "success", response };
  } catch (error) {
    return { status: "error", error };
  }
};
