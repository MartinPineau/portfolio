type Props = {
  title: string;
  description: string;
  image: string;
  tags: string[];
};

const ProjectPreview = ({ title, description, image, tags }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <span
        className="text-sm text-[var(--color-gray-medium)]"
        style={{ fontFamily: "var(--font-nunito)" }}
      >
        Preview
      </span>
      <div className="rounded-2xl border border-[var(--color-gray-light)] overflow-hidden bg-[var(--color-bg-light)]">
        {image ? (
          <img
            src={image}
            alt={title || "Preview"}
            className="w-full h-40 object-cover"
          />
        ) : (
          <div className="w-full h-40 flex items-center justify-center text-sm text-[var(--color-gray-medium)] bg-[var(--color-gray-light)]">
            No image
          </div>
        )}
        <div className="p-5">
          <h3
            className="text-lg font-bold text-[var(--color-main-dark)] mb-2"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {title || "Project title"}
          </h3>
          <p
            className="text-sm text-[var(--color-gray-medium)] leading-relaxed line-clamp-3"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            {description || "Project description will appear here."}
          </p>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-[var(--color-main-yellow)]/20 text-[var(--color-main-dark)] text-xs font-semibold px-2 py-1 rounded-full"
                  style={{ fontFamily: "var(--font-nunito)" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectPreview;
