import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

function ContactMe() {
  const [isLoading, setIsLoading] = useState(false);
  const IDs = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  };

  const form = useRef();

  async function sendMail(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.sendForm(IDs.serviceId, IDs.templateId, form.current, {
        publicKey: IDs.publicKey,
      });
      toast.success("Email sent successfully!");
    } catch (error) {
      toast.error("Failed to send email!");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section
      id="contactme"
      className="w-11/12 px-4 py-4 mx-auto mb-6 text-left sm:w-4/5"
    >
      <h3 className="mb-4 text-xl font-semibold">Contact Me</h3>
      <form
        ref={form}
        onSubmit={sendMail}
        className="w-4/5 px-8 py-8 space-y-12 rounded-lg shadow-2xl shadow-black/40 bg-emerald-900"
      >
        <div className="flex flex-col gap-2 md:gap-4 md:items-center md:flex-row">
          <label htmlFor="name" className="uppercase t min-w-24">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="flex-1 p-2 rounded text-emerald-900 bg-emerald-100 focus:outline-none focus:ring-4 focus:ring-emerald-500"
          />
        </div>

        <div className="flex flex-col gap-2 md:gap-4 md:items-center md:flex-row">
          <label htmlFor="subject" className="uppercase min-w-24">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="flex-1 p-2 rounded text-emerald-900 bg-emerald-100 focus:outline-none focus:ring-4 focus:ring-emerald-500"
          />
        </div>

        <div className="flex flex-col gap-2 md:gap-4 md:items-center md:flex-row">
          <label htmlFor="message" className="uppercase">
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            name="message"
            className="w-full p-2 rounded text-emerald-900 bg-emerald-100 focus:outline-none focus:ring-4 focus:ring-emerald-500"
          ></textarea>
        </div>

        <button
          disabled={isLoading}
          type="submit"
          className="bg-emerald-500 text-emerald-200 disabled:bg-emerald-100 hover:text-emerald-900"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default ContactMe;
