export const SkeletonListLine = ({
  size = 6,
  col = 1,
}: {
  size?: number;
  col?: number;
}) => {
  const skeleton = [];

  for (let i = 0; i < size; i++) {
    skeleton.push(
      <div
        key={i}
        style={{ minHeight: "24px" }}
        className="infusedui skeleton-root state-loader"
      ></div>
    );
  }

  return (
    <div className={`infusedui grid rgs-8 tc-${col}`}>
      {skeleton.map((item) => item)}
    </div>
  );
};

export const SkeletonTitle = ({ type }: { type?: "h1" | "h2" | "h3" }) => {
  switch (type) {
    case "h1":
      return (
        <div
          style={{ minHeight: "64px", maxWidth: "75%" }}
          className="infusedui skeleton-root state-loader"
        ></div>
      );
    case "h2":
      return (
        <div
          style={{ minHeight: "56px", maxWidth: "75%" }}
          className="infusedui skeleton-root state-loader"
        ></div>
      );
    case "h3":
      return (
        <div
          style={{ minHeight: "48px", maxWidth: "75%" }}
          className="infusedui skeleton-root state-loader"
        ></div>
      );
    default:
      return (
        <div
          style={{ minHeight: "40px", maxWidth: "75%" }}
          className="infusedui skeleton-root state-loader"
        ></div>
      );
  }
};

export const SkeletonText = ({
  size = 6,
}: {
  size?: 1 | 2 | 3 | 4 | 5 | 6;
}) => {
  const skeleton = [];
  const lineSize = ["80%", "55%", "65%", "35%", "45%", "35%"];

  for (let i = 0; i < size; i++) {
    skeleton.push(
      <div
        key={i}
        style={{ minHeight: "16px", maxWidth: lineSize[i] }}
        className="infusedui skeleton-root state-loader"
      ></div>
    );
  }

  return (
    <div className="infusedui grid rgs-8">{skeleton.map((item) => item)}</div>
  );
};

export const SkeletonButton = () => {
  return (
    <div className="infusedui teaui cta level-primary sl state-loader"></div>
  );
};

export const SkeletonBlockquote = () => {
  return (
    <blockquote className="infusedui blockquote state-loader">
      <SkeletonText size={3} />
    </blockquote>
  );
};
