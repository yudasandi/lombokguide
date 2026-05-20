"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AdminPage() {
  const [bookings, setBookings] = useState<any[]>([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    const { data, error } = await supabase
      .from("bookings")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      alert(JSON.stringify(error));
    } else {
      setBookings(data);
    }
  };

  return (
    <main className="min-h-screen bg-black p-8 text-white">
      <h1 className="mb-10 text-4xl font-bold">
        Booking Dashboard
      </h1>

      <div className="overflow-x-auto rounded-3xl border border-white/10">
        <table className="w-full border-collapse">
          <thead className="bg-white/10">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">WhatsApp</th>
              <th className="p-4 text-left">Tour</th>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">People</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((booking) => (
              <tr
                key={booking.id}
                className="border-t border-white/10"
              >
                <td className="p-4">{booking.name}</td>
                <td className="p-4">{booking.whatsapp}</td>
                <td className="p-4">{booking.tour}</td>
                <td className="p-4">{booking.date}</td>
                <td className="p-4">{booking.people}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}