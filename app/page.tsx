import Image from "next/image";

export default function Home() {
  return (
    <div
      className="
    w-full
    h-full
    flex
    justify-center    
    "
    >
      <div className="flex flex-col justify-center items-center">
        <div className="font-bold ">Welcome to Ali Shop</div>
        <hr />
        <p className="pt-5">Barang-barang terbaik dan terlucu</p>
      </div>
    </div>
  );
}
