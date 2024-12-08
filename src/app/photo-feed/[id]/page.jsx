import Image from "next/image";
import wondersImages from "../wonders";

export default function PhotoPage({ params }) {
  const id = params.id;
  const photo = wondersImages.find((p) => p.id === id);
  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto">
        <div>
          <h1 className="text-center text-3xl font-bold my-4">
            {photo.photoName}
          </h1>
        </div>
        <Image
          alt={photo.photoName}
          src={photo.src}
          className="w=full object-cover aspect-square"
        />

        <div className="bg-white py-4">
          <h3 className="text-black">{photo.photographer}</h3>
          <h3 className="text-black">{photo.location}</h3>
        </div>
      </div>
    </div>
  );
}
