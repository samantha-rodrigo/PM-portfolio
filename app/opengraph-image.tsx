import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { SITE } from "@/lib/site";

export const alt = `${SITE.name} — ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const photoData = await readFile(join(process.cwd(), "public/images/headshot.jpg"));
  const photoSrc = `data:image/jpeg;base64,${photoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          background: "#0a0a0a",
          padding: "0 90px",
        }}
      >
        <img
          src={photoSrc}
          alt=""
          width={280}
          height={280}
          style={{
            borderRadius: "50%",
            objectFit: "cover",
            border: "3px solid #c87137",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", marginLeft: 64 }}>
          <div style={{ fontSize: 68, fontWeight: 700, color: "#f5f5f5" }}>{SITE.name}</div>
          <div style={{ fontSize: 32, color: "#c87137", marginTop: 20 }}>{SITE.tagline}</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
