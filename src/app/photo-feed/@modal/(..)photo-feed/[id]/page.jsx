import Image from "next/image";
// import wondersImages from "../../../wonders";

const wondersImages = [
  {
    id: "1",
    photoName: "Greate Wall of China",
    src: photo1,
    photographer: "Ebrima Mbye on Laptop",
    location: "China",
  },
  {
    id: "2",
    photoName: "Greate Wall of China",
    src: photo2,
    photographer: "Ebrima Mbye on Laptop",
    location: "China",
  },
  {
    id: "3",
    photoName: "Greate Wall of China",
    src: photo3,
    photographer: "Ebrima Mbye on Laptop",
    location: "China",
  },
  {
    id: "4",
    photoName: "Greate Wall of China",
    src: photo4,
    photographer: "Ebrima Mbye on Laptop",
    location: "China",
  },
  {
    id: "5",
    photoName: "Greate Wall of China",
    src: photo5,
    photographer: "Ebrima Mbye on Laptop",
    location: "China",
  },
  {
    id: "6",
    photoName: "Greate Wall of China",
    src: photo6,
    photographer: "Ebrima Mbye on Laptop",
    location: "China",
  },
  {
    id: "7",
    photoName: "Greate Wall of China",
    src: photo7,
    photographer: "Ebrima Mbye on Laptop",
    location: "China",
  },
];

export default async function PhotoPage({ params }) {
  const id = await params.id;
  const photo = wondersImages.find((p) => p.id === id);
  return (
    <Modal className="container mx-auto my-10">
      <h3 className="text-yellow-400">Intercepted</h3>
      <div className="w-1/2 mx-auto">
        <div></div>
        <Image
          alt={photo.photoName}
          src={photo.src}
          className="w=full object-cover aspect-square"
        />

        <div className="bg-white py-4">
          <h2 className="text-xl font-semibold">{photo.photoName}</h2>
          <h3 className="text-black">{photo.photographer}</h3>
          <h3 className="text-black">{photo.location}</h3>
        </div>
      </div>
    </Modal>
  );
}
