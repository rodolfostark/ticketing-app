"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function TicketForm() {
    const router = useRouter();
    const startingTicketData = {
        title: "",
        description: "",
        priority: 1,
        progress: 0,
        status: "not started",
        category: "Hardware Problem"
    };
    const [formData, setFormData] = useState(startingTicketData);

    function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
        const value = event.target.value;
        const name = event.target.name;

        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    async function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        const response = await fetch("/api/Tickets", {
            method: "POST",
            body: JSON.stringify({formData})
        });

        if(!response.ok) {
            throw new Error("Failed to create Ticket");
        }
        router.refresh();
        router.push("/");
    }

    return (
        <div className="flex justify-center">
            <form 
                className="flex flex-col gap-3 w-1/2 bg-slate-700 shadow-2xl" 
                method="post" 
                onSubmit={handleSubmit}>
                <h3>Create Your Ticket</h3>
                <label>Title</label>
                <input 
                    type="text" 
                    id="title" 
                    name="title" 
                    onChange={handleChange} 
                    required={true}
                    value={formData.title}
                />
                <label>Description</label>
                <textarea 
                    id="description" 
                    name="description" 
                    onChange={handleChange} 
                    required={true}
                    value={formData.description}
                    rows={5}
                />
                <label>Category</label>
                <select name="category" value={formData.category} onChange={handleChange}>
                    <option value="Hardware Problem">Hardware Problem</option>
                    <option value="Softdware Problem">Softdware Problem</option>
                    <option value="Project">Project</option>
                </select>
                <label>Priority</label>
                <div>
                    <input 
                        type="radio" 
                        id="priority-1" 
                        name="priority" 
                        onChange={handleChange}
                        value={1}
                        checked={formData.priority == 1}
                    />
                    <label>1</label>
                    <input 
                        type="radio" 
                        id="priority-2" 
                        name="priority" 
                        onChange={handleChange}
                        value={2}
                        checked={formData.priority == 2}
                    />
                    <label>2</label>
                    <input 
                        type="radio" 
                        id="priority-3" 
                        name="priority" 
                        onChange={handleChange}
                        value={3}
                        checked={formData.priority == 3}
                    />
                    <label>3</label>
                </div>
                <label>Progress</label>
                <input 
                    type="range" 
                    id="progress"
                    name="progress"
                    value={formData.progress}
                    min={0}
                    max={100}
                    onChange={handleChange}    
                />
                <label>Status</label>
                <select 
                    name="status" 
                    value={formData.status} 
                    onChange={handleChange}
                >
                    <option value="not started">Not Started</option>
                    <option value="started">Started</option>
                    <option value="done">Done</option>
                </select>
                <input type="submit" value="Create Ticket" className="button max-w-xs" />
            </form>
        </div>
    )
}