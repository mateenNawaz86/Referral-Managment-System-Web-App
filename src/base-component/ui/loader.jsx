export const Loader = ({ height, width, radius, color }) => {
  return (
    <div
      style={{
        width,
        height,
        borderRadius: radius,
        backgroundColor: color,
      }}
    ></div>
  );
};
