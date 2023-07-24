import ResearchCard from "./ResearchCard";
import { useNavigation } from "react-router-dom";
import { useEffect, useState } from "react";

const Research = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
      fetch("https://college-admission-server-cyan.vercel.app/research")
        .then((res) => res.json())
        .then((data) => {
          setItems(data);
        });
    }, []);
  
    const navigation = useNavigation();
  
    if (navigation.state === "loading") {
      return <progress className="progress w-56"></progress>;
    }
  return (
    <div>
      <h1 className="text-5xl font-bold text-center mb-4 text-[#00425A]">
        Research Paper
      </h1>
      <div className="divider"></div>
      <div className="grid gap-3 mb-8 lg:grid-cols-3 sm:grid-cols-2">
        {items.map((card) => (
          <ResearchCard key={card._id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Research;
