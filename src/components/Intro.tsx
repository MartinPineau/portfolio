import Button from "./Button";

const Intro = () => {
  return (
    <section className="max-w-2xl px-10 py-16">
      <p
        className="text-lg font-bold tracking-wide mb-6 text-[var(--color-main-yellow)]"
        style={{ fontFamily: "var(--font-nunito)" }}
      >
        UI/UX DESIGNER
      </p>

      <h1
        className="text-6xl font-extrabold leading-tight text-[var(--color-main-dark)] mb-8"
        style={{ fontFamily: "var(--font-poppins)" }}
      >
        Hello, my name is Madelyn Torff
      </h1>

      <p
        className="text-lg text-[var(--color-gray-medium)] leading-relaxed mb-10"
        style={{ fontFamily: "var(--font-nunito)" }}
      >
        Short text with details about you, what you do or your professional
        career. You can add more information on the about page.
      </p>

      <div
        className="flex items-center gap-4"
        style={{ fontFamily: "var(--font-roboto)" }}
      >
        <Button variant="primary">Projects</Button>
        <Button variant="outline">LinkedIn</Button>
      </div>
    </section>
  );
};

export default Intro;
