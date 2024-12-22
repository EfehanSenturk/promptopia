"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const PrompCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  const { data: session } = useSession();
  const [copied, setCopied] = useState("");
  const pathName = usePathname();
  const router = useRouter();

  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt); //post.promptu kopyaladı
    setTimeout(() => setCopied(""), 3000); // copiedi boş stringe eşitledi.
  };

  return (
    <div className="border border-orange-300 p-4 my-4">
      <div className="flex justify-between items-start gap-5">
        <div className="flex flex-1 justify-start items-center gap-3 cursor-pointer">
          <Image
            src={post.creator.image}
            alt="user_image"
            width={40}
            height={40}
            className="rounded-full , object-contain"
          />
          <div className="flex flex-col">
            <h3 className=" font-bold">{post.creator.username}</h3>
            <p className="text-sm text-gray-500">{post.creator.email}</p>
          </div>
        </div>
        <div className="cursor-pointer" onClick={handleCopy}>
          <Image
            src={
              copied === post.prompt
                ? "/assets/icons/tick.svg"
                : "assets/icons/copy.svg"
            }
            width={12}
            height={12}
            alt=""
          />
        </div>
      </div>
      <p className="my-4"> {post.prompt}</p>
      <p
        className="text-blue-400 cursor-pointer underline"
        onClick={() => handleTagClick && handleTagClick(post.tag)}
      >
        {post.tag}
      </p>
      {session?.user.id === post.creator._id && pathName === "/profile" && (
        <div className="flex gap-4 mt-3">
          <p
            className="text-sm text-green-300 cursor-pointer"
            onClick={handleEdit}
          >
            Edit
          </p>
          <p
            className="text-sm text-red-300 cursor-pointer"
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  );
};

export default PrompCard;
