import React from "react";

export interface BlogCardProps {
  id: string;
  title: string;
  summary: string;
  image: string;
  date: string;
  onClick?: () => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, summary, image, date, onClick }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition"
      onClick={onClick}
    >
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg text-[#1E40AF]">{title}</h3>
        <p className="text-gray-600 text-sm mt-1">{summary}</p>
        <span className="text-xs text-gray-400">{date}</span>
      </div>
    </div>
  );
};

export default BlogCard;
