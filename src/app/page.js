import Image from "next/image";
import iotPhoto from "../../public/iot.png";
export default function Home() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Image
        src={iotPhoto}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      ></Image>
    </div>
  );
}
