"use client";

import { usePetContext } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function PetList() {
  const { pets, selectedPetId, handleChangeSelectedPetId } = usePetContext();

  return (
    <ul className="bg-white border-b border-light">
      {pets.map((pet) => (
        <li key={pet.id}>
          <button
            onClick={() => handleChangeSelectedPetId(pet.id)}
            className={cn(
              { "bg-[#eff1f2]": pet.id === selectedPetId },
              "flex items-center gap-3 h-[70px] w-full px-5 text-base hover:bg-[#eff1f2] focus:bg-[#eff1f2] transition"
            )}
          >
            <Image
              src={pet.imageUrl}
              alt=""
              width={45}
              height={45}
              className="w-[45px] h-[45px] rounded-full object-cover"
            />
            <p className="font-semibold">{pet.name}</p>
          </button>
        </li>
      ))}
    </ul>
  );
}
