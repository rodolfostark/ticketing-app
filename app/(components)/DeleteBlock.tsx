"use client";

import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

interface DeleteBlockProps {
    id: string;
}

export default function DeleteBlock({ id }: DeleteBlockProps) {
    const router = useRouter();
    async function deleteTicket() {
        const response = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
            method: "DELETE"
        });
        if (response.ok) {
            router.refresh();
        }
    }
    return (
        <FontAwesomeIcon
            icon={faX}
            className="text-red-300 hover:cursor-pointer"
            onClick={deleteTicket}
        />
    )
}