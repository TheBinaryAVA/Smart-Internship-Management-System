import { FormEvent, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../lib/api";
import { Layout } from "../components/Layout";

interface Internship {
  _id: string;
  title: string;
  description: string;
}

export const DashboardPage = () => {
  const queryClient = useQueryClient();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const internships = useQuery({
    queryKey: ["internships"],
    queryFn: async () => (await api.get<Internship[]>("/internships")).data,
  });

  const createMutation = useMutation({
    mutationFn: async (payload: { title: string; description: string }) =>
      (await api.post("/internships", payload)).data,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["internships"] });
      setTitle("");
      setDescription("");
    },
  });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    createMutation.mutate({ title, description });
  };

  return (
    <Layout>
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
      <form
        className="bg-white p-4 rounded shadow mb-6 space-y-2"
        onSubmit={onSubmit}
      >
        <h2 className="font-medium">Create Internship</h2>
        <input
          className="w-full border p-2 rounded"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="w-full border p-2 rounded"
          value={description}
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-slate-900 text-white rounded"
          type="submit"
        >
          Add
        </button>
      </form>

      <div className="space-y-3">
        {internships.data?.map((item) => (
          <div key={item._id} className="bg-white p-4 rounded shadow">
            <h3 className="font-medium">{item.title}</h3>
            <p className="text-slate-600">{item.description}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};
