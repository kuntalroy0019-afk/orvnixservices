import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#090c02",
          color: "#ff3c00",
          fontSize: 46,
          fontWeight: 700,
          borderRadius: 16,
        }}
      >
        O
      </div>
    ),
    { ...size }
  );
}
