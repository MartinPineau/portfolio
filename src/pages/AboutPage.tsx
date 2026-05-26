import bg2 from "../assets/bg-2.png";

const AboutPage = () => {
  return (
    <section className="max-w-5xl mx-auto px-10 py-16 flex items-center gap-16">
      <div className="flex-1">
        <h1
          className="text-5xl font-bold text-[var(--color-main-dark)] mb-6"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          About me
        </h1>
        <p
          className="text-base text-[var(--color-gray-medium)] leading-relaxed"
          style={{ fontFamily: "var(--font-nunito)" }}
        >
          Nisl arcu, scelerisque neque ut. Tincidunt amet, tempor duis tortor
          neque auctor dis ipsum. Pretium cras amet odio amet eleifend id sed
          cras sed. Aliquet risus posuere aliquet imperdiet sit.
        </p>
      </div>

      <div className="flex-1 flex justify-center">
        <img
          src={bg2}
          alt="Profile"
          className="w-full max-w-[420px] h-auto"
        />
      </div>
    </section>
  );
};

export default AboutPage;
