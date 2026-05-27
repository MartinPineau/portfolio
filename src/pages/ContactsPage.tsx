import Button from "../components/Button";
import FormInput from "../components/FormInput";

const ContactsPage = () => {
  return (
    <section className="max-w-md mx-auto px-10 py-16">
      <div className="flex flex-col gap-6">
        <FormInput label="Name" type="text" />
        <FormInput label="Email" type="email" />
        <FormInput label="Message" multiline lines={6} />

        <div className="flex justify-end">
          <Button variant="primary">Send</Button>
        </div>
      </div>
    </section>
  );
};

export default ContactsPage;
